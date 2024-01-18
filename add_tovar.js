let sd = localStorage.getItem('id')
localStorage.setItem('id', sd == null ? '0' : localStorage.getItem('id'))
console.log(sd)

fetch('tovar.php', {
	method: 'POST'
})
	.then((res) => res.json())
	.then((res) => {
		console.log(res)
		html = '<div class = "items_tovar">'
		for (i = 0; i < res.length; i++) {
			html += '<div class="tovar">'
			html += '<h1>' + res[i]['title'] + '</h1>'
			html += '<h1>' + res[i]['description'] + '</h1>'
			html += '<h1>' + res[i]['price'] + '</h1>'
			// html += '<h1 id="count">0</h1>'
			html += '<button onclick="addNum(this.id)" class="addcart" id=' + res[i]['id'] + '><p id="btn_cart">Добавить в корзину</p></button>'
			html += '</div>'
		}
		let items_tovar = document.querySelector('.items_tovar');
		items_tovar.innerHTML = html;

		// let addcart = document.querySelector('.addcart');
		// addcart.addEventListener('click', ()=> {
		// 	addcart.classList.add('off')
		// })
	})


function addNum(id) {
	//id=this.id;
	console.log(id);
	let sd = localStorage.getItem('id')
	console.log(sd)
	sd = sd.split(',')
	sd.push(id)
	sd = sd.join(',')
	localStorage.setItem('id', sd)
	console.log(sd)
}

// function addNum() {
//     const tovar = document.getElementById("count");
//     const current = parseInt(tovar.textContent);
//     tovar.innerText = current + 1;

//     localStorage.setItem("count", current + 1);
// }