import{createFormEntity} from './form-helpers.js';

async function applyCommon(){
  this.partials={
    header: await this.load('./templates/common/header.hbs'),
    footer: await this.load('./templates/common/footer.hbs')
  }

  this.username=sessionStorage.getItem('username');
  this.loggedIn=!!sessionStorage.getItem('token');
}

async function homeViewHandler(){
    await applyCommon.call(this);

    this.partial('./templates/home/home.hbs');
}

async function aboutViewHandler(){
    await applyCommon.call(this);

    this.partial('./templates/about/about.hbs');
}

async function loginHandler(){
   await applyCommon.call(this);   
   this.partials.loginForm= await this.load('./templates/login/loginForm.hbs');

    await this.partial('./templates/login/loginPage.hbs');
    let formRef=document.getElementById('login-form');

    formRef.addEventListener('submit',e=>{
      e.preventDefault();

      let form=createFormEntity(formRef,("username","passsword"));
      let formValue= form.getValue();

      firebase.auth().signInWithEmailAndPassword(formValue.username,formValue.password)
    .then((response)=>{
        console.log(e);

        firebase.auth().currentUser.getIdToken().then(token=>{
           sessionStorage.setItem('token',token);
           sessionStorage.setItem('username',response.user.email);

        this.redirect(['#/home']);
      });
    })
    .catch(function(error){
      
    });
  });
  }

  async function catalogHandler(){
    await applyCommon.call(this);

    this.partial('./templates/catalog/teamCatalog.hbs');

    let token=sessionStorage.getItem('token');

    fetch(`https://softuniremotedb-my.firebaseio.com/.json?auth=`+token).then(x=>x.json()).then(response=>{
      console.log(response);
    })


  }

async function registerViewHandler(){
    await applyCommon.call(this);
    this.partials.registerForm= await this.load('./templates/register/registerForm.hbs');

    await this.partial('./templates/register/registerPage.hbs');
    let formRef=document.getElementById('register-form');

    let form=createFormEntity(formRef,['username','password','repeatPassword']);

    formRef.addEventListener('submit',(e)=>{
      e.preventDefault();

      let formValue=form.getValue();
      if(formValue.password!==formValue.repeatPassword){
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(formValue.username,formValue.password)
      .then(response=>{
        firebase.auth().currentUser.getIdToken().then(token=>{
          sessionStorage.setItem('token',token);
          sessionStorage.setItem('username',response.user.email);
        });

        this.redirect(['#/home']);
      })

      console.log(form.getValue());
    });
}

async function logoutHandler(){
  sessionStorage.clear();
  firebase.auth().signOut();
  this.redirect(['#/home']);
}


var app = Sammy('#main', function() {
    // include a plugin
    this.use('Handlebars','hbs');

    this.get('#/',homeViewHandler);
    this.get('#/home',homeViewHandler);
    this.get('#/about',aboutViewHandler);
    this.get('#/login',loginHandler);
    this.post('#/login',()=>false);
    this.get('#/register',registerViewHandler);
    this.post('#/register',()=>false);
    this.get('#/logout',logoutHandler);
    this.get('#catalog',catalogHandler);
  });
  
  // start the application


$(function(){
    app.run('#/');
    console.log("ready!");
})