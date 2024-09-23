const words = ["", "one", "two", "three", "four", "five", "six"];
const output = document.getElementById("output");

function RandomWord() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  output.innerHTML = words[randomNumber];
}