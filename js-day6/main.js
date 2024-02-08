// // answer1
// let i = 0; 
// for(i = 0; i<=10; i++){
//     console.log(i);

// }
// // while
// while ( i<=10 ) {

//     console.log(i);
//     i++
    
// }
// // do while

// do {
//     i++;
//     console.log(i)
// } while (i < 10)

// answer2
// let j = 10;

// for (let j = 10; j <= 10; j--) {
//     console.log(j);
// }


// //while-loop
// while (j > 0) {
//     i--;
//     console.log(i)
// }

// //do-while loop

// do {
//     i--;
//     console.log(i)
// } while (i > 0)

// }

let n = Number(prompt("enter number"));
 for (let i = 0; i <= n; i++) {
        console.log(i);}
// answer 4
let harsh = "";
for (let  i= 0; i <=7; i++) {
    harsh+=("#")
   console.log(harsh);;
    
}


let i =0
for (let i = 0; i <=10; i++) {
    console.log(`${i}*${i} = ${i * i}`);
    
}

for (let i = 0; i <=10; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`);



    // /print even numbers from 0-100;
for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//print odd numbers
for (i = 0; i <= 100; i++) {
    if (i % 2 > 0) {
        console.log(i)
    }
}


//print prime numbers
for (let i = 0; i <= 100; i++) {
    for (let k = 2; k < i; k++) {
        if (i % k === 0 && i > 1) {
            console.log(i)
        }
    }
}

//sum of all numbers
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
    console.log(sum);
}


//sum of all even and odd
let even = 0;
let odd = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        even += i;
    } else if (i % 2 > 0) {
        odd += i
    }
}
console.log(`the sum of all even number is ${even}. And the sum of all odd numbers is ${odd}`)



// /storing sum of all even/odd numbers in an array
let sumEvenOdd = [0, 0]
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumEvenOdd[0] += i;
    } else if (i % 2 > 0) {
        sumEvenOdd[1] += i;
    }
}
console.log(sumEvenOdd)

let randomArr = [];
for (let i = 0; i < 5; i++) {
    randomArr.push(Math.floor(Math.random() * 10));
}
console.log(randomArr)

    
}