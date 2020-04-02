import models from '../models/index.js';
import extend from '../utilities/context.js';

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
        profile(context){
                extend(context).then(function(){
                    this.partial('../views/user/profile.hbs');
                })
             /*  const {treckId}=context.params;
              console.log(treckId);
  
               models.treck.get(treckId).then(response=>{
                  const causes=response.docs.map(docModified);
                  
                  context.causes=causes;
  
                  extend(context).then(function(){
                      this.partial('../views/user/profile.hbs');
                  })
            });  */
        }
    },
    post: {
        login(context){
            //console.log(context);
            const {username,password}=context.params;
            //console.log(username);
           // console.log(password);

            models.user.login(username,password)
            .then(response=>{
                context.user=response;
                context.username=response.email;
                context.isLoggedIn=true;

                context.redirect('#/treck/dashboard');
            })
            .catch(error=>{
                console.error(error);
            })
        },
        register(context){
            const {username,password,rePassword}=context.params;

            if(password===rePassword){
                models.user.register(username,password)
                .then(response=>{
                    context.redirect("#/treck/dashboard");
                })
                .catch(error=>{
                    console.error(error);
                })
            }
        }
    }
}