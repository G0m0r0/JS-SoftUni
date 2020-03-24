function attachEvents() {
    let loadPostButton=document.getElementById('btnLoadPosts');
    loadPostButton.addEventListener('click',()=>{
        fetch(`https://blog-apps-c12bf.firebaseio.com/posts`)
        .then(x=>x.json())
        .then(x=>{
            console.log(x);
        });
    });
}

attachEvents();