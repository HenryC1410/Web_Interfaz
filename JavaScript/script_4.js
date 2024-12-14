var header = document.getElementById('header');

window.addEventListener('scroll', ()=>{

    var scroll = window.scrollY
    if(scroll>10){

        header.style.backgroundColor = '#ffc8dd'
    }else{
        header.style.backgroundColor = '#EB455F'
    }
})