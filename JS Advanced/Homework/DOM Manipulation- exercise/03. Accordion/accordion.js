function toggle() {
    let $button=document.getElementsByClassName('button')[0];
    let $paragraph=document.getElementById('extra');

    if($button.textContent==="More"){
        $paragraph.style.display="block";
        $button.textContent="Less";
    }else if($button.textContent==="Less"){
        $paragraph.style.display="none";
        $button.textContent="More";
    }    
}