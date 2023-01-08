function calcCartPriceAndDelivery() {
	const cartWrapper = document.querySelector('.cart-wrapper');
	const priceElements = cartWrapper.querySelectorAll('.price__currency');
	const totalPriceEl = document.querySelector('.total-price');
	let deliveryCost = document.querySelector('.delivery-cost');
	const cartDelivery = document.querySelector('[data-cart-delivery]');
	let txtquery = document.querySelector('#txt');
	// Общая стоимость товаров
	let priceTotal = 0;

	// Обходим все блоки с ценами в корзине
	priceElements.forEach(function (item) {
		// Находим количество товара
		const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
		// Добавляем стоимость товара в общую стоимость (кол-во * цену)
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});

	// Отображаем цену на странице
	totalPriceEl.innerText = priceTotal;

	// Скрываем / Показываем блок со стоимостью доставки
	if (priceTotal > 0) {
		cartDelivery.classList.remove('none');
	} else {
		cartDelivery.classList.add('none');
	}

	// Указываем стоимость доставки
	

	if (txtquery.innerHTML == '<div class="nozone"> Доставка За зону доставки. Ориентировачная цена  - 500р, но она уточняется у оператора </div>'){
		deliveryCost.classList.remove('free')
		deliveryCost.innerText = '500';
	 	txtquery.innerHTML = '<div class="nozone"> Условия бесплатной доставки не выполнены </div>';
	 	totalPriceEl.innerText = parseInt(priceTotal) + parseInt(deliveryCost.innerText);
		console.log("nozone11")
	}else{
		if (priceTotal >= 2000) {
			deliveryCost.classList.add('free');
			deliveryCost.innerText = 'бесплатно';
			txtquery.innerHTML  = '<div class="onzone">Условия бесплатной доставки выполнены</div>'
			console.log("dear zone")
		} else {
			deliveryCost.classList.remove('free');
			
			deliveryCost.innerText = '150';
			txtquery.innerHTML = '<div class="nozone"> Условия бесплатной доставки не выполнены </div>';
			totalPriceEl.innerText = parseInt(priceTotal) + parseInt(deliveryCost.innerText);
			console.log("low zone")
		}
	}
}