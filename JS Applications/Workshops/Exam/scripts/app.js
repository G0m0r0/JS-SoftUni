import controllers from '../controllers/index.js';

const app=Sammy('#root',function(){
    this.use('Handlebars','hbs');

     //home
     this.get('#/home',controllers.home.get.home);
     this.get('#/dashboard',controllers.article.get.dashboard);

     //user
     this.get('#/user/login',controllers.user.get.login);
     this.get("#/user/register", controllers.user.get.register);
 
     this.post("#/user/login",controllers.user.post.login);
     this.post("#/user/register",controllers.user.post.register);
     this.get("#/user/logout",controllers.user.get.logout);
     //articles
 
     this.get("#/article/create",controllers.article.get.create);
     this.post('#/article/create',controllers.article.post.create);
     this.get("#/article/details/:articleId",controllers.article.get.details);
     //edit and delete

     this.get("#/article/close/:articleId",controllers.article.del.close);
     this.get('#/article/edit/:articleId',controllers.article.get.edit);

     Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
        return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
    });
});

(()=>{
    app.run('#/home');
})();   