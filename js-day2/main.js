// exercise1
// answer1
let challenge = '30 Days Of JavaScript'
// answer2
console.log(challenge);
// answer3
console.log(challenge.length);
// answer4
console.log(challenge.toLowerCase ());
// answer5
console.log(challenge.toUpperCase ());
// answer6
console.log(challenge. substr(0, 2));
// answer7
console.log(challenge. substr(2, 21));
// answer8
console.log(challenge. includes('Script'));
// answer9
console.log(challenge. split());
// answer10
console.log(challenge. split(""));
// answer11
let  site='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(site. split());
// answer12
console.log(challenge. replace('30 Days Of JavaScript' , '30 Days Of Python'));
// answer13
let jscript=" 30 Days Of JavaScript "
console.log(jscript.charAt(15));
// answer14
console.log(jscript.charCodeAt(9));
// answer15
console.log(jscript.indexOf('a'));
// answer16
console.log(jscript.lastIndexOf('a'));
// answer17
let word= 'You cannot end a sentence with because because because is a conjunction'
console.log(word.indexOf('because'));
// answer18
console.log(word.lastIndexOf('because'));
// answer19
console.log(word.search('because'));
// answer20
console.log(jscript.trim(''));
// answer 21
console.log(jscript.startsWith(''));
// answer 22
console.log(jscript.endsWith(''));
// ansswer  23
console.log(jscript.match('a'));
// answer 24
let days ='30 Days of'
console.log(days.concat('javascript'));
// answer 25
console.log(jscript.repeat('2'));


// exercise level 2

// answer1
console.log('There is no exercise better for the heart than reaching down and lifting people up.'  )
// answer2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
// anwer3
let typeOf = "10 ";
let nu = 10;
console.log(typeOf===nu)       
console.log(+typeOf===nu)

// answer4

let number = 9.8
let check=10;
console.log(number===check)     
console.log(Math.ceil(number)===check); 

// answer5
let on= "jagons, Python"
console.log(on.includes("on"));
// answer6
console.log("I hope this course is not full of jargon".includes ("jargon"));
// answer7
let random =Math.random ()
let nun = (random) *101
console.log(nun);
let randomNumber = Math.floor (nun)
console.log(Math.floor (randomNumber ));
// answer8
let randomNum = Math.floor(Math.random() * (100 - 50 + 1)) 
console.log(randomNum);
// answer 10

let String = "Javascript";
let randomIndex = Math.floor(Math.random() * String.length)
console.log(randomIndex)
randomCharacter = String.charAt(randomIndex);
console.log(randomCharacter);
// answer11
console.log('1\t1\t1\t1\t1\t\n2\t1\t2\t4\t8\t\n3\t1\t3\t9\t27\t\n4\t1\t4\t16\t64\t\n5\t1\t5\t25\t125\t');
// answer12
console.log(word.substr(31,24));


// exercises:level3
// answer1
let love ='Love is the best thing in this world. Some found their love and some are still looking for their love.'
let search =/love/gi;
console.log(love.match(search));

// answer2
let count = /because/gi;
console.log(word.match(count));

// answer3
const sentences= '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
    let inequalities = /[%$@#;&?!]/g;
console.log(sentences.replace(inequalities, ""));
// answer4
let calculation = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let extractNum = /\d+/gi;
console.log(calculation.match(extractNum));
let firstMonth = calculation.match(extractNum);
console.log(firstMonth);
let bd = +firstMonth[0] * 12;
let bc = +firstMonth[2] * 12;
let output = bd + bc + 10000;
console.log(bd);
console.log(bc);
console.log(output);




