interface personinfo{
    name : string;
    age: number,
    empid: number;
    visa?: boolean;
    salary: number;
    address:{
      city: string;
      zipcode: number;
      state : string;
      country? : string
    }
     
}
    let person: personinfo = {

        "name": "Saikumar",
        "age": 34,
        "empid": 12345,
    "visa": true,
    "salary": 80000,
    "address": {
        "city": "Hyderabad",
        "state": "Telanagan",
        "zipcode": 506002,
        
    }

    }

    console.log(person.name);
    console.log(person["name"]);

 //2.Adding new properties to the existing object.
  person.salary = 20000;
  person.address.country = "india"
  console.log(person);

  //3.upade an exisitng property in the existing object'
  person.age = 60;
  console.log(person);

  //4.delete the existing propertie in the object
  delete person.visa;
  console.log(person);

  //5.check if a property exists in the object

  console.log("visa" in person);
  console.log("salary" in person);

  //6.get all the keys from the object.

  console.log(Object.keys(person));

  //7.get all the values from the object.
  console.log(Object.values(person));

  //8.get all the entries from the object.

  console.log(Object.entries(person));

  //9.iterate all the keys of the property within the object
  console.log("iterate all the keys of the property within the object")
  for (let key in person){
    console.log(`${key}: ${person[key as keyof personinfo]}`);

  }

  //10.verify the data type of the properties within the object
  console.log(typeof person.name);
  console.log(typeof person.age);
  console.log(typeof person.address);
  console.log(typeof person.empid);

  //11.merge the two different objects together and make it as a single object
  interface companyinfo {
  
companyName : string;
location: string;
}

let comapny: companyinfo ={
    companyName : "Infosys",
    location: "Hyderabad",

}

let mergeObjects = {...person, ...comapny};
console.log(mergeObjects);