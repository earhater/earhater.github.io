const productsContainer1 = document.querySelector('#products-containergov');

// Запускаем getProducts
getProducts2();

// Асинхронная функция получения данных из файла products.json
async function getProducts2() {
	// Получаем данные из products.json
    const response = await fetch('./js/stuff/chips50.json');
    // Парсим данные из JSON формата в JS
    const productsArray = await response.json();
    // Запускаем ф-ю рендера (отображения товаров)
	renderProducts1(productsArray);
}

function renderProducts1(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `<div class="col-md-6">

		<div class="card mb-4" data-id="${item.id}">
		<h4 class="item-title">${item.title}</h4>
			<img class="product-img" src="img/roll/${item.imgSrc}" alt="">
			<div class="card-body text-center">
				
				<div class='subscr'>
				<p>${item.subcription}</p></div>
				
				<div class="price">
						
						
						<div class="inbox"><p>В наличии: ${item.itemsInBox}</p></div>
						<div class="price__weight">${item.weight}г.</div>
						<div class="price__currency">${item.price} ₽</div>
				</div>
				
				<div class="details-wrapper">

					<!-- Счетчик -->
					<div class="items_counters">
						<div class="items__control" data-action="minus">-</div>
						<div class="items__current" data-counter>1</div>
						<div class="items__control" data-action="plus">+</div>
					</div>
					<button  type="button" class="card-button">В корзину</button>
					<!-- // Счетчик -->

					
				</div>

				

			</div>
		</div>
	</div>`;
        productsContainer1.insertAdjacentHTML('beforeend', productHTML);
    });
}

