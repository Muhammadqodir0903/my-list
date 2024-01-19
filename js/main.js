let elList = document.querySelector('.list')

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => fn(data))

function fn(data) {
    data.map((item) => {
        let newLi = document.createElement('li')
        newLi.innerHTML = `
        <li>
        <h1>Name:<i>${item.name}</i></h1>
        <h3>Address:<i>${item.address.street}</i></h3>
        <h3>email: <i>${item.email}</i></h3>
        <h3>Tel: <i>${item.phone}</i></h3>

        <br><br><br> <marquee color="blue"><i>Muallif:Inomov.M</i></marquee>
    </li>

        `
        elList.appendChild(newLi)
    })
}