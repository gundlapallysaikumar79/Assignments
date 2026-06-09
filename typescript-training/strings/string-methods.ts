let originalString : string = " username : Admin || password : 123450";
console.log(originalString);

//2.method to calculate the total number of char of the string
console.log(`total number of charatcters of the string is ${originalString.length}`);

//3.Method to get a specicfic character from a string by using an index
console.log(`character at index 0: ${originalString.charAt(0)}`);
console.log(`character at index 0: ${originalString.charAt(1)}`);
console.log(`character at index 0: ${originalString.charAt(2)}`);
console.log(`character at index 0: ${originalString.charAt(3)}`);
console.log(`character at index 0: ${originalString.charAt(4)}`);
console.log(`character at index 0: ${originalString.charAt(5)}`);
console.log(`character at index 0: ${originalString.charAt(6)}`);

//4.reverse a string by using the above two methods.
let reversedString : string = "";
for (let i = originalString.length-1; i>0; i--){
     reversedString += originalString.charAt(i);

}
console.log(`reverse string: ${reversedString}`);

//5. method to remove the unwanted spaces from the string 
let stringWithSpace : string = ("    Hello World   ")
console.log(`original string : "${stringWithSpace}"`);
console.log(`Trimmed string: "${stringWithSpace.trim()}"`);

//6.method to remove all the spaces from the string => replace(/old-char/g, "New char")
console.log(`original string : "${stringWithSpace}"`);
console.log(`Trimmed string: "${stringWithSpace.replace(/ /g,"")}"`);

//7.method to remove all the alphabets from the string => replace(/old-char/g, "new character")
console.log(`original string : "${stringWithSpace}"`);
console.log(`Trimmed string: "${stringWithSpace.replace(/[a-zA-Z] /g,"")}"`);

//8.method to remove all the numbers from the string 
console.log(`original string : "${stringWithSpace}"`);
console.log(`Trimmed string: "${stringWithSpace.replace(/[0-9] /g,"")}"`);

//9.method to remove the spl character from the string
console.log(`original string : "${stringWithSpace}"`);
console.log(`Trimmed string: "${stringWithSpace.replace(/[^a-zA-Z0-9] /g,"")}"`);

//10.method to convert the string into uppercase.touppercase();

 //11.method to convert the string into lowercase .tolowercase();
//12. method to extract a specific part of the string by using the index => subString (StartIndex,  endindex+1);
//13.method to extract the specific part of the string using Split
console.log(`original string: "${originalString}"`);
let stringParts : string [] = originalString.split(" ");
console.log(`username : "${stringParts[3]!.trim()}"`);
console.log(`username : "${stringParts[7]!.trim()}"`);

//14.methods to compare two different string;
//== (loose equality) checks the value of the string
//=== (tight equality ) it checks the value and the datatype of the string
//includes() (i.e it checks weather a string contains specific substring or not
//startswith() (i.e it checkts weather a string starts with a specific substring or not)
//endswith() (i.e its checks weather a string endswith specific substring or not)
// ***********All ABOVE METHODS GIVE THE BOOLEAN OUTPUT************** Either true or false


//15.method to convert  number and other type to string vice versa

console.log("*****method to convert number to string and vice versa****")
let std: number = 144;
let number : number = 86865770;
let stdcode: string = String(std);

console.log(stdcode+number);

//16. converthing string to other data type

let balance  : string = "ACcount balance is $9,00,900";
balance =  balance.replace(/[^0-9.]/g,"");
let bal : number = parseFloat(balance);
console.log(bal >=1000 );

