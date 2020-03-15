function tickets(input,sortingCriteria){

    class Ticket{
        constructor(destination,price,status){
            this.destination=destination;
            this.price=+price;
            this.status=status;
        }
    }

    let tickets=[];
    for (let i = 0; i < input.length; i++) {
       let tokens=input[i].split('|');
       let ticket=new Ticket(tokens[0],tokens[1],tokens[2]);
       tickets.push(ticket);
    }

    function compare(a, b) {
        let first;
        let second;
        if(sortingCriteria==='destination')
        {
            first = a.destination;
            second = b.destination;
        }else if(sortingCriteria==='price'){
            first=a.price;
            second=b.price;
        }else if(sortingCriteria==='status'){
            first=a.status;
            second=b.status;
        }
        
        let comparison=0;
        if (first > second) {
          comparison = 1;
        } else if (first < second) {
          comparison = -1;
        }
        return comparison;
    }

    tickets.sort(compare)

    return tickets;
}

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
));
