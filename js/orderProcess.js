let tg = window.Telegram.WebApp;
tg.expand();

let subnne = document.getElementById("subnn");

subnne.addEventListener("click", function(){
  //const item = document.getElementsByTagName("input")[0].value
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  }
  else {
    tg.MainButton.setText("Вы выбрали товар 6!");
    item = "6";
    tg.MainButton.show();
  }});