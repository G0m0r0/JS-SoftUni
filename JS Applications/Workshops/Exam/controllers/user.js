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
            })}, 
    },
    post: {
        login(context){
            //console.log(context);
            const {email,password}=context.params;
            //console.log(email);
            //console.log(password);
           
                /*  const notification=document.getElementById('notifications');
                 const message=document.createElement('div');
                 message.setAttribute('id','seccessBox');
                 message.setAttribute('class','alert alert-success');
                 message.setAttribute('role','alert');
                 message.innerHTML='Successful login';
                 notification.appendChild(message);
                 message.style.display='block';
                 setTimeout(() => message.style.display = 'none', 5000);  */

            models.user.login(email,password)
            .then(response=>{
                context.user=response;
                context.email=response.email;
                context.isLoggedIn=true;

                context.redirect('#/dashboard');
            })
            .catch(error=>{
                console.error(error);
            })
        },
        register(context){
            const {email,password,reppass}=context.params;
           // console.log(email);
            //console.log(password);
            //console.log(reppass);

            if(password===reppass){
                models.user.register(email,password)
                .then(response=>{
                    context.redirect("#/dashboard");
                })
                .catch(error=>{
                    console.error(error);
                })
            }
        }
    }
}