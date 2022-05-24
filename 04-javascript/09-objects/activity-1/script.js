// 1. Create a .js file
// 2. Link .js file to your html file
// 3. Create a variable and set it equal to an object that has your name, age, favorite color, and if you enjoying drinking coffee. 
// 4. In the console show the entire object
// 5. Add two(2) more key/value pairs of your choosing and display in the console.
//     ** Do not just type this into the original object created. **
// 6. Update your favorite color and display in the console. 
// 7. Delete one(1) key value pair and display the entire object in the console.

let myObj = {
    name: "Robert Anderson",
    age: 32,
    favoriteColor: "blue",
    likesCoffee: true
}

console.log(myObj);

delete myObj.name
console.log(myObj.age);
console.log(myObj.favoriteColor);
console.log(myObj.likesCoffee);

myObj.hasDogs = true;


console.log(Object.keys(myObj));