let loader =document.querySelector('.loader');

const becomeSellerElement= document.querySelector('.become-seller');
const applyform = document.querySelector('#apply-form');
const showApplyFormBtn = document.querySelector('#apply-btn');

window.onload = () => {
  if(sessionStorage.user){
    let user = JSON.parse(sessionStorage.user);
    if(compareToken(user.authToken,user, user.email)){
      becomeSellerElement.classList.remove('hide');
    }else{
    location.replace('./login');
  }

}
}
showApplyFormBtn.addEventListener('click'),()=>{
  becomeSellerElement.classList.add('hide');
  applyform.classList.remove('hide');
}

//form  submission
const applyFormButton= document.querySelector('#apply-form-btn');
const businessName= document.querySelector('#business-name');
const address= document.querySelector('#business-add');
const about = document.querySelector('#about');
const number = document.querySelector('#number');
const tac= document.querySelector('#number');
const legitInfo= document.querySelector('#legitInfo');

applyFormButton.addEventListener('click',()=>{
  if(!businessName.value.length || !address.value.length || !about.value.length
    ||!number.value.length){
      showAlert('Preencher todos os campos');
    }else if(!tac.checked || !legitInfo.checked){
      showAlert(' Aceito os termos e condições ');
    }else{
      //making server request
      loader.style.display = "block";
      sendData('/seller',{
        name:businessName.value,
        address:address.value,
        about:about.value,
        number:number.value,
        tac:tac.checked,
        legit:legit.checked,
        email:JSON.parse(sessionStorage.user).email
      })
    }
})