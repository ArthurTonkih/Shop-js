function add() {
	let tovar = {
		title: "Что-то",
		description: "Чего-то",
		price: '1221'
	}
	fetch('add_tovar.php', {
		method: 'POST',
		body: JSON.stringify(tovar)
	})
		.then((res) => res.text())
		.then((res) => {
			console.log(res)
		})
}