import extend from '../utilities/context.js';
import docModified from '../utilities/doc-modified.js';
import models from '../models/index.js';

export default {
    get:{      
        dashboard(context){
            models.article.getAll().then(response=>{
                const articles=response.docs.map(docModified);

                  context.article=articles.sort(function(a,b){
                      console.log(a.data.category.toLowerCase());
                    if(b.data.category.toLowerCase()>a.data.category.toLowerCase()){                            
                        return 1;
                    }else if(b.data.category.toLowerCase()<a.data.category.toLowerCase()){
                        return -1;
                    }else{
                        if(b.data.title.toLowerCase()>a.data.title.toLowerCase()){
                            return 1;
                        }else if(b.data.title.toLowerCase()<a.data.title.toLowerCase()){
                            return -1;
                        } 
                    }                        
                     
                }); 
                console.log(context.article);

                extend(context).then(function(){
                    this.partial("../views/dashboard/dashboard.hbs");
                });                 
            });
        },
        create(context){
            extend(context).then(function(){
                this.partial('../views/article/create.hbs');
            })
        },
        edit(context){
            const {articleId}=context.params;    

            models.article.get(articleId).then(async (response)=>{
                const article=docModified(response);
                let title=document.getElementById('title');
                let category=document.getElementById('category');
                let content=document.getElementById('content');
                let button=document.getElementsByTagName('button')[0];
                console.log(button);

                title.value=article.data.title;
                category.value=article.data.category;
                content.value=article.data.content;

                await button.addEventListener('click', (e)=>{
                    e.preventDefault();

                    article.data.title=title.value;
                    article.data.category=category.value;
                    article.data.content=content.value;
                    
                    models.article.update(articleId,article).then(response=>{
                         context.redirect(`#/dashboard`);
                    })                
                })                            
            }).catch(error=>console.error(error));

            extend(context).then(function(){
                this.partial('../views/article/edit.hbs');
            }); 
        },
         details(context){
            const {articleId}=context.params;
            //console.log(treckId);

             models.article.get(articleId).then(response=>{
                //console.log(response);
                const article=docModified(response);
                //console.log(cause);

                Object.keys(article).forEach(key=>{
                    context[key]=article[key];
                    //console.log(key);
                    //console.log(context[key])
                });

                context.canEdit=article.data.creator===localStorage.getItem('userEmail');
                //console.log(context.canEdit);

                extend(context).then(function(){
                    this.partial('../views/article/details.hbs');
                }) 

            }).catch(error=>console.error(error));
        } 
    },
    post:{
            create(context){

                const data={
                    ...context.params, 
                    uid: localStorage.getItem('userId'),
                    creator: localStorage.getItem('userEmail')
                };
               // console.log(data.category);
    
                models.article.create(data).then(response=>{
                    //console.log(response);
                    context.redirect('#/dashboard');
                }).catch(e=>console.error(e));
            } 
    },
    del:{
         close(context){
            const {articleId}=context.params;

            models.article.close(articleId).then(response=>{
                context.redirect('#/dashboard');
            })
        } 
    },
    put: {
         update(context){
       
    }
}
}