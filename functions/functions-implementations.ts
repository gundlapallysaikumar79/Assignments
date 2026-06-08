function  great(): void {
    console.log("function without parameter and without return typer")
}
//calling a function
great();

//2.fuction with paramter and without return type
 function greatPerson(name : string): void {
     console.log(`Hello, ${name}`);

 }
 // calling a function
 greatPerson("Mahadevu");

 //3.fuction with parameter and without returntype
function add (a : number, b: number ): number{
    return a + b;
 }

 //calling a function
 console.log(add(5,6));

 //4. function without parameter and with return type
 function getCurrentDate(): Date{
    return new Date();
 }
//calling a function
console.log(getCurrentDate());

//5.function with optional parametr
//creating a function which is going to take some input progarm and some of the parameters are optional
function personDetails(name : string, age? : number): void {
    console.log(age);
    console.log(name);

}
personDetails("Sai");

//6.function with default parameter
//creating a function which is going to take some of input parameters and some of the parameters have default values
 
function personInfo(name : string , age : number, visaStatus : boolean = false): void{

    console.log(name);
    console.log(age);
    console.log(visaStatus);
}
 //Calling a function
 personInfo("Sharath", 35);
 personInfo("saikumar", 35 , true);

 //7.function with REST parameter
 //Creating a function that will take unlimited parametrs and produce the output 
function sumeOfNumbers(...numbers: number[]): number{
    let sum : number = 0;
    for(let num of numbers){
        sum+=num;

    }
    return sum;
}

//calling a funtcion
console.log(sumeOfNumbers(1,2,2));
console.log(sumeOfNumbers(1,2,3,5,6));