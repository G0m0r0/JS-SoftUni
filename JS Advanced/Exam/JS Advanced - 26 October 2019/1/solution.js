function solve() {
   this.preventDefault;
   $elements={
      addNewProduct: document.getElementById('add-new'),
      availableProducts: document.getElementById('products'),
      myProducts: document.getElementById('myProducts'),
      addButton: document.getElementById('add-new').getElementsByTagName('button')[0],
      filterButton: document.getElementById('products').getElementsByTagName('button')[0],
      filterInput: document.getElementById('filter'),
      totalPrice: document.getElementsByTagName('h1')[1],
      buyButton: document.getElementById('myProducts').getElementsByTagName('button')[0],
   }

   $elements.addButton.addEventListener('click',addProducts);

   $elements.filterButton.addEventListener('click',filterProducts);

   $elements.buyButton.addEventListener('click',byAllProducts);

   $elements.availableProducts.addEventListener('click',addToClientsList);

   function byAllProducts(){
      $elements.totalPrice.textContent='Total Price: 00.00';

      $elements.myProducts.getElementsByTagName('ul')[0].innerHTML='';
   }

   function addToClientsList(e){
      if(e.target.tagName==='BUTTON'){
         let parent= e.target.parentNode.parentNode;
         let price=e.target.parentNode.getElementsByTagName('strong')[0].textContent;
        
         let productQuantityCountRef=e.target.parentNode.parentNode.getElementsByTagName('strong')[0];
         let parsedQuantity=Number(productQuantityCountRef.innerHTML.split(':')[1].trim());
         productQuantityCountRef.innerHTML=`Available: ${parsedQuantity-1}`;
         let name=parent.getElementsByTagName('span')[0].textContent;
         let ul=myProducts.getElementsByTagName('ul')[0];

        if(parsedQuantity-1===0)
       {
         e.target.parentNode.parentNode.remove();
       }

       let totalPrice=Number($elements.totalPrice.textContent.split(' ')[2]);
       totalPrice+=Number(price);
       $elements.totalPrice.textContent=`Total Price: ${totalPrice.toFixed(2)}`;

        let strong=createHtmlElement('strong',null,price);
       let li=createHtmlElement('li',null,name);

       li.appendChild(strong);
       ul.appendChild(li);    
      }
   }

   function filterProducts(){
      let filter=$elements.filterInput.value;

      Array.from($elements.availableProducts.getElementsByTagName('ul')[0].children).forEach(el=>{
         if(el.getElementsByTagName('span')[0].textContent.toLowerCase().includes(filter.toLowerCase())){
            el.style.display='block';
         }else{
            el.style.display='none';
         }
      })
   }

   function addProducts(e){
      e.preventDefault(); 
      const name=$elements.addNewProduct.getElementsByTagName('input')[0];
      const quantity=$elements.addNewProduct.getElementsByTagName('input')[1];
      const price=$elements.addNewProduct.getElementsByTagName('input')[2];

      let strong1=createHtmlElement('strong',null,Number(price.value).toFixed(2));
      let button=createHtmlElement('button',null,'Add to Client\'s List',null,)//{name: 'click',func: addToClientsList});
      let div=createHtmlElement('div');
      let span=createHtmlElement('span',null,name.value);
      let strong2=createHtmlElement('strong',null,`Available: ${quantity.value}`);
      let li=createHtmlElement('li');

      appendChildrenToParent([strong1,button],div);
      appendChildrenToParent([span,strong2,div],li);

      $elements.availableProducts.getElementsByTagName('ul')[0].appendChild(li);

      name.value='';
      quantity.value='';
      price.value='';
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