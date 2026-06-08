let fruits : string[] = ["apple " ,"mango","bannana", "grapes",];
let price : number[] = [100.200,400,500];
let fruitsAndPrices: (string | number)[] =["apple", 100, "mango", 200, "bannana", 400, "grapes", 500];

console.log(fruits);
console.log(price);
console.log(fruitsAndPrices);
console.log(fruits[1]);
console.log(fruitsAndPrices[3]);

//2.adding additional value to the existing end we have default method called push

fruits.push("avacado");
console.log(fruits);

//3.remove the existing value of th earray from the end we have a defaul method called pop
fruits.pop();
console.log(fruits);

//4. adding existing value at the begining we use unshift
fruits.unshift("apple");
console.log(fruits);

//5.removing the existing value at the begining of the array
fruits.shift();
console.log(fruits);

//6.adding Additional value to the existing array at specific index by deleting the existing array
fruits.splice(2,0,"pineapple");
console.log(fruits);

//7.creating the new array by extracting the values from the existing array.
let veggies : string[] = ["onion", "carrot", "brinjal", "potato", "cucumber"]
let avaliableveggies: string[] = veggies.slice(1,4);
console.log(avaliableveggies);

//8.creating a new array by concatenating two or more arrays togther;
let fruitsAndVeggies : string [] = fruits.concat(veggies);
console.log(fruitsAndVeggies);

//9.find the index of the specif value within the array
console.log(fruits.indexOf("bannana"));
console.log(fruits.indexOf("mango"));

//10.ittertate all the vales fromm the array
for(let fruit of fruits){
    console.log(fruits);
}

//11.revese a array fruits.reverse();
//12.fruits.sort();
