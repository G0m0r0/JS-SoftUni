function getArticleGenerator(articles) {
    let clouserVlue=0;
    article=()=>{
        let content=document.getElementById('content');
        content.textContent=articles[clouserVlue];
        clouserVlue++;
    }

    return article;
}
