function solve() {
 
 
    let authorInput = document.querySelector('#creator');
    let titleInput = document.querySelector('#title');
    let categoryInput = document.querySelector('#category');
    let contentInput = document.querySelector('#content');
    let createButton = document.querySelector("body > div > div > aside > section:nth-child(1) > form > button")
    let archiveButton = document.getElementsByClassName('btn create');
    let articles = document.querySelector("body > div > div > main > section");
  
    createButton.addEventListener('click', function (e) {
  
       e.preventDefault();
  
       let art = document.createElement('article');
  
       let category = createElement('p', null, `Category`)
       category.innerHTML += `<strong>${categoryInput.value}</strong>`
  
       let creator = createElement('p', null, `Creator`)
       creator.innerHTML += `<strong>${authorInput.value}</strong>`
  
       let content = createElement('p', null, contentInput.value);
  
       let title = createElement('h1', false, titleInput.value);
  
       let buttonsDiv = createElement('div', 'buttons');
  
       let deleteButton = createElement('button', 'btn', 'Delete');
       let archiveButton = createElement('button', 'btn', 'Archive');
  
       deleteButton.classList.add('delete');
       archiveButton.classList.add('archive');
  
  
       buttonsDiv = addChildToParent([deleteButton, archiveButton], buttonsDiv);
       arr = addChildToParent([title, category, creator, content, buttonsDiv], art)
       articles = addChildToParent([art], articles);
  
  
       deleteButton.addEventListener('click', () => {
          deleteButton.parentNode.parentNode.outerHTML = ''
       });
  
  
  
       archiveButton.addEventListener('click', (e) => {
  
          let newTile = e.target.parentNode.parentNode.firstChild.innerText;
  
          let exitItems = document.querySelector("body > div > div > aside > section.archive-section > ul");
  
          let currentRetard = document.createElement('li');
          currentRetard.innerText = newTile;
          exitItems.appendChild(currentRetard);
  
          if (exitItems.children.length >= 1) {
             var list, i, switching, b, shouldSwitch;
             list = exitItems
             switching = true;
  
             while (switching) {
  
                switching = false;
                b = list.getElementsByTagName("LI");
  
                for (i = 0; i < (b.length - 1); i++) {
  
                   shouldSwitch = false;
  
                   if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
  
                      shouldSwitch = true;
                      break;
                   }
                }
                if (shouldSwitch) {
  
                   b[i].parentNode.insertBefore(b[i + 1], b[i]);
                   switching = true;
                }
             }
          }
  
          art.innerHTML = '';
       });
  
  
    });
  
  
    function createElement(tagName, className, textContent, attributes, event) {
  
       let element = document.createElement(tagName);
  
       if (className) {
          element.classList.add(className);
       }
  
       if (textContent) {
          element.textContent = textContent;
       }
  
       if (attributes) {
          attributes.forEach((a) => element.setAttribute(a.k, a.v));
       }
  
       if (event) {
          element.addEventListener(event.name, event.func);
       }
  
       return element;
    }
  
  
    function addChildToParent(children, parent) {
       children.forEach((c) => parent.appendChild(c));
       return parent;
    }
 }