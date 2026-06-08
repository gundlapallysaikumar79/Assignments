//functions are of three types 
//1.named functions
//2.arrow functions or lamda functions
//3.anonomus function

//1. named function
function add(a:number, b:number):number {
    return a+b;
}

console.log(add(2,6));

//arrow function 
/**syntex
 * (parameters)=>{
 *    //function body
 * }
 */

let sum =(a:number, b:number ) =>
 (a+b);

console.log(sum(8,9));



//3.anonomus function => creating a function and adding parameter as another function

function calculator  (square :(x:number) => number):void{
    console.log(square(5));
}

//calling a function
calculator(
  function(a:number): number{
    return a*a;
  }
)


//example 2
function newCalculator (greating: (a: string)=> string): void {
    console.log(greating("saikumar"));
}

//calling a function 
newCalculator(
function(name:string ): string {
    return "good morning " +name;
     
}
);