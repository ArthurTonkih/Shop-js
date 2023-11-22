fetch('tovar.php', {
    method: 'POST'
})
.then((res) => res.json())
.then((res) => {
    console.log(res)
    html = '<div class = "item_tovar">'
    for (i=0; i < res.length; i++){
        html += '<h1>'+res[i]['title']+'</h1>'
        html += '<h1>'+res[i]['description']+'</h1>'
        html += '<h1>'+res[i]['price']+'</h1>'
    }
    $('.items_tovar').html(html)
})