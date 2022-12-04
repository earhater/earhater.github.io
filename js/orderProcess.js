
let subnn = document.getElementById("subnn");

subnn.addEventListener("click", function(){
  const item = document.getElementsByTagName("input")[0].value
  tg.sendData(item);
});