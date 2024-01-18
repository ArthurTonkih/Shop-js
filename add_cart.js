fetch('tovar.php', {
	method: 'POST'
})
.then((res) => res.json())
.then((res) => {
	let sd = localStorage.getItem('id')
	console.log(sd)

	console.log(res)
	html = '<div class = "item_cart">'
	for (i=0; i < res.length; i++){
		html += '<div class="cart">'
		html += '<h1>'+res[sd]['title']+'</h1>'
		html += '<h1>'+res[sd]['description']+'</h1>'
		html += '<h1>'+res[sd]['price']+'</h1>'
		html += '<button onclick="addNum(this.id)" class="addcart" id='+res[i]['id']+'><p id="btn_cart">Добавить в корзину</p></button>'
		html += '</div>'
	}
	let item_cart = document.querySelector('.item_cart');
	item_cart.innerHTML = html;

})