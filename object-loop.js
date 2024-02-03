//Object Declaration
console.log("\nFind the property of mobile with its value:");
const mobile={
    brand: 'apple',
    color: 'white',
    price: 2500,
    camera: '30mp',
    isNew: true
}

const keys=Object.keys(mobile); //keys are using for taking the property in an array
for(const key of keys) //for of function
{
    // console.log(key);
    console.log(key,':', mobile[key]);
}

// Anoter process by for in function

console.log("\nFind the property of Computer with the value:")
const computer={
    brand: 'ASUS',
    color: 'white',
    price: 50000,
    hdd: '1tb',
    isNew: true
}

for(const prop in computer)
{
    console.log(prop, ':',computer[prop]);//console the property of computer
}

//quiz

// let str = "Mississippi";
// console.log(str.indexOf('i',3));


// const x = ""
// if(!x.length){
// console.log("Hey")
// }else{
// console.log("Hi")
// }