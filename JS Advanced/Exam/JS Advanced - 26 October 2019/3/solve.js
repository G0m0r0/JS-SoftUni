class Forum{
    constructor(){
        this.users=[],
        this.questions=[],
        this.id=1
        this.areLoggedIn=[];
    }

    register(username,password,repeatPassword,email){
        if(!(username&&password&&repeatPassword&&email)){
            throw new Error("Input can not be empty");
        }

        if(password!==repeatPassword){
            throw new Error("Passwords do not match");
        }

        this.users.forEach(el=>{
            if(el.username===username){
                throw new Error("This user already exists!");
            }
            if(el.email===email){
                throw new Error("This user already exists!");
            }
        });

        this.users.push({username,email});
        
        return `${username} with ${email} was registered successfully!`;
    }

    login(username,password){
        if(!this.users.find(x=>x.username===username)){
            throw new Error("There is no such user");
        }
           
        if(this.users.find(x=>x.username===username&&x.password===password)){
            this.areLoggedIn.push({username,password});
            return "Hello! You have logged in successfully";
        }

        this.areLoggedIn.push({username,password});
    }

    logout(username,password){
        //check later for second verification
        if(!this.users.find(x=>x.username===username)||!this.areLoggedIn.find(x=>x.username===username)){
            throw new Error("There is no such user");
        }

        if(this.users.find(x=>x.username===username&&x.password===password)){
            return "You have logged out successfully";
        }
        
        this.areLoggedIn=this.areLoggedIn.filter(x=>x!==username);
    }

    postQuestion(username,question){
        if(!this.users.find(x=>x.username===username)||!this.areLoggedIn.find(x=>x.username===username)){
            throw new Error("There is no such user");
        }

        if(question===''){
            throw new Error("Invalid question");
        }

        this.questions.push({id:this.id,question,answers: [],postedBy: username});
        this.id++;

        return "Your question has been posted successfully";
    }

    postAnswer(username,questionId,answer){
        if(!this.users.find(x=>x.username===username)||!this.areLoggedIn.find(x=>x.username===username)){
            throw new Error("You should be logged in to post answers");
        }

        if(answer===''){
            throw new Error("Invalid answer"); 
        }

        if(!this.questions.find(x=>x.id===questionId)){
            throw new Error("There is no such question");
        }

        let questionRef=this.questions.find(x=>x.id===questionId);
        questionRef.answers.push({
            answeredBy: username,
            answer: answer,
        });

        return "Your answer has been posted successfully";
    }
    showQuestions(){
      let temp=this.questions;

      return this.questions.reduce((acc,x,i)=>{
          return acc+=`Question ${x.id} by ${x.postedBy}: ${x.question}`
          +x.answers.reduce((answerAcc,answer)=>{
            return answerAcc+=`\n---${answer.answeredBy}: ${answer.answer}`;
          },'')+'\n';
      },'').trim();
    }
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael',2, "How old is she?");
forum.postAnswer('Michael',2, "Tell us how tall she is.");
forum.postQuestion('Michael', "?");

console.log(forum.showQuestions());
