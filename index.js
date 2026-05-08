const number = document.getElementsByClassName("numberButtonDesign");
const sign = document.getElementsByClassName("signButtonDesign");

for (let button of number){
button.onclick = function(){
   document.getElementById("answerDisplay").textContent += button.textContent;
};
}

for (let button of sign){
button.onclick = function(){
  document.getElementById("answerDisplay").textContent += button.textContent;
}; 
}

document.getElementById("clear").onclick = function(){
document.getElementById("answerDisplay").textContent = "";
  }

  document.getElementById("backspace").onclick = function(){
      let display = document.getElementById("answerDisplay");

  display.textContent = display.textContent.slice(0, -1);

  }

  document.getElementById("result").onclick = function(){
    let display = document.getElementById("answerDisplay");

  display.textContent = eval(display.textContent);
  }

    //keyboard support
  document.addEventListener("keydown", function(event){

  const display = document.getElementById("answerDisplay");

  // numbers
  if (event.key >= "0" && event.key <= "9") {
    display.textContent += event.key;
  }

  // operators
  if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
    display.textContent += event.key;
  }

  // backspace
  if (event.key === "Backspace") {
    display.textContent = display.textContent.slice(0, -1);
  }

  // clear
  if (event.key === "Escape") {
    display.textContent = "";
  }

  // result
  if (event.key === "Enter") {
    display.textContent = eval(display.textContent);
  }

});