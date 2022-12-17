let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn7 = document.getElementById("btn6");
let btn8 = document.getElementById("btn7")
btn1.addEventListener("click", function(){
  const el = document.getElementById('el');
  el.scrollIntoView();
});

btn2.addEventListener("click", function(){
  const el1 = document.getElementById('el2');
  el1.scrollIntoView();
});

btn3.addEventListener("click", function(){
  const el2 = document.getElementById('el3');
  el2.scrollIntoView();
});

btn4.addEventListener("click", function(){
  const el3 = document.getElementById('el4');
  el3.scrollIntoView();
});

btn5.addEventListener("click", function(){
  const el4 = document.getElementById('el5');
  el4.scrollIntoView();
});

btn7.addEventListener("click", function(){
  const el5 = document.getElementById('el6');
  el5.scrollIntoView();
});
btn8.addEventListener("click", function(){
  const el5 = document.getElementById('order-form');
  console.log("order")
  el6.scrollIntoView();
});

