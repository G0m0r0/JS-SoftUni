function solve() {
  let quizzie=document.getElementById('quizzie');
  let sections=document.getElementsByTagName('section');
  let result=document.getElementById('results');

  let correctAnswers=['onclick', 'JSON.stringify()','A programming API for HTML and XML documents'];
  let userAnswers=0;
  let currentStep=0;

  let handler=(e)=>{
    if(e.target.className==='answer-text'){

      sections[currentStep].style.display="none";

      if(correctAnswers.some(a=>a===e.target.innerHTML))  {
        userAnswers++;
      }
      currentStep++;

      if(currentStep<3){
          sections[currentStep].style.display="block";
      }

      
      if(currentStep===3){
        quizzie.removeEventListener('click',handler)

        result.getElementsByTagName('h1')[0].innerHTML=correctAnswers.length===userAnswers?
        'You are recognized as top JavaScript fan!':`You have ${userAnswers} right answers`;
        
        result.style.display="block";
      }
    }     
  }

    quizzie.addEventListener('click',handler);
}
