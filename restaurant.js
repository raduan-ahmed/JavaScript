const age = 90;
const price = 500;
if (age < 12){
    console.log('You can eat for free');
}
else if (age >= 60){
    // 50% discount
    const discount = price * 50/100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if (age >= 50){
    // 25% discount
    
}
else{
    console.log(price)
}