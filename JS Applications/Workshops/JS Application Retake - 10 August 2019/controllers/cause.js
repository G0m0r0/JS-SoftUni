import extend from '../utilities/context.js';
import models from '../models/index.js';
import docModified from '../utilities/doc-modified.js';

export default {
    get:{
        dashboard(context){

            models.cause.getAll().then(response=>{
                const causes=response.docs.map(docModified);
                //console.log(causes);
                context.causes=causes;
                //context.log(context.causes);

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
                const cause=docModified(response);

                Object.keys(cause).forEach(key=>{
                    context[key]=cause[key];
                    //!!!console.log(key);
                    //!!!console.log(context[key]);
                });

                //console.log(cause.data);
                //DON'T FORGET cause.data!!!!!!!!!!!
                context.canDonate=cause.data.uId!==localStorage.getItem('userId');

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
                uId: localStorage.getItem('userId'),
                collectedFunds: 0,
                donors: []
            };
            //console.log(data)

            models.cause.create(data).then(response=>{
                //console.log(response);
                context.redirect('#/cause/dashboard');
            }).catch(e=>console.error(e));
        }
    },
    del:{
        close(context){
            const {causeId}=context.params;
            //console.log(causeId);

            models.cause.close(causeId).then(response=>{
                context.redirect('#/cause/dashboard');
            })
        }
    },
    put: {
        donate(context){
            const {causeId,donatedAmount}=context.params;
            //console.log(causeId);
            //console.log(donatedAmount);

            models.cause.get(causeId).then(response=>{
                const cause=docModified(response);

                cause.data.collectedFunds+=Number(donatedAmount);

                //add only one person to the list of donors
                if(!cause.data.donors.includes(localStorage.getItem('userEmail'))){
                    cause.data.donors.push(localStorage.getItem('userEmail'));
                }        

                return models.cause.donate(causeId,cause);
            }).then(response=>{
                context.redirect('#/cause/dashboard');
            })

            
            //console.log(donatedAmount);
        }
    }
}