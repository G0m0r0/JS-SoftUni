function attachGradientEvents() {
    let gradient=document.getElementById('gradient-box');
    let result=document.getElementById('result');

    gradient.addEventListener('mousemove',(e)=>{
        let coordinates=e.offsetX;
        let param=300/coordinates;
        let percentage=Math.floor(100/param);

        result.innerHTML=percentage+'%';
    })

    gradient.addEventListener('mouseout',()=>{
        result.innerHTML='';
    })
}