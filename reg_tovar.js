$('#ok_tovar').click(function () {
	title = $('#title').val()
	description = $('#description').val()
	price = $('#price').val()

	let tovar = {
		title: title,
		description: description,
		price: price
	}
	console.log(tovar)
	fetch('add_tovar.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'applicaton/x/www-forum/unlencoded'
		},
		body: JSON.stringify(tovar)
	})
		.then((res) => res.text())
		.then((res) => {
			console.log(res)
			if (res == 'ok') {
				$('.ok').html('Спасибо за регистрацию')
			}
		})
})