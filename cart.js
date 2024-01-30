let addcart = document.querySelector('.addcart');
	addcart.addEventListener('click', function() {
	addcart.classList.add('off')

	title = $('#title').val()
	description = $('#description').val()
	price = $('#price').val()

	let tovar_cart = {
		title: title,
		description: description,
		price: price
	}
	console.log(tovar_cart)
	fetch('add_cart.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'applicaton/x/www-forum/unlencoded'
		},
		body: JSON.stringify(tovar_cart)
	})
		.then((res) => res.text())
		.then((res) => {
			console.log(res)
		})
})