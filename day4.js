//array
let number =[1,2,"three",true];
let names=new Array("john","james");
console.log(number[2]);
console.log(names.length);
filter ()-it filtered the result arguments
let number=[1,2,3,4,5];
let result=number.filter(number=>number[0]);
console.log(result);
slice -delete the element based on index value
splice-changes the orginal array by
adding /removing items at a specfic index
let number=[1,2,3,4,5];
number.splice(1,3,"hai");
console.log(number)
object 
let details={
    name:"js",
    totalmark:"90",
    nested obj
subject:{
        dbms:"98",
        java:"99"
    },
    avg:function(){
        let sum=this.subject.dbms+this.subject.java;
        return  sum;
}
   }

console.log(details.totalmark);
console.log(details["name"]);
console.log(details.subject.dbms); 
console.log(details.subject["java"]);
console.log(details.avg);{}
const person={
    name:"thala 1",
    age:"45",
    city:"goa"
};
const{name,age,city}=person;
    console.log(name);
    console.log(age);
    console.log(city);

    const person=["john",45,"softwaredeveloper"];
    const[name,age,designation]=person;
    console.log(name+"+age+" "+designation+")



