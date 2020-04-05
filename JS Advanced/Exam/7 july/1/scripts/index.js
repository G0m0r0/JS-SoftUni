function mySolution(){
    const $elements={
        askQuestionTextArea: document.getElementById('inputSection').getElementsByTagName('textarea')[0],
        usernameInputField: document.getElementById('inputSection').getElementsByTagName('input')[0],
        askQuestionButton: document.getElementById('inputSection').getElementsByTagName('button')[0],
        pendingQuestionsDiv: document.getElementById('pendingQuestions'),
        openQuestionsDiv: document.getElementById('openQuestions'),
    }

    $elements.askQuestionButton.addEventListener('click',askQuestion)

    function askQuestion(){
        const question=$elements.askQuestionTextArea.value;
        const givenUsername=$elements.usernameInputField.value;
        const username=givenUsername!==''?givenUsername:'Anonymous';
        
        let pendingQuestionDiv=createHtmlElement('div','pendingQuestion');
        let usernameImage=createHtmlElement('img',null,null,[{key: 'src',value: './images/user.png'},{key: 'width',value: 32},{key: 'height',value: 32}]);
        let usernameSpan=createHtmlElement('span',null,username);
        let questionP=createHtmlElement('p',null,question);
        let actionsDiv=createHtmlElement('div','actions');
        let archiveBtn=createHtmlElement('button','archive','Archive',null,{name: 'click',func: archiveQuestion});
        let openBtn=createHtmlElement('button','open','Open',null,{name: 'click',func: openQuestion});

        actionsDiv=appendChildrenToParent([archiveBtn,openBtn],actionsDiv);
        pendingQuestionDiv=appendChildrenToParent([usernameImage,usernameSpan,questionP,actionsDiv],pendingQuestionDiv);

        $elements.pendingQuestionsDiv.appendChild(pendingQuestionDiv);
    }

    function archiveQuestion(){
        const questionDiv= this.parentNode.parentNode
        questionDiv.remove();
    }

    function openQuestion(){
        const questionDiv=this.parentNode.parentNode;

        questionDiv.className='openQuestion';
        let actionsDiv=questionDiv.getElementsByTagName('div')[0];
        //console.log(actionsDiv);
        actionsDiv.innerHTML='';
        const replyBtn=createHtmlElement('button','reply','Reply',null,{name: 'click',func: replyToQuestion});
        actionsDiv=appendChildrenToParent([replyBtn],actionsDiv);

        let replySectionDiv=createHtmlElement('div','replySection',null,[{key: 'style',value: 'display: none;'}]);
        let replyInput=createHtmlElement('input','replyInput',null,[{key: 'type',v: 'text'},{key: 'placeholder',value: 'Reply to this question here...'}]);
        let sendAnswerBtn=createHtmlElement('button','replyButton','Send',null,{name: 'click',func: addAnswer});
        let answersOl=createHtmlElement('ol','reply',null,[{key: 'type',value: '1'}]);

        replySectionDiv=appendChildrenToParent([replyInput,sendAnswerBtn,answersOl],replySectionDiv);
        questionDiv.appendChild(replySectionDiv);

        $elements.openQuestionsDiv.appendChild(questionDiv);
    }

    function replyToQuestion(){
        let button=this;
        let replySectionDiv= this.parentNode.parentNode.getElementsByClassName('replySection')[0];
        if(button.textContent==="Reply"){
            replySectionDiv.style.display='block';
            button.textContent="Back";
        }else{
            replySectionDiv.style.display='none';
            button.textContent="Reply";
        }

    }

    function addAnswer(){
        const parent=this.parentNode;
        const answerInput=parent.getElementsByTagName('input')[0].value;

        let answerLi=createHtmlElement('li',null,answerInput);
        parent.getElementsByTagName('ol')[0].appendChild(answerLi);
    }

    function createHtmlElement(tagName,className,textContent,attribute,event){
        let element=document.createElement(tagName);

        if(className){
            element.classList.add(className);
        }

        if(textContent){
            element.textContent=textContent;
        }

        if(attribute){
            attribute.forEach((el)=>element.setAttribute(el.key,el.value));
        }

        if(event){
            element.addEventListener(event.name,event.func);
        }

        return element;
    }

    function appendChildrenToParent(children,parent){
        children.forEach(el=>parent.appendChild(el));
        return parent;
    }
}