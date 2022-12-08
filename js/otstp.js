const productsContainer113 = document.querySelector('#otstup1');
const productsContainer2 = document.querySelector('#otstup2');
const productsContainer23 = document.querySelector('#otstup3');
const productsContainer234 = document.querySelector('#otstup4');
const productsContainer235 = document.querySelector('#otstup5');
const productsContainer236 = document.querySelector('#otstup6');
function renderProducts12() {

    const productHTML = `<div class="col-md-12">

					<div class="lineup" id="el">
					

						<p>Мясные чипсы</p>
					</div>`;

    productsContainer113.insertAdjacentHTML('beforeend', productHTML);

}

function renderProducts123() {

    const productHTML = `<div class="col-md-12">

					<div class="lineup" id="el2">
					

						<p>Комбо Наборы</p>
					</div>`;

    productsContainer2.insertAdjacentHTML('beforeend', productHTML);

}


function renderProducts1234() {

    const productHTML = `<div class="col-md-12">

					<div class="lineup" id="el3">
					

						<p>Сыры</p>
					</div>`;

    productsContainer23.insertAdjacentHTML('beforeend', productHTML);

}
function renderProducts12345() {

    const productHTML = `<div class="col-md-12">

					<div class="lineup" id="el4">
					

						<p>Напитки</p>
					</div>`;

    productsContainer234.insertAdjacentHTML('beforeend', productHTML);

}
function renderProducts12346() {

    const productHTML = `<div class="col-md-12">

					<div class="lineup" id="el5">
					

						<p>Пельмени</p>
					</div>`;

    productsContainer235.insertAdjacentHTML('beforeend', productHTML);

}

function renderProducts123467() {

    const productHTML = `<div class="col-md-12">

					<div class="lineup" id="el6">
					

						<p>Жареное мясо</p>
					</div>`;

    productsContainer236.insertAdjacentHTML('beforeend', productHTML);

}

renderProducts12()
renderProducts123()
renderProducts1234()
renderProducts12345()
renderProducts12346()
renderProducts123467()