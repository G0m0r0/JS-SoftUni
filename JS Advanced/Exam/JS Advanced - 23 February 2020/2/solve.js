class Article{
    constructor(title, creator){
        this.title=title,
        this.creator=creator,
        this.comments=[],
        this._likes=[]
        //modify
    }

    get likes(){
        if(this._likes.length===0){
            //test later
            return `${this.title} has 0 likes`;
        }

        if(this._likes.length===1){
            return `${this._likes[0]} likes this article!`;
        }

        return `${this._likes[0]} and ${this._likes.length-2} others like this article!`;
    }
    set likes(username){
        this._likes.push(username)
    }


    like(username){
        if(!this.likes.includes(username)){
            throw new Error("You can't like the same article twice!");
        }

        if(this.creator===username){
            throw new Error("You can't like your own articles!");
        }

        this.likes=username;

        return `${username} liked ${this.title}!`;
    }

    dislike (username){
        if(!this.likes.includes(username)){
            throw new Error("You can't dislike this article!");
        }

        let indexOfUser=this.likes.indexOf(username);
        this.likes.splice(indexOfUser,1);

        return `${username} disliked ${this.title}`;
    }

    comment (username, content, id){
        for (let i = 0; i < this.comments.length; i++) {
            if(this.comments[i].id===id&&id!=undefined){
                this.comments[i].replies.push({id: `id.${this.comments[i].replies.length+1}`, username, content});

                return "You replied successfully";
            }
            
            this.comments[i].push({id: `${this.comments[i].length+1}`, username, content, replies: []})
        }
    }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
//console.log(art.toString('username'));
console.log()
//art.like("Zane");
c//onsole.log(art.toString('desc'));

