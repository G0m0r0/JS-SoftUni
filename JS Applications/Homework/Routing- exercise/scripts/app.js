async function homeViewHandler(){
    this.partials={
        header: await this.load('./templates/common/header.hbs'),
        footer:await this.load('./templates/common/footer.hbs')
      }

      this.partial('./templates/home/home.hbs');
}

async function aboutViewHandler(){
    this.partials={
        header: await this.load('./templates/common/header.hbs'),
        footer:await this.load('./templates/common/footer.hbs')
      }

      this.partial('./templates/about/about.hbs');
}

async function loginHandler(){
    this.partials={
        header: await this.load('./templates/common/header.hbs'),
        footer:await this.load('./templates/common/footer.hbs'),
        loginForm: await this.load('./templates/login/loginForm.hbs'),
      }

    await this.partial('./templates/login/loginPage.hbs');
    console.log(document.getElementById('login-form'));
     
}

async function registerViewHandler(){
    this.partials={
        header: await this.load('./templates/common/header.hbs'),
        footer:await this.load('./templates/common/footer.hbs'),
        loginForm: await this.load('./templates/register/registerForm.hbs'),
      }

    await this.partial('./templates/register/registerPage.hbs');
    console.log(document.getElementById('register-form'));
}


var app = Sammy('#main', function() {
    // include a plugin
    this.use('Handlebars','hbs');

    this.get('#/',homeViewHandler);
    this.get('#/home',homeViewHandler);
    this.get('#/about',aboutViewHandler);
    this.get('#/login',loginHandler);
    this.get('#/register',registerViewHandler);
  });
  
  // start the application


$(function(){
    app.run('#/');
    console.log("ready!");
})