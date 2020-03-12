function notify(message) {
    let notification=document.getElementById('notification');
    notification.textContent=message;
    notification.style.display="block";

    let interval=setTimeout(handler,2000);

    function handler(){
        notification.style.display="none";
        clearTimeout(interval);
    }
}