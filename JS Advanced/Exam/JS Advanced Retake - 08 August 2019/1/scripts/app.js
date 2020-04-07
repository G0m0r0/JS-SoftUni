function solve() {
    $elements={
       addNewBook: document.getElementsByTagName('form')[0].getElementsByTagName('button')[0],
       inputTitle: document.getElementsByTagName('form')[0].getElementsByTagName('input')[0],
       inputYear: document.getElementsByTagName('form')[0].getElementsByTagName('input')[1],
       inputPrice: document.getElementsByTagName('form')[0].getElementsByTagName('input')[2],
       totalPrice: document.getElementsByTagName('h1')[1],
       newBooksSection: document.getElementById('outputs').getElementsByTagName('section')[1].getElementsByTagName('div')[0],
       oldBooksSection: document.getElementById('outputs').getElementsByTagName('section')[0].getElementsByTagName('div')[0],
    }
    console.log($elements);

    $elements.addNewBook.addEventListener('click',addNewBook);

    function buyItem(e){
        let totalPrice=Number($elements.totalPrice.textContent.split(' ')[3]);
        let currPrice=Number(e.target.parentNode.getElementsByTagName('button')[0].textContent.split(' ')[4]);
        
        totalPrice+=currPrice;
        $elements.totalPrice.textContent=`Total Store Profit: ${totalPrice} BGN`;

        e.target.parentNode.remove();
    }

    function moveToOld(e){
        let priceOld=(Number(e.target.parentNode.getElementsByTagName('button')[0].textContent.split(' ')[4])*0.85).toFixed(2);
        let p=e.target.parentNode.getElementsByTagName('p')[0];
        let button=createHtmlElement('button',null,`Buy it only for ${priceOld} BGN`,null,{name: 'click',func: buyItem});
        let div=createHtmlElement('div','book');
        
        appendChildrenToParent([p,button],div);
        $elements.oldBooksSection.appendChild(div);

        e.target.parentNode.remove();
    }

    function addNewBook(e){
        e.preventDefault();
        if($elements.inputYear.value>=2000){            
        let p=createHtmlElement('p',null,`${$elements.inputTitle.value} [${$elements.inputYear.value}]`);
        let button1=createHtmlElement('button',null,`Buy it only for ${Number($elements.inputPrice.value).toFixed(2)} BGN`,null,{name: 'click',func: buyItem});
        let button2=createHtmlElement('button',null,`Move to old section`,null,{name: 'click',func: moveToOld});

        let div=createHtmlElement('div','book');
        appendChildrenToParent([p,button1,button2],div);

        $elements.newBooksSection.appendChild(div);
        }else{
            let price=($elements.inputPrice.value*0.85).toFixed(2);
            
            let p=createHtmlElement('p',null,`${$elements.inputTitle.value} [${$elements.inputYear.value}]`);
            let button1=createHtmlElement('button',null,`Buy it only for ${price} BGN`,null,{name: 'click',func: buyItem});

            let div=createHtmlElement('div','book');
            appendChildrenToParent([p,button1],div);

            $elements.oldBooksSection.appendChild(div);
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