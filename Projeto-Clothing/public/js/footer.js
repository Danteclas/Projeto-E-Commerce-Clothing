
const createFooter = () => {
  let footer = document.querySelector('footer');

  footer.innerHTML = `
    <div class="footer-content">
        <img src="./img/light-logo.png" class="logo" alt="">
        
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Masculino</li>
                <li><a href="#" class="footer-link">Camisetas</a></li>
                <li><a href="#" class="footer-link">Camisas</a></li>
                <li><a href="#" class="footer-link">Calças</a></li>
                <li><a href="#" class="footer-link">Jeans</a></li>
                <li><a href="#" class="footer-link">Jaquetas</a></li>
                <li><a href="#" class="footer-link">Calçados</a></li>
                <li><a href="#" class="footer-link">Acessórios</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Infantil</li>
                <li><a href="#" class="footer-link">Camisetas</a></li>
                <li><a href="#" class="footer-link">Camisas</a></li>
                <li><a href="#" class="footer-link">Calças</a></li>
                <li><a href="#" class="footer-link">Vestidos</a></li>
                <li><a href="#" class="footer-link">bermudas</a></li>
                <li><a href="#" class="footer-link">Calçados</a></li>
             
            </ul>
            <ul class="category">
                <li class="category-title">Feminino</li>
                <li><a href="#" class="footer-link">Camisetas</a></li>
                <li><a href="#" class="footer-link">Camisas</a></li>
                <li><a href="#" class="footer-link">Shorts</a></li>
                <li><a href="#" class="footer-link">Vestidos</a></li>
                <li><a href="#" class="footer-link">Saias</a></li>
                <li><a href="#" class="footer-link">sapatos</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">Blazers</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">Acessórios</a></li>
            </ul>
        </div>
        </div>
        
       <div class = " institucional"> 
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
        </div>
           <div class="midia-icones">  
           <div clas="twitter">           
           <img src="./img/twitter.png" class="twitter" alt="">
           <a href="#" class="social-link"></a>
           </div>   
           <div clas="facebook">           
           <img src="./img/facebook.png" class="facebook" alt=""> 
           <a href="#" class="social-link"></a> 
           </div>       
                               
       
             <div clas="instagram">           
             <img src="./img/instagram.png" class="instagram" alt=""> 
             <a href="#" class="social-link"></a>
             </div> 
                        
                      
          
       
            
           </div>
          
         <div class="formasDePagamentos">
            <div class="card-pay">
               <img src="./img/dinner.png" class="dinner" alt="">
               <img src="./img/visa.png" class="visa" alt="">
               <img src="./img/pay.png" class="pay" alt="">
               <img src="./img/amex.png" class="amex" alt="">
               <img src="./img/barras.png" class="barras" alt="">
               <img src="./img/mastercard.png" class="mastercard" alt="">
            </div>
         </div>
           
        </div>
        <p class="footer-credit">Clothing,a melhor loja para voçê e sua família </p>
    `;
}


createFooter();
