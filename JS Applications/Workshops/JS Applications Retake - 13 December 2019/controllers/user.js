import models from '../models/index.js';
import extend from '../utilities/context.js';
import docModified from '../utilities/doc-modified.js';

export default {
    get:{
        login(context){
           // console.log(context);

            extend(context).then(function(){
                this.partial('../views/user/login.hbs');
            })
        },
        register(context){
            extend(context).then(function(){
                this.partial('../views/user/register.hbs');
            })
        },
        logout(context){
            models.user.logout().then(response=>{
                context.redirect('#/home');
            })
        },
        profile(context){                         
            models.idea.getAll().then(response=>{
                //console.log(response);
                const ideas=response.docs.map(docModified);

                let dataOfProfile={
                    countIdeas: 0,
                    nameIdeas: [],
                };

                ideas.forEach(el=>{
                    if(el.data.uid===localStorage.getItem('userId')){
                        dataOfProfile.countIdeas++;
                        dataOfProfile.nameIdeas.push(el.data.title);
                    }
                });

                if(dataOfProfile.nameIdeas.length===0){
                    dataOfProfile.nameIdeas="No ideas yet :(";
                }

                context.dataOfProfile=dataOfProfile;

                 extend(context).then(function(){
                    this.partial('../views/user/profile.hbs');
                }) 
            });
        }
    },
    post: {
        login(context){
            const {username,password}=context.params;

            models.user.login(username,password)
            .then(response=>{
                context.user=response;
                context.username=response.email;
                context.isLoggedIn=true;

                const notification=document.getElementById('notifications');
                const message=document.createElement('div');
                message.setAttribute('id','seccessBox');
                message.setAttribute('class','alert alert-success');
                message.setAttribute('role','alert');
                message.innerHTML='Successful login';
                notification.appendChild(message);
                message.style.display='block';
                setTimeout(() => message.style.display = 'none', 5000); 

                context.redirect('#/idea/dashboard');
            } )
            .catch(error=>{
                //console.error(error);            

                const notification=document.getElementById('notifications');
                const message=document.createElement('div');
                message.setAttribute('id','seccessBox');
                message.setAttribute('class','alert alert-danger');
                message.setAttribute('role','alert');
                message.innerHTML=error.message;
                notification.appendChild(message);
                message.style.display='block';
            setTimeout(() => message.style.display = 'none', 5000); 
            })
        },
        register(context){
            const {username,password,repeatPassword}=context.params;
            console.log(username);
            console.log(password);
            console.log(repeatPassword);

            //console.log(context);

            if(password===repeatPassword){
                models.user.register(username,password)
                .then(response=>{
                    context.redirect("#/idea/dashboard");
                })
                .catch(error=>{
                    console.error(error);
                })
            }
        }
    }
}