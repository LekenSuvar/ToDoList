/*Checkbox*/
const checkTask = document.querySelector('.main__task'),
    editChange = document.querySelectorAll('.edit')

console.log(editChange.length)

checkTask.addEventListener('click', (event) => {
    if (event.target.className == 'check') {
        event.target.classList.add('done')
        event.target.parentNode.classList.add('border')
    } 
    else if (event.target.className == 'edit'){
        if(event.target.previousSibling.hasAttribute('readonly') === true){
            event.target.previousSibling.removeAttribute('readonly')
            event.target.previousSibling.focus()
            event.target.style.background = 'url(../img/confirm.svg) no-repeat center top / cover'
        }
        else{
            event.target.previousSibling.setAttribute('readonly', false)
            event.target.style.background = 'url(../img/edit.svg) no-repeat center top / cover'
        }
    }
    else if (event.target.className == 'delete'){
        event.target.parentNode.style.display = 'none'
    }
    else{
        event.target.classList.remove('done')   
        event.target.parentNode.classList.remove('border')
        event.target.previousSibling.setAttribute('readonly', false)
    }
}, false)
