var otherName = "Jane Doe";
var newName = document.querySelector("h1");

function nameChange(){
    otherName = "Any Other Name";
    newName.innerHTML = otherName;
}

var count = 2;
var countElement = document.querySelector(".con_rec_icon");
var add = 450;
var addmore = document.querySelector(".your_con_icon");

function remove1(){
    var yesOrNo1 = document.querySelector(".con_rec_right_1");
    var people1 = document.querySelector(".con_rec_left_1");
    yesOrNo1.remove();
    people1.remove();
    count --;
    countElement.innerHTML = count;
    add ++;
    addmore.innerHTML = add;
}

function remove2(){
    var yesOrNo2 = document.querySelector(".con_rec_right_1");
    var people2 = document.querySelector(".con_rec_left_1");
    yesOrNo2.remove();
    people2.remove();
    count --;
    countElement.innerHTML = count;
}

function remove3(){
    var yesOrNo2 = document.querySelector(".con_rec_right_2");
    var people2 = document.querySelector(".con_rec_left_2");
    yesOrNo2.remove();
    people2.remove();
    count --;
    countElement.innerHTML = count;
    add ++;
    addmore.innerHTML = add;
}

function remove4(){
    var yesOrNo2 = document.querySelector(".con_rec_right_2");
    var people2 = document.querySelector(".con_rec_left_2");
    yesOrNo2.remove();
    people2.remove();
    count --;
    countElement.innerHTML = count;
}
