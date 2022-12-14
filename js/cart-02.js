// Div внутри корзины, в который мы добавляем товары
const cartWrapper =  document.querySelector('.cart-wrapper');
let productlist = "";
// Отслеживаем клик на странице
window.addEventListener('click', function (event) {
	// Проверяем что клик был совершен по кнопке "Добавить в корзину"
	if (event.target.hasAttribute('data-cart')) {

		// Находим карточку с товаром, внутри котрой был совершен клик
		const card = event.target.closest('.card');

		// Собираем данные с этого товара и записываем их в единый объект productInfo
		productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			itemsInBox: card.querySelector('[data-items-in-box]').innerText,
			weight: card.querySelector('.price__weight').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};

		// Проверять если ли уже такой товар в корзине
		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		// Если товар есть в корзине
		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
			productlist = productlist + productInfo.title
		} else {
			// Если товара нет в корзине
			productlist = productlist + productInfo.title
			// Собранные данные подставим в шаблон для товара в корзине
			const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>`;

			// Отобразим товар в корзине
			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
		}

		// Сбрасываем счетчик добавленного товара на "1"
		card.querySelector('[data-counter]').innerText = '1';

		// Отображение статуса корзины Пустая / Полная
		toggleCartStatus();

		// Пересчет общей стоимости товаров в корзине
		calcCartPriceAndDelivery();

	}
});

let tg = window.Telegram.WebApp;

tg.expand();
let data = "";

let btn6 = document.getElementById("subbutt");
console.log(123)
btn6.addEventListener("click", function()
{
	let txtquery = document.querySelector('#txt');
	if (txtquery.innerHTML == '<div class="nozone"> Доставка За зону доставки. Ориентировачная цена  - 500р, но она уточняется у оператора </div>' || txtquery.innerHTML == '<div class="onzone">Условия бесплатной доставки выполнены</div>' )
	{
		alert("Вы не ввели адрес");
	}else{
	
	const formElement = document.getElementById('form1'); // извлекаем элемент формы
	formElement.addEventListener('submit', (e) => {
	e.preventDefault();
	let formData = new FormData(formElement); // создаём объект FormData, передаём в него элемент формы
	// теперь можно извлечь данные
	let delquery = document.querySelector(".delivery-cost");
	const name = formData.get('name'); // 'John'
	let number = formData.get('number'); // 'Smith'
	let comment = formData.get("comment");
	let adrquery = document.querySelector('#adr');
	let adress = adrquery.innerText;
	let delive = delquery.innerText;
	console.log(adress)
	data = "Имя // " + name + " //Номер телефона// " + number + " //Адрес// " + adress + " // Товары: // " + productlist + "//  Комментарий к заказу  //" + comment + "Cкидка hh1204kdm" + delive;
	console.log(data)
	tg.sendData(data);
	

});
}
		
	
});

