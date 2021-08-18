const openS = document.querySelector('#open')
const closeS = document.querySelector('#close')
const menu = document.querySelector('#menu')

openS.addEventListener('click', () => {
    menu.classList.remove('hide')
    closeS.classList.remove('hide')
    openS.classList.add('hide')
})

closeS.addEventListener('click', () => {
    menu.classList.add('hide')
    closeS.classList.add('hide')
    openS.classList.remove('hide')
})