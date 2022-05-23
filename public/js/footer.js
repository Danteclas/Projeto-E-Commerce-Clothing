const createFooter = ()=>{
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
        <img src="./img/light-logo.png" class="logo" alt="">
        
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
        </div>
        </div>
        <p class="footer-title">Sobre a Clothing</p>
        <p class="info"> A Clothing foi fundada em 1930 pelo família paulistas Nóbrega.Iniciaram sua primeira loja no centro de São Paulo e hoje somam mais de 150 unidades espalhados pelo Brasil, se despontando como uma das grandes redes de varejo do Brasil.                
        O sucesso da rede , se a qualidade dos produtos e do empenho em oferecer o melhor atendimento , nas lojas fisícas e online.
        </p>
        <p class="info">Atendimento emails - ajuda@clothing.com, customersupport@clothing.com</p>
        <p class="info">telephone - +55 11 545454 00100</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">Termos & Serviços</a>
                <a href="#" class="social-link">Politica de Privacidade</a>
            </div>
           
            <div class="social-instagram">
            <img src="./img/instagram.png" class="instagram" alt=""> 
            <a href="#" class="social-link">instagram</a>
            </div>

            <div class="social-facebook">            
           
            <img src="./img/facebook.png" class="facebook" alt="">  
            <a href="#" class="social-link">facebook</a>  
            </div>

            <div class="social-twitter"> 
            <img src="./img/twitter.png" class="twitter" alt="">
            <a href="#" class="social-link">twitter</a>
            
            </div>

            <div>
            <p class="formasDePagamentos"></p>
            <img src="./img/dinner.png" class="dinner" alt="">
            <img src="./img/visa.png" class="visa" alt="">
            <img src="./img/pay.png" class="pay" alt="">
            <img src="./img/amex.png" class="amex" alt="">
            <img src="./img/barras.png" class="barras" alt="">
            <img src="./img/mastercard.png" class="mastercard" alt="">
            </div>

        </div>
        <p class="footer-credit">Clothing,a melhor loja para voçê e sua família </p>
    `;
}


createFooter();