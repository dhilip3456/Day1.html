let currenttime=new Date();
console.log(currenttime);
let local=currenttime.toString();
console.log(local);
let hours=currenttime.getHours();
console.log(hours);
let minits=currenttime.getMinutes();
console.log(minits);
let day=currenttime.getDay();
console.log(day);



class exam{
    constructor(personname){
        this.personname=personname;
        console.log(personname);
    } 
}
let result=new exam("john");
class bank{
    constructor(initialamount=0){

    }
    get balance(){
        return this.balance;
    }
set balance(amountdeposit){
if(amountdeposit>0){
this.balance+=amountdeposit;
console.log(balance);
}
    }
    }
  
let add=new bank(10);
console.log(add);
add.balance=300;
console.log(add.balance)



