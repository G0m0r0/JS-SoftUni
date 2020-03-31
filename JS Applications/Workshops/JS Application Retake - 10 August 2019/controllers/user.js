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
            })
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

                context.redirect('#/home');
            })
            .catch(error=>{
                console.error(error);
            })
        },
        register(context){
            const {username,password,rePassword}=context.params;

            //console.log(context);

            if(password===rePassword){
                models.user.register(username,password)
                .then(response=>{
                    context.redirect("#/user/login");
                })
                .catch(error=>{
                    console.error(error);
                })
            }
        }
    }
}