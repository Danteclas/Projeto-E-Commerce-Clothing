

const createNav = () => {
  let nav = document.querySelector('.navbar');

  nav.innerHTML = `
    <div class="nav">
        <img src="./img/dark-logo.png" class="brand-logo" alt="">            
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="busque por produtos">
                <button class="search-btn">procurar</button>
            </div>
            <a>          
                <img src="./img/user.png" id="user-img" alt="">
                <div class="login-logout-popup hide" >
                    <p class ="account-info">Entre ou cadastre-se</p>
                    <button class="btn" id="user-btn">Sair</button>
                </div>            
            </a>            
            <a href= "#"><img src="./img/cart.png" alt=""></a>
            
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">Início</a></li>
        <li class="link-item"><a href="#" class="link">Feminino</a></li>
        <li class="link-item"><a href="#" class="link">Masculino</a></li>
        <li class="link-item"><a href="#" class="link">Infantil</a></li>
        <li class="link-item"><a href="#" class="link">Acessórios</a></li>
    </ul>
    `;
}

createNav();

//nav popup 
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
  userPopup.classList.toggle('hide');

})
window.onload = () => {
  let user = JSON.parse(sessionStorage.user || null);
  if (user != null) {
    // means user is logger in 


  } else {
    //user is logget out
  }
}
