function cardFactory(){
    const faces=['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits=['S', 'H', 'D', 'C'];

    class Card{
        constructor(face,suit){
            this.face=face;
            this.suit=suit;
        }

        toString(){
            return this.face+this.suit;
        }
    }
}

