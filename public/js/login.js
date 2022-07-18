
const loader = document.querySelector('.loader');

//selecionar inputs
const submitBtn = document.querySelector('.submit-btn');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

submitBtn.addEventListener('click', ()=>{
  if(name != null){ //signup page
  if(name.value.length < 3){
    showAlert('Senha Incorreta');
  }else if(!email.value.length){
      showAlert('Por favor, coloque o seu email');
  }else if(password.value.length < 8){
      showAlert('A senha precisa de ao menos 8 caracteres');
  }else if(!number.value.length){
      showAlert('Por favor, coloque o seu celular');
 }else if(!Number(number.value) || number.value.length < 9){
      showAlert('Número inválido, por favor, adicione um número de celular válido!');
 }else if(!tac.checked){
      showAlert('Você precisa aceitar os nossos termos e condições para continuar');
  }else{
      //submit form
      loader.style.display = 'block';
      sendData('/signup', {
          name: name.value,
          email: email.value, 
          password: password.value,
          number: number.value, 
          tac: tac.checked,
          notification: notification.checked,
          seller: false
      })
 } 
  }else {
      //login page
      if(!email.value.length || !password.value.length){
          showAlert('Preencher todos os campos');
      }else{  loader.style.display = 'block';
      sendData('/login', {
          email: email.value, 
          password: password.value,
          
      })

      }
  }
});

//function de enviar dados 
const sendData = (path, data) =>  {
  fetch(path, {
      method: 'post',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(data)
  }).then((res) => res.json())
  .then(response => {
     processData(response);
  })
}

const processData = (data)=>{
  loader.style.display = null;
  if(data.alert){
      showAlert(data.alert);
  }
}

//alert function
const showAlert = (msg) =>{
  let alertBox = document.querySelector('.alert-box');
  let alertMsg = document.querySelector('.alert-msg');
  alertMsg.innerHTML = msg;
  alertBox.classList.add('show');
  setTimeout(()=>{
      alertBox.classList.remove('show');
  }, 3000);
}