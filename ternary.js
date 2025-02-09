/**
 * TERNARY
 * 
 * ?    :
 * 
 * condition ? do something when true  : do something when false
 */

const age = 10;
// normal if-else
// if (age >= 18){
//     console.log('You are vote----')
// }
// else{
//     console.log('gumai thako')
// }


// simple ternary
// age >=18 ? console.log('vote dio') : console.log('gumai tahko')


let price = 500;
const isLeader = true;

if (isLeader === true){
    price = 0;
}
else{
    price = price + 100;
}
// console.log(price)

price = isLeader === true ? 0 : price + 100;


// optional : semi-advance
if (isLeader === true){
    if(price>1000){
        price = price / 2;
    }
    else{
        price =0;
    }
}
else{
    price = price +1000;
}


// Feel free to ignore this one
price = isLeader === true ? price >1000 ? price /2:0 : price + 1000;