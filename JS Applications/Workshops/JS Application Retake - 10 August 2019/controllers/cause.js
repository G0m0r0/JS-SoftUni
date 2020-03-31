import extend from '../utilities/context.js';
import models from '../models/index.js';
import docModified from '../utilities/doc-modified.js';

export default {
    get:{
        dashboard(context){

            models.cause.getAll().then(response=>{
                const causes=response.docs.map(docModified);
                
                context.causes=causes;

                extend(context).then(function(){
                    this.partial('../views/cause/dashboard.hbs');
                })
            });
            
        },
        create(context){
            extend(context).then(function(){
                this.partial('../views/cause/create.hbs');
            })
        },
        details(context){
            const {causeId}=context.params;

            models.cause.get(causeId).then(response=>{
                //console.log(response);
                const cause=docModified(response);
                //console.log(cause);

                Object.keys(cause).forEach(key=>{
                    console.log(cause[key]);
                    context[key]=cause[key];
                });

                context.canDonate=cause.uId!==localStorage.getItem('userId');

                extend(context).then(function(){
                    this.partial('../views/cause/details.hbs');
                })

            }).catch(error=>console.error(error));
        }
    },
    post:{
        create(context){

            const data={
                ...context.params, 
                uid: localStorage.getItem('userId'),
                collectedFunds: 0,
                donors: []
            };

            models.cause.create(data).then(response=>{
                //console.log(response);
                context.redirect('#/cause/dashboard');
            }).catch(e=>console.error(e));
        }
    },
    del:{
        close(context){
            const {causeId}=context.params;

            models.cause.close(causeId).then(response=>{
                context.redirect('#/cause/dashboard');
            })
        }
    },
    put: {
        donate(context){
            const {causeId,donatedAmount}=context.params;

            models.cause.get(causeId).then(response=>{
                const cause=docModified(response);

                cause.collectedFunds+=Number(donatedAmount);
                cause.donors.push(localStorage.getItem('userEmail'));

                return models.cause.donate(causeId,cause);
            }).then(response=>{
                context.redirect('#/cause/dashboard');
            })

            
            //console.log(donatedAmount);
        }
    }
}