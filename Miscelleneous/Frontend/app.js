// ........Factory Function...................
// function Person(name,age){
//     const person={
//     name=name,
//     age=age,
//     talk(){
//         console.log(`Hi, I'm ${this.name}`)
//     }
//     }
//     return person
// }
// let p11=Person("adma",24);
// let p21=Person("adam",50);




//.....Constructors - doesn't return anything & start with capital...........New Operator..................
// function Person(name,age){
//         this.name=name,
//         this.age=age
//         }
// Person.prototype.talk=function(){
//     console.log(`Hi , I'm ${this.name}`);
// }
// let p1=new Person("adma",24);
// console.log(p1)
// let p2=new Person("adam",50);
// console.log(p2)




//...................Classes................
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi , my name is ${this.name}`);
    }
}
//.............Inheritence...........................
class Student extends Person{
    constructor(name,age,marks){
        super(name,age);  //parent class ke constrcutor ko call lga rhe hai
        this.marks=marks;
    }
    greet(){
        return "Hello"
    }
}
let s1=new Student("adman",23,56)
console.log(s1)
