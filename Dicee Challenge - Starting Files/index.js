// generate random number function

function randomNumber1() {
    let num = Math.random() * 6;
    num = Math.floor(num) + 1;
    return num;
}


let dice1 = document.querySelector(".img1").setAttribute("src", "images/" + "dice" + randomNumber1() + ".png")
let dice2 = document.querySelector(".img2").setAttribute("src", "images/" + "dice" + randomNumber1() + ".png")

let diceNum1 = document.querySelector(".img1").getAttribute("src");
let diceNum2 = document.querySelector(".img2").getAttribute("src");
let title = document.querySelector("h1");

if (diceNum1 > diceNum2) {
    title.innerHTML = "Player1 wins!";
} else if (diceNum1 < diceNum2) {
    title.innerHTML = "Player2 wins!";
} else {
    title.innerHTML = "Draw!";

}

// old long boring method, but good to understand what is happening


// switch (randomNumber1()){
//     case 1:
//         document.querySelector(".img1").setAttribute("src","images/dice1.png");
//         break;
//     case 2:
//         document.querySelector(".img1").setAttribute("src","images/dice2.png");
//         break;
//     case 3:
//         document.querySelector(".img1").setAttribute("src","images/dice3.png");
//         break;
//     case 4:
//         document.querySelector(".img1").setAttribute("src","images/dice4.png");
//         break;
//     case 5:
//         document.querySelector(".img1").setAttribute("src","images/dice5.png");
//         break;
//     case 5:
//         document.querySelector(".img1").setAttribute("src","images/dice5.png");
//         break
// }

// switch (randomNumber1()){
//     case 1:
//         document.querySelector(".img2").setAttribute("src","images/dice1.png");
//         break;
//     case 2:
//         document.querySelector(".img2").setAttribute("src","images/dice2.png");
//         break;
//     case 3:
//         document.querySelector(".img2").setAttribute("src","images/dice3.png");
//         break;
//     case 4:
//         document.querySelector(".img2").setAttribute("src","images/dice4.png");
//         break;
//     case 5:
//         document.querySelector(".img2").setAttribute("src","images/dice5.png");
//         break;
//     case 5:
//         document.querySelector(".img2").setAttribute("src","images/dice5.png");
//         break
// }

// if (document.querySelector(".img1").getAttribute("src")>document.querySelector(".img2").getAttribute("src")){
//     document.querySelector("h1").innerHTML = "Player1 wins!";
// }else if(document.querySelector(".img1").getAttribute("src")<document.querySelector(".img2").getAttribute("src")){
//     document.querySelector("h1").innerHTML = "Player2 wins!";
// }else{
//     document.querySelector("h1").innerHTML = "Draw!";

// }