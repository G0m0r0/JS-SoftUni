function solve(){
  $elements={
    inputAuthor: document.querySelector('#creator'),
    inputTitle: document.querySelector('#title'),
    inputCategory: document.querySelector('#category'),
    inputContent: document.querySelector('#content'),
    createButton: document.getElementsByClassName('btn create')[0],
    mainForm: document.getElementsByTagName('section')[1],
    archiveSection: document.getElementsByClassName('archive-section')[0].getElementsByTagName('ul')[0],
  }
  //console.log($elements);

   $elements.createButton.addEventListener('click',createFunc);

   function deleteArticle(e){
      e.target.parentNode.parentNode.remove();
   }

   function archiveArticle(e){
      let title=$elements.mainForm.getElementsByTagName('article')[0].getElementsByTagName('h1')[0].innerHTML;
      let li=createHtmlElement('li',null,title);

      $elements.archiveSection.appendChild(li);
      e.target.parentNode.parentNode.remove();
   }

   function createFunc(e){
      e.preventDefault();
      
      let pCategory=createHtmlElement('p',null,'Category:');
      let strongCategory=createHtmlElement('strong',null,$elements.inputCategory.value);
      let pCreator=createHtmlElement('p',null,'Creator:');
      let strongCreator=createHtmlElement('strong',null,$elements.inputAuthor.value);
      let pContent=createHtmlElement('p',null,$elements.inputContent.value);
      let div=createHtmlElement('div','buttons');
      let deleteButton=createHtmlElement('button','btn delete','Delete',null,{name: 'click',func: deleteArticle});
      let archiveButton=createHtmlElement('button','btn archive','Archive',null,{name: 'click',func: archiveArticle});
      let h1=createHtmlElement('h1',null,$elements.inputTitle.value);
      let article=createHtmlElement('article');

      pCategory.appendChild(strongCategory);
      pCreator.appendChild(strongCreator);
      appendChildrenToParent([deleteButton,archiveButton],div);

      appendChildrenToParent([h1,pCategory,pCreator,pContent,div],article);

      $elements.mainForm.appendChild(article);
   }

   function createHtmlElement(tagName,className,textContent,attributeArr,event){
       let element=document.createElement(tagName);
 
       if(className){
          let elements=className.split(' ');
          elements.forEach(el=>{
             element.classList.add(el);
          })
         // element.classList.add(className);
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

'<h2>Archive</h2><ul><li>Arrays</li><li>Arrays</li></ul>'
'<h2>Archive</h2><ul><li>Arrays</li><li>MyArticle</li></ul>'
