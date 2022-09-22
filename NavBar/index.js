console.log('Hello World')
//primitive data types
let name ='john';
let age =25;
let isapprovied = true;
let firstName = undefined; //camel notation
let value = null;
//reference data types
//objet
let person ={
 lastName :'Tennnison'
};
//dot annotation
person.lastName ='Dick';

//bracket annotation

person['lastName'] ='Petterson';
console.log(person.lastName);

//array
let number=[1,2,3];
number[3]=4;
console.log(number);

//functions

function personName(lastName){
    firstName ='John';
    console.log(firstName+lastName);
}
personName('Smith');

