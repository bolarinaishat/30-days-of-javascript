const Arr= Array ()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const length=  numbers.length
console.log(length);
const firstno=numbers[0]
console.log(firstno); 
const secondno=numbers[5]
console.log(secondno); 
const lastindex=numbers.length - 1
let lastnumber=numbers [lastindex]
console.log(lastindex); 
// answer5
const mixedDataTypes = [true, "aishat", 8, '' , "am larning javasript", 99]
const mixedData=  mixedDataTypes.length
console.log(mixedData);
let itCompanies =[ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"]
console.log(itCompanies)
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[3]);
let lastIndex = itCompanies.length - 1
let lastcompaines = itCompanies[lastIndex]
console.log(lastcompaines);
// console.log(itCompanies.length-1[]);
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
// answer11
let a= "facebook"
console.log(a.toUpperCase());
let b="google"
console.log(b.toUpperCase());
let c ="microsoft"
console.log(c.toUpperCase());
let d = "apple"
console.log(d.toUpperCase());
let e= "ibm"
console.log(e.toUpperCase());
let f = "oracle"
console.log(f.toUpperCase());
let g = "Amazon"
console.log(g.toUpperCase());

// answer13
if (itCompanies.includes("book")){
  console.log(`${itCompanies}`);
} else{
     console.log("not found");
}
// answer14
// answer 15, 16, 17, 18, 19
console.log(itCompanies.sort());
console.log(itCompanies . reverse());
console.log(itCompanies . slice(0, 3));
console.log(itCompanies . slice(4, 7));
console.log(itCompanies . slice(1, 4));
// answer20
itCompanies.shift();
console.log(itCompanies);
// answer21
itCompanies.slice(2, 1);
console.log(itCompanies);
// answer 22
itCompanies.pop()
console.log(itCompanies);
// answer23
console.log(itCompanies.slice(5.5));

// level2
// // answer1
import webtech from "./webtech.js"
console.log(webtech); 
import{countries} from "./countries.js";
console.log(countries); 
// answer2
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let punc=/[,.]/g
let textreplace=(text.replace(punc,""));
console.log(textreplace .toString());
console.log(textreplace.length)
// answer3
// add
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("meat")
console.log(shoppingCart);
shoppingCart.push("suger")
console.log(shoppingCart);
shoppingCart.pop[2]
console.log(shoppingCart);
shoppingCart [3]="green tea"
console.log(shoppingCart);
// answer4  

if (countries.includes("Ethiopia")) {
    console.log("Ethiopia")
} else {
    countries.push("ETHIOPIA");
    console.log(countries);
}
// answer5
if (webtech.includes("Sass")){
    console.log('Sass is a CSS preprocess');
}else{
    webtech.push("Sass")
    console.log(webtech);
}
// answer6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// Exercise: Level 3
// answer1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sortAge = ages.sort()
console.log(sortAge);
let minAge = ages.sort()[0];
console.log(minAge);
let maxAge =  ages.sort()[9];
console.log(maxAge);
let medianAge = ages[Math.floor(ages.length / 2)];
console.log(medianAge);

// console.log((countries.length)/2);
// console.log();

countries.slice();
console.log(countries);
console.log(countries[5]);

countries.push("Nigeria");
console.log(countries);

let evenArray = countries.slice(0,6);
console.log(evenArray);
let evenArray2 = countries.slice(6,12);
console.log(evenArray2);






















