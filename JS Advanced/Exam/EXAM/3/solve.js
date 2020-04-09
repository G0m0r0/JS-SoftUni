class Bank{
    bankName;
    constructor (bankName){
        //check later if private
        this._bankName=bankName,
        this.allCustomers=[]
    }
  /*   get bankName(){
        return this._bankName;
    } */
    set bankName(value){
        this._bankName=value;
    }

     newCustomer (customer){
        if(this.allCustomers.find(x=>x.personalId===customer.personalId)){
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }

        let newCustomer={
            firstName: customer.firstName,
            lastName: customer.lastName,
            personalId: customer.personalId,
            totalMoney: 0,
            transactionInfo: [],
        }

        this.allCustomers.push(newCustomer);

        //check if to string()
        return customer;
    } 
    depositMoney (personalId, amount){
        if(!this.allCustomers.find(x=>x.personalId===personalId)){
            throw new Error(`We have no customer with this ID!`)
        }

        let customer=this.allCustomers.find(x=>x.personalId===personalId);
        customer.totalMoney+=amount;
        customer.transactionInfo.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);

        return `${customer.totalMoney}$`;
    }
    withdrawMoney (personalId, amount){
        if(!this.allCustomers.find(x=>x.personalId===personalId)){
            throw new Error(`We have no customer with this ID!`)
        }

        let customer=this.allCustomers.find(x=>x.personalId===personalId);

        if(customer.totalMoney>=amount){
            customer.totalMoney-=amount;
            customer.transactionInfo.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);

            return `${customer.totalMoney}$`;
        }else{
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }
    }
    customerInfo (personalId){
        if(!this.allCustomers.find(x=>x.personalId===personalId)){
            throw new Error(`We have no customer with this ID!`)
        }

        let customer=this.allCustomers.find(x=>x.personalId===personalId);

        let info=`Bank name: ${this._bankName}\n`;
        info+=`Customer name: ${customer.firstName} ${customer.lastName}\n`;
        info+=`Customer ID: ${customer.personalId}\n`;
        info+=`Total Money: ${customer.totalMoney}$\n`;
        info+=`Transactions:\n`;
        //check if transaction should stay
        if(customer.transactionInfo.length===0){
            return info.trim();
        }else{
            for (let i = customer.transactionInfo.length-1; i >= 0 ; i--) {
                info+=`${i+1}. ${customer.transactionInfo[i]}\n`                
            }
        }

        return info.trim();
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));
//console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267)); 
 