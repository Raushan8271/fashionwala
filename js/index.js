async function category(cate) {
    //console.log(cate.value)
    var val = cate.value;
    var showdata = document.getElementById('showdata')
    showdata.innerHTML = ""
    try {
        var req = await fetch('https://fakestoreapi.com/products')
        var data = await req.json()
            //console.log(data)
        data.forEach(element => {
            if (element.category == `${val}` || val == 'product' || element.title.includes(val)) {
                // console.log(element)
                var div = document.createElement('div')
                div.innerHTML = `<div>
                                     <img class="item-img" style="width: 300px;height: 200px;border-radius:7px;" src="${element.image}" alt="">
                                         <h2 style="text-align: center;color: white;"> Price : $ ${element.price}</h2>
                                        <p style="text-align:center;color:white;">${element.title}</p>
                                        <button class="addtocart" onclick="addtocart(${element.id})">Add to Cart</button>
                                 </div>`

                showdata.appendChild(div)
            }
        });
    } catch (e) {
        console.log(e)
    }
}

var image = ['./image/men.jpg', './image/women.jpg', './image/jewellery.jpg', './image/electronics.jpg']
var i = 0;
setInterval(function() {
    var slide = document.getElementById('slideshow')
    slide.src = image[i]
    if (i < (image.length - 1)) {
        i++
    } else {
        i = 0
    }
}, 2500)
var cart = []
async function addtocart(t) {
    //console.log(t)
    try {
        var request = await fetch('https://fakestoreapi.com/products')
        var single_data = await request.json()
        single_data.forEach(function(el) {
            if (el.id == t) {
                console.log(el)
                if (localStorage.cart != undefined) {
                    cart = localStorage.getItem('cart')
                    cart = JSON.parse(cart)
                }

                cart.push(JSON.stringify(el))
                cart = JSON.stringify(cart)
                localStorage.setItem('cart', cart)
                console.log(cart)
            }
        })
    } catch (e) {
        console.log(e)
    }
}

function gotocart() {
    window.location.href = "cart.html"
}