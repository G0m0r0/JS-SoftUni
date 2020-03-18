let result=(function () {
    const faces=["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const Suits={
        SPADES: '♠',
  	    HEARTS: '♥',
        DIAMONDS: '♦',
     	CLUBS: '♣',
    }
    
    class Card{
        constructor(face,suit){
            this.face=face;
            this.suit=suit;
        }

        get face(){
            return this.innerFace;
        }

        set face(newFace){
            if(faces.includes(newFace.toString()))
            {
                this.innerFace=newFace;
            }else{
                throw new Error('No such face');
            }            
        }

        get suit(){
            return this.innerSuit;
        }
        set suit(newSuit){
            if(Object.values(Suits).includes(newSuit)){
            this.innerSuit=newSuit;
            }else{
                throw new Error('No such suit');
            }
        }
    }

    return {
        Suits: Suits,
        Card: Card
    };

}());

let Card=result.Card;
let Suits=result.Suits;

let card =new Card("Q",Suits.HEARTS);
console.log(card.face);
console.log(card.suit);