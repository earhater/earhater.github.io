const productsContainer113 = document.querySelector('#otstup1');
const productsContainer2 = document.querySelector('#otstup2');

function renderProducts12() {

    const productHTML = `<div class="col-md-12">

					<div class="lineup" id="el">
					

						<p>Категория 1</p>
					</div>`;

    productsContainer113.insertAdjacentHTML('beforeend', productHTML);

}

function renderProducts123() {

    const productHTML = `<div class="col-md-12">

					<div class="lineup" id="el">
					

						<p>Категория 2</p>
					</div>`;

    productsContainer2.insertAdjacentHTML('beforeend', productHTML);

}
renderProducts12()
renderProducts123()