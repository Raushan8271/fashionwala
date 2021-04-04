var kart = JSON.parse(localStorage.getItem('cart'))
var kartitem = document.getElementById('cart-item')

var total = 0

kart.forEach(el => {
    // console.log(element)
    var element = JSON.parse(el)
    var div = document.createElement('div')
    div.innerHTML = `<div>
                        <img class="item-img" style="width: 150px;height: 100px;border-radius:7px;" src="${element.image}" alt="">
                             <h3 style="text-align: center;color: white;"> Price : $ ${element.price}</h3>
                             
                     </div>`
    total += Math.round(element.price)
    kartitem.appendChild(div)
});

document.getElementById('total').innerHTML = `Total : $ ${total}`

var count = 0;

function promo() {
    var promo = document.getElementById('inppromo').value;
    if (count == 0) {
        count++
        if (promo == 'PROMO10') {
            total = total - (10 / 100) * total
            document.getElementById('total').innerHTML = `Total : $ ${total}`
            alert("Congratulations you got 10% of discount")
        } else if (promo == 'PROMO20') {
            total = total - (20 / 100) * total
            document.getElementById('total').innerHTML = `Total : $ ${total}`
            alert("Congratulations you got 20% of discount")
        } else if (promo == 'PROMO30') {
            total = total - (30 / 100) * total
            document.getElementById('total').innerHTML = `Total : $ ${total}`
            alert("Congratulations you got 30% of discount")
        } else if (promo == 'PROMO40') {
            total = total - (40 / 100) * total
            document.getElementById('total').innerHTML = `Total : $ ${total}`
            alert("Congratulations you got 40% of discount")
        } else if (promo == 'PROMO50') {
            total = total - (50 / 100) * total
            document.getElementById('total').innerHTML = `Total : $ ${total}`
            alert("Congratulations you got 50% of discount")
        } else {
            alert("Promo code is not valid")
            count = 0
        }
    } else if (total == 0) {
        alert("Your Cart is Emtpy")
    } else {
        alert('You are already avail promo offer')
    }
}

if (total > 0) {
    document.getElementById('emptycart').style.display = 'none'
}

function clearcart() {
    localStorage.removeItem('cart');
    window.location.href = "cart.html"
}



function checkout() {
    if (total == 0) {
        alert("Your Cart is Emtpy")
    } else {
        window.location.href = 'payment.html'
    }
}