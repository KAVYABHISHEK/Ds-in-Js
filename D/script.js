'use strict';
/*function addition (a, b){
    return a+b;
}
let result = addition(15, 68);
console.log(result);

function calcAge (age){
    if(age >= 18){
        return true;
    }else{
        return confirm('Do you have your parents permission!');
    }
}
let age = prompt('how old are you?',18);
if (calcAge(age)){
    alert('Allow');
}else{
    alert('denied');
}

function add (a, b) {
    return a + b;
}
const result = add(5, 9);
console.log(result);


function calcAge(bornyear){
    const age = 2023 - bornyear
    return age;
}
let presentAge = calcAge(2001);
console.log(`present age is ${presentAge} years old.`);
}
*/
const restaurant = {
    name: 'Classic Indian',
    location: 'Near Ramapuram Beach, Chirala, Andhra Pradesh',
    categories:['Indian','Chiniese','Asian','Mocktails','Drinks'],
    starterMenu:['Soup','Cheese Nuggets','Dragon Chicken','Sp Corn','Garlic bread'],
    mainMenu:['Biriyani','Chicken Biriyani','Naans-Curry'],

    openingHours:{
        thu: {
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:23,
        },
        sat: {
            open:8,
            close:24,
        },
        
    },
    orderBiriyani:function(ing1, ing2, ing3){
        console.log(`Here is the Biriyani with ${ing1},
        ${ing2},${ing3}!`);
    },

/*
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, c);
const [first, second] = restaurant.starterMenu;
const [one,,two] = restaurant.mainMenu;
console.log(first,second);
console.log(one,two);
let [main,secondary] = restaurant.categories;
console.log(main,secondary);
[main, secondary] = [secondary,main];
console.log(main,secondary);
*/
order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
},
orderDelivary: function({starterIndex,mainIndex,time,address}){
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },
};
  restaurant.orderDelivary({
    time:'22:30',
    address:'Hotelx',
    mainIndex:1,
    starterIndex:2,
})

const {name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories );

const {
    name:restaurantName,
    openingHours:hours,
    categories:tags,
} = restaurant;
console.log(restaurantName,hours,tags);
//The spread operator 

const newMenu = [...restaurant.mainMenu,'Veg-biriyani'];
console.log(newMenu);

const mixedMenu = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(mixedMenu);
/*
const ingrediants = [
    prompt('Lets make Biriyani! ingrediant 1?' ),
    prompt('ingrediant 2?'),
    prompt('ingrediant 3?'),
];
console.log(ingrediants);
restaurant.orderBiriyani(...ingrediants);
*/
const newrestaurent = {foundedIn:2001, ...restaurant};
console.log(newrestaurent);

const add = function(...numbers){
   let sum = 0;
    for(let i=0;i<numbers.length;i++)sum += numbers[i];
    console.log(sum);
}
add(15,36);
add(1,2,3,4,5,6);
add(8,9,4,5);