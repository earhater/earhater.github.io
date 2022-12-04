let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){
  const el = document.getElementById('el');
  el.scrollIntoView();
});

btn2.addEventListener("click", function(){
  const el1 = document.getElementById('el2');
  el1.scrollIntoView();
});
