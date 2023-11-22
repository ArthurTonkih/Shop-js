
$('#ok').click(function () {
	console.log('kkf')
	name = $('#name').val()
	surname = $('#surname').val()
	login = $('#login').val()
	password = $('#password').val()

	let users = {
		name: name,
		surname: surname,
		login: login,
		password: password
	}
	console.log(users)
	fetch('add_users.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'applicaton/x/www-forum/unlencoded'
		},
		body: JSON.stringify(users)
	})
		.then((res) => res.text())
		.then((res) => {
			console.log(res)
			if (res == 'ok') {
				$('.ok').html('Спасибо за регистрацию')
			}
		})
})