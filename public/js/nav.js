const createNav = ()=>{
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
        <img src="./img/dark-logo.png" class="brand-logo" alt="">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="busque por produtos">
                <button class="search-btn">procurar</button>
            </div>
            <a href="#"><img src="./img/user.png" alt=""></a>
            <a href="#"><img src="./img/cart.png" alt=""></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">Home</a></li>
        <li class="link-item"><a href="#" class="link">Feminino</a></li>
        <li class="link-item"><a href="#" class="link">Masculino</a></li>
        <li class="link-item"><a href="#" class="link">Infantil</a></li>
        <li class="link-item"><a href="#" class="link">Acessórios</a></li>
    </ul>
    `;
}

createNav();