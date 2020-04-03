export function successNotification(message){

    let notification=document.querySelector('#info');
    notification.innerHTML=`<div id="successBox" class="alert alert-success" role="alert">${message}</div>`;
    
}

export function loadingNotification(){

}

export function errorNotification(message){

}

{/* <div id="notifications">
    <div id="successBox" class="alert alert-success" role="alert">{Success Message...}</div>
    <div id="loadingBox" class="alert alert-info" role="alert">Loading...</div>
    <div id="errorBox" class="alert alert-danger" role="alert">{Error Message...}</div>
  </div> */}