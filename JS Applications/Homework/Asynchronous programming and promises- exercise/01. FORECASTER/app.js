function attachEvents() {
    let submitButton=document.getElementById('submit');
    let inputField=document.getElementById('location');
    let forecastPart=document.getElementById('forecast');
    let current=document.getElementById('current');
    let upcoming=document.getElementById('upcoming');

    let notificationBar=document.getElementById('notf');

    let symbols={
        'Sunny': '☀',
        'Partly sunny': "⛅",
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°',
    }

    const errorHandler=(e)=>{
        console.dir(e);
        notificationBar.innerHTML='Error ocurred!';
    }

        submitButton.addEventListener('click',async()=>{
            fetch(`https://judgetests.firebaseio.com/locations.json`)
            .then(x=>x.json())
            .then(x=>{
                let code=x.find(x=>x.name===inputField.value).code;
                forecastPart.style.display='block';

                Promise.all([
                    fetch(`https://judgetests.firebaseio.com/forecast/today/${code}.json`).then(x=>x.json()),
                    fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`).then(x=>x.json())
                ])
                .then(showWheatherLocation)            
                .catch(errorHandler);                
               
            })
            .catch(errorHandler);
        });

        function showWheatherLocation([todayData,upcomingData]){
            const {condition,high,low}=todayData.forecast;
        

            let forecastDiv=createHTMLElement('div',['forecasts']);

            let symbolSpam=createHTMLElement('spam',['condition','symbol'],symbols[condition]);

            let conditionSpan=createHTMLElement('span',['condition']);

            let deg=`${low}${symbols.Degrees}/${high}${symbols.Degrees}`;
            let forecaseFirst=createHTMLElement('span',['forecast-data'],todayData.name);
            let forecaseSecond=createHTMLElement('span',['forecast-data'],deg);
            let forecaseThird=createHTMLElement('span',['forecast-data'],condition);

            conditionSpan.appendChild(forecaseFirst);
            conditionSpan.appendChild(forecaseSecond);
            conditionSpan.appendChild(forecaseThird);

            forecastDiv.appendChild(symbolSpam);
            forecastDiv.appendChild(conditionSpan);

            current.appendChild(forecastDiv);


            const{forecast,name}=upcomingData;
            let forecastInfoDiv=createHTMLElement('div',['forecast-info']);

            forecast.forEach(({condition,high,low})=>{
                console.log(condition);
                console.log(high);
                console.log(low);
                let upcomingSpan=createHTMLElement('span',['upcoming']);

                let deg=`${low}${symbols.Degrees}/${high}${symbols.Degrees}`;
                let symbolSpan=createHTMLElement('span',['symbol'],symbols[condition]);
                let degreesSpan=createHTMLElement('span',['forecast-data'],deg);
                let conditionSpan=createHTMLElement('span',['forecast-data'],condition);
            
                upcomingSpan.appendChild(symbolSpan);
                upcomingSpan.appendChild(degreesSpan);
                upcomingSpan.appendChild(conditionSpan);

                forecastInfoDiv.appendChild(upcomingSpan);
            });

            upcoming.appendChild(forecastInfoDiv);
        }

        function createHTMLElement(tagName,classNames,textContent){
            let element=document.createElement(tagName);
        
            if(classNames){
                element.classList.add(...classNames);
            }
        
            if(textContent){
                element.textContent=textContent;
            }
        
            return element;
        }
    
}

attachEvents();