// VARIAVEIS
var btnContact = document.querySelector('.jl-btn-contact')

// PRE-LOADER

window.addEventListener('load', function () {
    let preLoader = document.querySelector('.jl-preloader')
    preLoader.classList.add('fade-out')

    setTimeout(function () {
        preLoader.style.display = 'none';
    }, 2000);
})

// BOTÃO DE CONTATO
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.jl-contact-info')
    boxContact.classList.toggle('contact-open')
    this.classList.toggle('change-icon')

})