let h1_obj = document.querySelector('h1');


function pasteLogin() {
    document.getElementById('login').setAttribute('value',"Roman");
}

h1_obj.addEventListener('click',pasteLogin);