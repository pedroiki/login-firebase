

var btnLogin=document.getElementById("btnLogin");   // document = html para que o java scrip pegue o que foi clicado no botao
var inputEmail=document.getElementById("inputEmail");  // ter cuidado com as maisculas  Id
var inputPassword=document.getElementById("inputPassword");

// Agora tenho no JavaScript variáveis que se comunicam com os elementos html,  variaveis inputLogin,inputEmail,inputPassword


btnLogin.addEventListener('click', function(){
  console.log("Botao clicado");     // quando clicado vai dar o que esta dentro do input email e password
  console.log(inputEmail.value);
  console.log(inputPassword.value);
  firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function(result){
    console.log("usuarioConectado");
    window.location.replace("init.html");  // este comando leva a pagina init
  }).catch(function(error) {
    // Handle Errors here.      then e a funcao executada quando da certo , e o catch quando da errado
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Usuario ou Senha errada");
    // ...
  });
});
