let h1_obj = document.querySelector('h1');


function pasteLogin() {
    let login=document.getElementById('login');
    login.setAttribute('value',"Roman");
    console.log("Roman");
  
}

h1_obj.addEventListener('click',pasteLogin);