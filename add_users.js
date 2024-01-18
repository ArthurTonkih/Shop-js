fetch('users.php', {
	method: 'POST',
	headers: {
		'Content-Type': 'applicaton/x/www-forum/uniencoded'
	}
})
	.then((res) => res.json())
	.then((res) => {
		console.log(res)
		html = '<div class = "items_users">'
		for (i = 0; i < res.length; i++) {
			html += '<h1>' + res[i]['name'] + '</h1>'
			html += '<h1>' + res[i]['surname'] + '</h1>'
			html += '<h1>' + res[i]['login'] + '</h1>'
		}
		$('.items_users').html(html)
	})