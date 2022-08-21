// create small produto cards
const createSmallCards = (data) => {
    return `
    <div class="sm-produto">
        <img src="${data.image}" class="sm-produto-img" alt="">
        <div class="sm-text">
            <p class="sm-produto-name">${data.name}</p>
            <p class="sm-des">${data.shortDes}</p>
        </div>
        <div class="item-counter">
            <button class="counter-btn decrement">-</button>
            <p class="item-count">${data.item}</p>
            <button class="counter-btn increment">+</button>
        </div>
        <p class="sm-price" data-price="${data.sellPrice}">$${data.sellPrice * data.item}</p>
        <button class="sm-delete-btn"><img src="img/close.png" alt=""></button>
    </div>
    `
}

let totalBill = 0;

const setProducts = (name) => {
    const element = document.querySelector(`.${name}`);
    let data = JSON.parse(localStorage.getItem(name));
    if (data == null) {
        element.innerHTML = `<img src="img/empty-cart.png" class="empty-img" alt="">`;
    } else {
        for (let i = 0; i < data.length; i++) {
            element.innerHTML += createSmallCards(data[i]);
            if (name == 'cart') {
                totalBill += Number(data[i].sellPrice * data[i].item);
            }
            updateBill();
        }

    }
    setupEvents(name);

}
const updateBill = () => {
    let billPrice = document.querySelector('.bill');
    billPrice.innerHTML = `$${totalBill}`;
}


const setupEvents = (name) => {
    // setup counter event
    const counterMinus = document.querySelectorAll(`.${name} .decrement`);
    const counterPlus = document.querySelectorAll(`.${name} .increment`);
    const counts = document.querySelectorAll(`.${name} .item-count`);
    const price = document.querySelectorAll(`.${name} .sm-price`);
    const deleteBtn = document.querySelectorAll(`.${name} .sm-delete-btn`);

    let produto = JSON.parse(localStorage.getItem(name));

    counts.forEach((item, i) => {
        let cost = Number(price[i].getAttribute('data-price'));

        counterMinus[i].addEventListener('click', () => {
            if (item.innerHTML > 1) {
                item.innerHTML--;
                totalBill -= cost;
                price[i].innerHTML = `R$${item.innerHTML * cost}`;
                /* if (name == 'cart') { updateBill() }
                produto[i].item = item.innerHTML;
                localStorage.setItem(name, JSON.stringify(produto)); */
            }
        })
        counterPlus[i].addEventListener('click', () => {
            if (item.innerHTML < 9) {
                item.innerHTML++;
                totalBill += cost;
                price[i].innerHTML = `R$${item.innerHTML * cost}`
                /*     if (name == 'cart') { updateBill() }
                product[i].item = item.innerHTML;
                localStorage.setItem(name, JSON.stringify(product)); */
            }
        })
    })

    deleteBtn.forEach((item, i) => {
        item.addEventListener('click', () => {
            produto = produto.filter((data, index) => index != i);
            localStorage.setItem(name, JSON.stringify(produto));
            location.reload();
        })
    })
}

setProducts('wishlist');
setupEvents('cart');

