// lib.js
console.log("lib.js Loaded");

exports.sum = (a, b) => {
    return a + b; // Corrected to perform addition
};
 function diff(a,b){
    return a-b
 }

 function add(a,b,c){
    return a+b
 }
 
 function sub(a,b,c){
    return a-(b+c)
 }

 exports.diff = diff

//  export {add,sub}


// We also can import and export the modules via object formate
            // for this we have to make the package.json file 
            // for ES modules
            