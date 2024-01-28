fetch('products2.php', {
    method: 'POST',
    headers : {
        'Content-Type': 'application/x/www-forum/unlencoded'
    }
})
.then((res) => res.json())
.then((res)=>{
    console.log(res)
    let sd = localStorage.getItem('id')
        sd = sd.split(',')

    let html = ''
    for (i=1; i<sd.length; i++) {
        console.log(sd[i])
        html += '<div class="itemscart">'
        html += '<h1 class="title">'+res[sd[i]]['title']+'</h1>'
        html += '<h1 class="discription">'+res[sd[i]]['discription']+'</h1>'
        html += '<h1 class="price">'+res[sd[i]]['price']+' руб</h1>'
        html += '</div>'
    }
    let itemss = document.querySelector('.itemscart')
    itemss.innerHTML = html
    console.log(res)
                // let n = parseInt($('.number-product').text())
                // n++
                // $('.number-product').text(n)
     
    })