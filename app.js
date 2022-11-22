let val_1st_num = "0";
let val_2nd_num = "0";
let len_1st_opr = 0;
const input = document.querySelector(".calc_keypad");

input.addEventListener("click", (e) => {
  //clear display
  if (e.target.id == "clear")
    document.getElementById("display").textContent = "";
  //delete last character
  else if (e.target.id == "del")
    document.getElementById("display").textContent = document
      .getElementById("display")
      .textContent.slice(0, -1);
  else if (
    e.target.id == "/" ||
    e.target.id == "x" ||
    e.target.id == "-" ||
    e.target.id == "+"
  ) {
    val_1st_num = document.getElementById("display").textContent;
    document.getElementById("display").textContent += e.target.id;
    len_1st_opr = document.getElementById("display").textContent.length;
  } else if (e.target.id == "equals") {
    val_2nd_num = document
      .getElementById("display")
      .textContent.slice(len_1st_opr);
    val_1st_num = parseInt(val_1st_num);
    val_2nd_num = parseInt(val_2nd_num);
    let result = 0;
    if (document.getElementById("display").textContent.includes("+")) {
      if (document.getElementById("display").textContent.includes("+-"))
        result = add(val_1st_num, -val_2nd_num);
      else result = add(val_1st_num, val_2nd_num);
    } 
    else if (document.getElementById("display").textContent.includes("x")) {
        if (document.getElementById("display").textContent.includes("x-"))
        result = multiply(val_1st_num, -val_2nd_num);
        else
        result = multiply(val_1st_num, val_2nd_num);
    }
    else if (document.getElementById("display").textContent.includes("/")) {
        if (document.getElementById("display").textContent.includes("/-"))
        result = divide(val_1st_num, -val_2nd_num);
        else
        result = divide(val_1st_num, val_2nd_num);
    }
    else 
    {
        if (document.getElementById("display").textContent.includes("--"))
        result = subtract(val_1st_num, -val_2nd_num);
        else
        result = subtract(val_1st_num, val_2nd_num);
    }
    document.getElementById("display").textContent = result.toFixed(3);
  } else {
    document.getElementById("display").textContent += e.target.id;
  }
});
//add keypress event listener
let randomwords = ["Use your mouse la", "Work in progress", "Back in my day math had no letters", "Asian still use calculator?", "Try again tmr"];
document.addEventListener("keypress", (e) => {
    document.getElementById("display").textContent += e.key;
    if(e.key == "Enter" || e.key == "=")
    {
       susnum = Math.floor(Math.random() * 5)
         document.getElementById("display").textContent = randomwords[susnum];
    } 
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  // a = numerator b = denominator
  if (b == 0) return "Error";
  return a / b;
}

//4fun
document.getElementById("header").addEventListener("mouseover",() => {
    document.getElementById("header").textContent = "Angry Calculator";
    document.getElementById("header").style.color = "red";
    document.getElementById("calc_container").style.transitionDuration = "5s";
    document.getElementById("calc_container").style.backgroundColor = "#Be2531";
}); 