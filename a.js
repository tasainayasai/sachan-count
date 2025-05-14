document.addEventListener("DOMContentLoaded", () => {
　const btn = document.querySelector(".btn");
　let count = 0;
　let counter=0;
　const newitem = document.querySelector(".number");
　const countt = document.querySelector(".counter");
　const sachi = ["さ","さあ","さあち","さあちゃ","さあちゃん"];

　btn.addEventListener("click", () => {
    　const sound = new Audio("Anime_Motion02-1(Single).mp3");
    　sound.play();
    　count += 1;
    　if (count <= 5){
        　newitem.textContent=sachi[count -1];
    　}else if (count === 6){
        　count = 0;
        　newitem.textContent=""
    　}

    　if (count === 5){
        　counter++;
    　}
    　countt.textContent=counter;
　});
});
