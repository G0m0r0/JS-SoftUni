class Library{
    constructor(libraryName){
        this.libraryName=libraryName,
        this.subscribers=[],
        this.subscriptionTypes={
            normal: this.libraryName.length,
            special: this.libraryName.length*2,
            vip: Number.MAX_SAFE_INTEGER,
        }
    }

    subscribe(name, type){
        type=type.toLowerCase();
        if(type!=='normal'&&type!=='special'&&type!=='vip'){
            throw new Error(`The type ${type} is invalid`);
        }

        if(!this.subscribers.find(x=>x.name===name)){
            this.subscribers.push({name,type,books: []});
        }

        this.subscribers.find(x=>{
            if(x.name===name){
                x.type=type;
            }
        });

        return this.subscribers.find(x=>x.name===name);
    }

    unsubscribe(name){
        let subscriber=this.subscribers.find(x=>x.name===name);
        if(!subscriber){
           throw new Error(`There is no such subscriber as ${name}`);
        }

      this.subscribers= this.subscribers.filter(x=>x.name!==subscriber.name);

       return this.subscribers;
    }
    receiveBook(subscriberName, bookTitle, bookAuthor){
        let subscriber=this.subscribers.find(x=>x.name===subscriberName);
        if(!subscriber){
           throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        let subscriptionLimit=0;
        if(subscriber.type==='normal'){
            subscriptionLimit=this.subscriptionTypes.normal;
        }else if(subscriber.type==='special'){
            subscriptionLimit=this.subscriptionTypes.special;
        }else if(subscriber.type==='vip'){
            subscriptionLimit=this.subscriptionTypes.vip;
        }

        if(subscriber.books.length>=subscriptionLimit){
            throw new Error(`You have reached your subscription limit ${subscriptionLimit}!`);
        }

        subscriber.books.push({title: bookTitle,author: bookAuthor});

        return subscriberName;
    }

    showInfo (){
        if(this.subscribers.length===0){
            return `${this.libraryName} has no information about any subscribers`
        }  

        let info='';
        let subs=this.subscribers;
        for (let i = 0; i < subs.length; i++) {
            if(subs[i].books.length===0){
                info+=`\nSubscriber: ${subs[i].name}, Type: ${subs[i].type}`
            }else{
                info+=`\nSubscriber: ${subs[i].name}, Type: ${subs[i].type}\nReceived books: `;
                for (let j = 0; j < subs[i].books.length; j++) {
                    if(j===subs[i].books.length-1){
                        info+=`${subs[i].books[j].title} by ${subs[i].books[j].author}`;
                    }else{
                        info+=`${subs[i].books[j].title} by ${subs[i].books[j].author}, `;
                    }                  
                }
            }            
        }

        return info.trim()+'\n';
    }
}
'Subscriber: Peter, Type: normal\nReceived books: Lord of the rings by J. R. R. Tolkien\nSubscriber: Josh, Type: vip\nReceived books: Graf Monte Cristo by Alexandre Dumas, Cromwell by Victor Hugo, Marie Tudor by Victor Hugo, Bug-Jargal by Victor Hugo, Les Orientales by Victor Hugo, Marion de Lorme by Victor Hugo'
'Subscriber: Peter, Type: normal\nReceived books: Lord of the rings by J. R. R. Tolkien\nSubscriber: Josh, Type: vip\nReceived books: Graf Monte Cristo by Alexandre Dumas, Cromwell by Victor Hugo, Marie Tudor by Victor Hugo, Bug-Jargal by Victor Hugo, Les Orientales by Victor Hugo, Marion de Lorme by Victor Hugo\n'



let library=new Library('nn');
library.subscribe('name1','normal');
library.subscribe('name1','vip')
//console.log(library.unsubscribe('name1'));
library.receiveBook('name1','title','author');
library.receiveBook('name1','title','author');
library.subscribe('name2','normal');
library.receiveBook('name2','title2','author2');
library.receiveBook('name2','title3','author3');
console.log(library.showInfo());

