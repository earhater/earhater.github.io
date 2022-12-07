import { productInfo } from "./cart-02.js";
let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";
let data = "";

let btn6 = document.getElementById("subbutt");
console.log(123)
btn6.addEventListener("click", function(){
	
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {

		tg.MainButton.setText("Нажмите для подтверждения");
		const formElement = document.getElementById('form1'); // извлекаем элемент формы
		formElement.addEventListener('submit', (e) => {
  		e.preventDefault();
		const formData = new FormData(formElement); // создаём объект FormData, передаём в него элемент формы
		// теперь можно извлечь данные
		const name = formData.get('name'); // 'John'
		const number = formData.get('number'); // 'Smith'
		const adress = formData.get('adress');
		data = name + " " + number + " " + adress + productInfo
		console.log(data)
		});
		tg.sendData(data);
		//tg.MainButton.show();
	}
});


