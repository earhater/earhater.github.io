let tg = window.Telegram.WebApp;
tg.expand();
let subnne = document.getElementById("subnn");

subnne.addEventListener("click", function(){
  const item = document.getElementsByTagName("input")[0].value
  console.log("hello")
  tg.sendData(item);
});