// var count1 = 9;
// var newNumber1 = document.querySelector(".number1");

// function increase1(){
    // count1++;
    // newNumber1.innerText = count1;
// }

// var count2 = 12;
// var newNumber2 = document.querySelector(".number2");

// function increase2(){
    // count2++;
    // newNumber2.innerText = count2;
// }

// var count3 = 9;
// var newNumber3 = document.querySelector(".number3");

// function increase3(){
    // count3++;
    // newNumber3.innerText = count3;
// }

//new method

var count = [9, 12, 9];
var spans = [
    document.querySelector(".number1"),
    document.querySelector(".number2"),
    document.querySelector(".number3")
];

function increase(id){
    count[id]++;
    spans[id].innerHTML = count[id];
}
