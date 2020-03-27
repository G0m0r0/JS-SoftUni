const elements={
    loadButton: document.getElementById('btnLoadTowns'),
    countriesWrapper: document.getElementById('root'),
}

elements.loadButton.addEventListener('click',()=>{
        Promise.all([fetch("https://restcountries.eu/rest/v2/all").then(x=>x.json()),
        fetch('./template.hbs').then(x=>x.text()),
    ])
    .then(([countries,templateHbs])=>{
        const template=Handlebars.compile(templateHbs);

        const resultHTML=template({countries}); //zadaljitelno klycha trqbva da savpada s html v template.hbs

        elements.countriesWrapper.innerHTML=resultHTML;
    })
})