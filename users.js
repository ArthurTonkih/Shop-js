function add() {
    let user = {
        name: "Иван",
        surname: "Иванов",
        login: 'ivanov',
        password: '1234'
    }
        fetch('add_users.php', {
            method: 'POST',
            body: JSON.stringify(user)
        })
        .then((res) => res.text())
        .then((res) => {
            console.log(res)
        })
}