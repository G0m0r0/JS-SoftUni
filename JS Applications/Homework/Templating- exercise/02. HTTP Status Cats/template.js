console.log(cats);

(async ()=>{
    
    Handlebars.registerPartial('cat',await fetch("./single-cat-template.hbs").then(x=>x.text()));


    const template=Handlebars.compile(await fetch('./all-cats-template.hbs').then(x=>x.text()));


    const resultHtml=template({cats});

    document.getElementById('allCats').innerHTML+=resultHtml;

   Array.from(document.getElementsByTagName('button')).forEach((btn)=>{
        btn.addEventListener('click',()=>{
            const parent=btn.parentNode
            const statusDiv=parent.getElementsByClassName('status')[0];
            if(statusDiv.style.display==="none"){
                statusDiv.style.display="block";
                btn.textContent="hide status code";
            }else{
                statusDiv.style.display="none";
                btn.textContent="show status code";
            }
        })
    })
})();
