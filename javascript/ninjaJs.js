// let email ='vasukigreat@gmail.com';
// let result = email.substring(0,11);
// let result=email.slice(1,5);
// console.log(result);

// console.log(email[0]);

/*Array
let names =['vasu','niv','thar'];
console.log(names);

/*control flow
for(i=0;i<4;i++){
    console.log(i+' hello')
}
*/
// let names =['vasu','niv','thar'];
// console.log(names.length);
// let i=0;
// while (i<names.length){
//     console.log(names[i]);
// i++;
// }

//function declaration
/*function radius(length,breath){
    return length*breath;
}

const value = radius(5,6);
console.log(value)*/

//function expression
// let area =function (radius) {
//     return 3.14*radius**2;
// }
//arrow function
let area=(radius)=> 3.14*radius**2;
const funCall=area(5);
console.log(funCall);

/*const simpleCal =(products,tax)=>{
   let total=0;
   for(i=0;i<products.length;i++)
   total+=products[i]+products[i]*tax;
   return total;
};

const calvalue = simpleCal([25,10,15],1);
console.log(calvalue);*/

//callback and foreach

// let zoo = animal=>{
// let name="lion";
// console.log(name);
// };
// zoo(function(name){
//     console.log(name);
// });

// let fun=names=>{
//     console.log('hello');
// };

// fun();

// const doc =document.querySelector('.people');
// const people=['vas','raj','steve','harry'];
// html=``;
//  people.forEach((person)=>{
//     console.log(`hello ${person}${index}`);
//     });
//     console.log(logperson);
// const logperson=people.forEach((person)=>{
// html+=`<li style="color:purple">hello${person}</li>`
// });
// doc.innerHTML=html;
// console.log(doc);

/**************************object******************************/

// let user={
//     name:'vas',
//     email:'vas@123',
//     location:'india'
// };

// console.log(user.name)

// class Car{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
// }

class User{
    constructor()
}