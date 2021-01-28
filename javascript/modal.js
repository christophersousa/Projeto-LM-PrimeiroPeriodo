/*Animação do Modal de cadastro*/

function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar')

    modal.addEventListener('click', function(e){
        if(e.target.id == modalID || e.target.className == 'cancele' || e.target.className == 'close'){
            modal.classList.remove('mostrar')
        }
    })
}

var cadastro = document.querySelector('.cadastro')
cadastro.addEventListener('click', function(){
    iniciaModal('modal-cadastro');
})


