let nihil = document.querySelectorAll(".card");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
prev.addEventListener("click", function(){
    let odit = document.querySelector(".card3");
    nihil = Array.from(nihil);
    let molestias = nihil.indexOf(odit);
    molestias = molestias --;
    let num = {
        one: molestias - 2,
        two: molestias - 1,
        thee: molestias,
        four: molestias + 1,
        five: molestias + 2
    }
    console.log(molestias);
    if(num.one < 0){
        num.one = nihil.length - 1
    }
    if(num.two < 0){
        num.two = nihil.length - 1
    }
    if(num.tree < 0){
        num.tree = nihil.length - 1
    }
    if(num.four < 0){
        num.four = nihil.length - 1
    }
    if(num.five < 0){
        num.five = nihil.length - 1
    }
    nihil[num.one].classList.replace("card1", "card2");
    nihil[num.two].classList.replace("card2", "card3");
    nihil[num.thee].classList.replace("card3", "card4");
    nihil[num.four].classList.replace("card4", "card5");
    nihil[num.five].classList.replace("card5", "card1");
});