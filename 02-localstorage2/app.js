
const productsList = document.querySelector('#products')
const cartList = document.querySelector('#cart')

//* start

loadCart()

//* --------------------------------------------------------------------- event listerners

productsList.addEventListener('click',(event)=>{
    if(event.target.classList.contains('add')){
        const productCard = event.target.parentElement

        const product = getProductInfo(productCard)

        addToCartLS(product)
        createCartElement(product)
    }
})

cartList.addEventListener('click',(event)=>{
    const buttonRemove = event.target
    if(buttonRemove.classList.contains('x')){
        console.log("x: click!")
        deleteFromCartLS(buttonRemove.parentElement.getAttribute('product-id'))
        cartList.removeChild(buttonRemove.parentElement)
    }
    
})

//* --------------------------------------------------------------------- Methods


function createCartElement(product){
    const div = document.createElement('div')
    div.classList = 'cart-list-item'
    div.setAttribute('product-id',product.id)

    const img = document.createElement('img')
    img.setAttribute('src',product.img)
    img.setAttribute('alt','productImg')

    const p = document.createElement('p')
    p.innerText = product.name

    const button = document.createElement('button')
    button.classList = 'x'
    button.innerText = 'x'

    div.appendChild(img)
    div.appendChild(p)
    div.appendChild(button)

    cartList.appendChild(div)
}

/* 
    <div class="cart-list-item" product-id="1234">
        <img src="/02-localstorage2/img/img1.png" alt="imgProduct">
        <p>KugoPola</p>
        <button class="x">x</button>
    </div>
*/

function getProductInfo(productCard){
    const product = {
        img: productCard.querySelector('.productImg').src,
        name: productCard.querySelector('.productName').innerText,
        id: productCard.getAttribute('product-id')
    }
    return product
}


function loadCart(){
    const cart = getCartFromLS()
    cart.forEach((product)=>{
        createCartElement(product)
    })
}

//* --------------------------------------------------------------------- local storage interactions


function getCartFromLS(){
    if(localStorage.getItem('cart') === null ){
        return []
    }else{
        return JSON.parse(localStorage.getItem('cart'))
    }
}

function addToCartLS(product){
    const cart = getCartFromLS()
    cart.push(product)
    localStorage.setItem('cart',JSON.stringify(cart))
}

function deleteFromCartLS(id){
    const cart = getCartFromLS()

    cart.forEach((productElement,i) => {
        if(productElement.id === id){
            cart.splice(i,1)
            return localStorage.setItem('cart',JSON.stringify(cart))
        }
    });
}