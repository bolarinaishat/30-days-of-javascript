let userAge = +prompt("Enter your age")
if (userAge>18){
    console.log("you are old enough to drive");

} else {
let Ageleft = ( 18-userAge)
console.log( ` you are left with ${Ageleft} years to drive` );
 
}

// answer2

let  myage = 30
let yourAge = +prompt("Enter your age")
if (yourAge>=30){
    console.log(`your are not older than `);
}else{
    let bothage=(myage - yourAge)
console.log( ` you are  ${bothage} year older than me` );

}

// answer3
let a = 4
let b = 3
if (a>b){
    console.log(`${a}  is greater than ${b}`);
}else{
    console.log(`${a}  is less than ${b}`);

}
// ternary operator
let aa = 4
let bb = 3
console.log((aa>bb)?`${aa}  is greater than ${bb}` :`${bb}  is less than ${bb}` );

// answer4
const number=prompt("what number do you wish to know if its  even or odd")
 if (+number%2===0) {
console.log(`${number} is even number`);
 }
 else {
    console.log(`${number} is old number`);
 }


//  level2
// answer1
let score= +prompt("enter your score")
switch(true) {
      case score > 80:
        console.log("A");
        break;
        case  score >70 :
        console.log("B");
        break;
        case  score <60 :
        console.log("D");
        break;
        case score < 50 :
        console.log("D");
        break;
        case score >50:
        console.log("F");
        break;
         default:
    console.log('Entered value was not a number');
}
// answer2"
let month = prompt("enter month to check seasons")
let input = month.toLowerCase()
// let  season=  " Autumn, Winter, Spring , Summer"
switch (month) {
    case "september":
    case "october":
    case "November":
     console.log("the season is Autumn");
        break;
        case "december":
            case "january":
            case "febuary":
          console.log(" the season is Winter");
        break;
        case "march":
            case "april":
            case "may":
        console.log("the season isSpring");
        break;
        case "june":
            case "july":
            case "august":
            console.log("the season is Summer");
            break;
    default:
        console.log('Entered value was not a month');
}
// anser3
let day= prompt('What day is today ?')

switch (day) {
  case 'saturday':
    console.log('Saturday is a weekend')

    break;
  case 'Saturday':
    console.log('Saturday is a weekend')
    

    break;
  case 'friday':
    console.log('friday is a working day')
    break;
  case 'Friday':
    console.log("Friday is a working day")
    break;
  default:
    console.log('It is not a week day.')
}

let Month = prompt("enter month to check number of days");
switch (Month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${Month} has 31 days`)
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${Month} has 30 days`)
        break;
    case "febuary":
        console.log(`${Month} has 29 days`)
        break;
    default:
        console.log("invalid month entered");
}