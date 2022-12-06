let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";


let btn6 = document.getElementById("subbutt");
console.log(123)
btn6.addEventListener("click", function(){
	console.log("gag")
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
		const data = name + " " + number + " " + adress
		console.log(data)
		});

		tg.MainButton.show();
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	window.alert("Hello world!");
	alert("Hello world!");
	tg.sendData(data);
});