import extend from '../utilities/context.js';
import models from '../models/index.js';
import docModified from '../utilities/doc-modified.js';

export default {
    get:{
        dashboard(context){

            models.idea.getAll().then(response=>{
                const ideas=response.docs.map(docModified);
                             
                  context.ideas=ideas.sort(function(a,b){
                     return b.data.collectedLikes-a.data.collectedLikes;
                 });

                extend(context).then(function(){
                    this.partial('../views/idea/dashboard.hbs');
                }) 
            });            
        },
        create(context){
            extend(context).then(function(){
                this.partial('../views/idea/create.hbs');
            })
        },
         details(context){
            const {ideaId}=context.params;
            //console.log(ideaId);

             models.idea.get(ideaId).then(response=>{
                //console.log(response);
                const idea=docModified(response);
                //console.log(cause);

                Object.keys(idea).forEach(key=>{
                    context[key]=idea[key];
                    //console.log(key);
                    //console.log(context[key])
                });

                context.canEdit=idea.data.creator===localStorage.getItem('userEmail');

                extend(context).then(function(){
                    this.partial('../views/idea/details.hbs');
                }) 

            }).catch(error=>console.error(error));
        },
        comment(context){
            const {ideaId}=context.params;
            //console.log(ideaId);
     
             models.idea.get(ideaId).then(response=>{
                const idea=docModified(response);
                //console.log(treck);
                let comment=document.getElementById('textarea');
                console.log(comment.value);
                idea.data.comments.push(comment.value);
     
                return models.idea.update(ideaId,idea);
            }).then(response=>{                
                context.redirect(`#/idea/details/${ideaId}`);
            })
        }
    },
    post:{
        create(context){

           const data={
               ...context.params, 
               uid: localStorage.getItem('userId'),
               collectedLikes:0,
               comments: [],
               creator: localStorage.getItem('userEmail')
           };
           //console.log(data);

           models.idea.create(data).then(response=>{
               //console.log(response);
               context.redirect('#/idea/dashboard');
           }).catch(e=>console.error(e));
       }
   },
   del:{
    close(context){
       const {ideaId}=context.params;

       models.idea.close(ideaId).then(response=>{
           context.redirect('#/idea/dashboard');
       })
   } 
   },
   put: {
    update(context){
       const {ideaId}=context.params;
       //console.log(ideaId);

       models.idea.get(ideaId).then(async (response)=>{
           const idea=docModified(response);
           let comment=document.getElementById('textarea');
           let button=document.getElementsByTagName('button')[0];
           if(comment!==''){
           await button.addEventListener('click',(e)=>{
                idea.data.comments.push(comment.value);

                models.idea.update(ideaId,idea).then(response=>{
                    context.redirect(`#/idea/details/${ideaId}`);
                })
            });
           }

           idea.data.collectedLikes++;

           return models.idea.update(ideaId,idea);
       }).then(response=>{
           //console.log(context);
           context.redirect(`#/idea/details/${ideaId}`);
       })

   },
},
}