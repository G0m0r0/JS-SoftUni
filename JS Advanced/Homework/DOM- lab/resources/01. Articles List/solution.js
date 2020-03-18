function createArticle() {
	let title=document.getElementById('createTitle');
	let content=document.getElementById('createContent');

	if(title.value!=''&&content.value!=''){
		let sections=document.getElementById('articles');
		let article=document.createElement("article");
		let articleTitle=document.createElement('h3');
		let articleContent=document.createElement('p');

		articleContent.innerHTML=content.value;
		articleTitle.innerHTML=title.value;

		article.appendChild(articleTitle);
		article.appendChild(articleContent);
		sections.appendChild(article);

		title.value='';
		content.value='';
	}		
}