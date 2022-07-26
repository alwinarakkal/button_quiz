const modalBtns = [...document.getElementsByClassName('modal-button')]
const modalBody = document.getElementById('modal-body-confirm')
modalBtns.forEach(modalBtn=> modalBtn.addEventListener('click', ()=>{

    console.log('hello worldss')
    const pk = modalBtn.getAttribute('data-pk') 
    console.log(pk)
    
}))