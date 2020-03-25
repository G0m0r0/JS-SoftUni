function attachEvents() {

    const elements={
        anglerInput:document.querySelector('#addForm input.angler'),
        weightInput:document.querySelector('#addForm input.weight'),
        speciesInput:document.querySelector('#addForm input.species'),
        locationInput:document.querySelector('#addForm input.location'),
        baitInput:document.querySelector('#addForm input.bait'),
        captureTimeInput:document.querySelector('#addForm input.captureTime'),

        addButton:document.getElementsByClassName('add')[0],
        deleteButton:document.getElementsByClassName('delete')[0],
        updateButton:document.getElementsByClassName('update')[0],
        loadButton:document.getElementsByClassName('load')[0],
    }

    elements.addButton.addEventListener('click',async ()=>{
        let myCatch={
            angler: elements.anglerInput.value,
            weight: elements.weightInput.value,
            species: elements.speciesInput.value,
            location: elements.locationInput.value,
            bait: elements.baitInput.value,
            capture: elements.captureTimeInput.value,
        };

        try{
            const response = await fetch(`https://fisher-game.firebaseio.com/catches.json`,{
            method: "Post",
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(myCatch)
        });

            const data=await response.json();
        }catch(error){
            console.log(error);
        }
    });

    elements.deleteButton.addEventListener('click',async ()=>{
        const catchId="-M3DM--UOC3yxmlUNxxh";

        try{
           const response=await fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`,{
                headers:{
                    'Content-Type':'application/json'
                },
                method: 'DELETE'
            }); //return promise

            const data=await response.json();
            console.log(data); //return null

        }catch(error){
            console.log(error);
        }
    })
}

attachEvents();

