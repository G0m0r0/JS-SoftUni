function solve(){
    class Post{
        constructor(title,content){
            this.title=title,
            this.content=content
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`;            
        }
    }

    class SocialMediaPost extends Post{
        constructor(title,content,likes,dislikes){
            super(title,content),
            this.likes=likes,
            this.dislikes=dislikes,
            this.comments=[]
        }

        //comments(str){
       ///     this._comments=str;
       // }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
            let ouput=super.toString()+'\n';
            ouput+=`Rating: ${this.likes-this.dislikes}`;
            if(this.comments.length>0){
                ouput+='\nComments:\n'
                ouput+=this.comments.map((c)=>` * ${c}`).join('\n');
            }

            return ouput;
        }
    }
    
    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content),
            this._views=views
        }
        view(){
            this._views++;
            return this;
        }

        toString(){
            return super.toString()+`\nViews: ${this._views}`;
        }
    }

    return{
        Post,
        SocialMediaPost,
        BlogPost,
    }
}

'Post: TestTitle\nContent: TestContent\nRating: -5\n'
'Post: TestTitle\nContent: TestContent\nRating: -5'