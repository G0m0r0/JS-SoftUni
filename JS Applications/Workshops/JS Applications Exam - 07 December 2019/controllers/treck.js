import extend from '../utilities/context.js';
import models from '../models/index.js';
import docModified from '../utilities/doc-modified.js';

export default {
    get:{
        dashboard(context){

            models.treck.getAll().then(response=>{
                const trecks=response.docs.map(docModified);
                //console.log(trecks);
                             
                 context.trecks=trecks;

                extend(context).then(function(){
                    this.partial('../views/home/home.hbs');
                }) 
            });
            
        },       
        create(context){
            extend(context).then(function(){
                //console.log('hi');
                this.partial('../views/treck/create.hbs');
            })
        },
         details(context){
            const {treckId}=context.params;
            //console.log(treckId);

             models.treck.get(treckId).then(response=>{
                //console.log(response);
                const treck=docModified(response);
                //console.log(cause);

                Object.keys(treck).forEach(key=>{
                    context[key]=treck[key];
                });

                //context.canDonate=cause.uId!==localStorage.getItem('userId');

                extend(context).then(function(){
                    this.partial('../views/treck/details.hbs');
                }) 

            }).catch(error=>console.error(error));
        } 
    },
    post:{
         create(context){

            const data={
                ...context.params, 
                uid: localStorage.getItem('userId'),
                collectedLikes:0,
                //creator=
            };
            console.log(data);

            models.treck.create(data).then(response=>{
                //console.log(response);
                context.redirect('#/treck/dashboard');
            }).catch(e=>console.error(e));
        } 
    },
    del:{
         close(context){
            const {causeId}=context.params;

            models.cause.close(causeId).then(response=>{
                context.redirect('#/treck/dashboard');
            })
        } 
    },
    put: {
       /*  donate(context){
            const {causeId,donatedAmount}=context.params;

            models.cause.get(causeId).then(response=>{
                const cause=docModified(response);

                cause.collectedFunds+=Number(donatedAmount);
                cause.donors.push(localStorage.getItem('userEmail'));

                return models.cause.donate(causeId,cause);
            }).then(response=>{
                context.redirect('#/cause/dashboard');
            }) */

            
            //console.log(donatedAmount);
        }
    }
