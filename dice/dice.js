function roll() {
    const sides =6;
   var randomnumber= Math.floor(Math.random() *sides)+1
   let face = document.getElementById("face");
   face.innerHTML = randomnumber;
   image.innerHTML = images[randomnmber]
}
var button = document.getElementById("button");
button.addEventListener("click",roll);
const images = ["place","https://www.random.org/dice/dice1.png","https://www.random.org/dice/dice2.png","https://www.random.org/dice/dice3.png","https://www.random.org/dice/dice4.png","https://www.random.org/dice/dice5.png","https://www.random.org/dice/dice6.png"];