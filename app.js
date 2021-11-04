const btn = document.querySelector('button')
const form = document.querySelector('form')
const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
btn.addEventListener('click', valid =>{
let input = document.querySelector('input').value;
   if (!input.match(regExp) ){
        form.classList.add('active')
        form.classList.remove('bounce')
        void form.offsetWidth
       form.classList.add('bounce')
    }
    else{
        form.classList.remove('active')
    }
   
  
})

