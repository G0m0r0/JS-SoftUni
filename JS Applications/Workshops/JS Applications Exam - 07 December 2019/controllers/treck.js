import extend from '../utilities/context.js';
import models from '../models/index.js';
import docModified from '../utilities/doc-modified.js';
import treck from '../models/treck.js';

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
        edit(context){
            const {treckId}=context.params;

             models.treck.get(treckId).then(response=>{
                const treck=docModified(response);

                Object.keys(treck).forEach(key=>{
                    context[key]=treck[key];
                    console.log(key);
                    console.log(context[key]);
                });
          
            }).catch(error=>console.error(error));

            extend(context).then(function(){
                this.partial('../views/treck/edit.hbs');
            });
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
                    //console.log(key);
                    //console.log(context[key])
                });

                context.canEdit=treck.data.creator===localStorage.getItem('userEmail');
                //console.log(context.canEdit);

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
                creator: localStorage.getItem('userEmail')
            };
            //console.log(data);

            models.treck.create(data).then(response=>{
                //console.log(response);
                context.redirect('#/treck/dashboard');
            }).catch(e=>console.error(e));
        } 
    },
    del:{
         close(context){
            const {treckId}=context.params;

            models.treck.close(treckId).then(response=>{
                context.redirect('#/treck/dashboard');
            })
        } 
    },
    put: {
         like(context){
            const {treckId}=context.params;
            console.log('hi');

            models.treck.get(treckId).then(response=>{
                const treck=docModified(response);
                console.log(treck);

                //treck.collectedLikes++;
                treck.data.collectedLikes++;

                return models.treck.like(treckId,treck);
            }).then(response=>{
                context.redirect('#/treck/dashboard');
            }) 

            
            //console.log(donatedAmount);
        },
        edit(context){
            let input=document.getElementsByTagName('input')[0];
            input.value="Hello";
        }
    }
}