function solve() {
    //this.preventDefault;
    $elements={
       taskInput: document.getElementById('task'),
       descriptionInput: document.getElementById('description'),
       dateInput: document.getElementById('date'),
       addButton: document.getElementById('add'),
       openSpace: document.getElementsByTagName('section')[1], //section
      //InProgressSpace: document.getElementById('in-progress'), //div
       InProgressSpace: document.getElementsByTagName('section')[2], //div
       completeSection: document.getElementsByTagName('section')[3], //section
    }
    console.log($elements);

    $elements.addButton.addEventListener('click',addToOpen);

    function finishButton(){
        let divToAppendAll=$elements.completeSection.getElementsByTagName('div')[1];
      
        let h3=createHtmlElement('h3',null,$elements.taskInput.value);
        let p1=createHtmlElement('p',null,`Description: ${$elements.descriptionInput.value}`);
        let p2=createHtmlElement('p',null,`Due Date: ${$elements.dateInput.value}`);
        let article=createHtmlElement('article');

        appendChildrenToParent([h3,p1,p2],article);
        divToAppendAll.appendChild(article);

        $elements.InProgressSpace.getElementsByTagName('div')[1].innerHTML='';
    }

    function startButton(){
        let divToAttachAll=$elements.InProgressSpace.getElementsByTagName('div')[1];

        let button1=createHtmlElement('button','red','Delete',null,{name: 'click',func: deleteButton});
        let button2=createHtmlElement('button','orange','Finish',null,{name: 'click',func: finishButton});
        let div=createHtmlElement('div','flex');
        let h3=createHtmlElement('h3',null,$elements.taskInput.value);
        let p1=createHtmlElement('p',null,`Description: ${$elements.descriptionInput.value}`);
        let p2=createHtmlElement('p',null,`Due Date: ${$elements.dateInput.value}`);
        let article=createHtmlElement('article');

        appendChildrenToParent([button1,button2],div);
        appendChildrenToParent([h3,p1,p2,div],article);

       // $elements.InProgressSpace.appendChild(article);
       divToAttachAll.appendChild(article);
        $elements.openSpace.getElementsByTagName('div')[1].innerHTML='';
    }

    //check for two different buttons
    function deleteButton(e){
      e.target.parentNode.parentNode.remove();
    }

    function addToOpen(e){
        e.preventDefault();
        if($elements.taskInput.value!==''&&$elements.descriptionInput.value!==''&&$elements.dateInput.value!==''){
            let divToAttachAll=$elements.openSpace.getElementsByTagName('div')[1];
        
        let button1=createHtmlElement('button','green','Start',null,{name: 'click',func: startButton});
        let button2=createHtmlElement('button','red','Delete',null,{name: 'click',func: deleteButton});
        let div=createHtmlElement('div','flex');
        let h3=createHtmlElement('h3',null,$elements.taskInput.value);
        let p1=createHtmlElement('p',null,`Description: ${$elements.descriptionInput.value}`);
        let p2=createHtmlElement('p',null,`Due Date: ${$elements.dateInput.value}`);
        let article=createHtmlElement('article');

        appendChildrenToParent([button1,button2],div);
        appendChildrenToParent([h3,p1,p2,div],article);

        divToAttachAll.appendChild(article);
        }        
    }
    

function createHtmlElement(tagName,className,textContent,attributeArr,event){
      let element=document.createElement(tagName);

      if(className){
         element.classList.add(className);
      }

      if(textContent){
         element.textContent=textContent;
      }

      if(attributeArr){
         attributeArr.forEach(el => {
            element.setAttribute(el.key,el.value);
         });
      }

      if(event){
         element.addEventListener(event.name,event.func);
      }

      return element;
   }

   function appendChildrenToParent(childrenArr,parent){
      childrenArr.forEach(el=>parent.appendChild(el));

      return  parent;
   }
}