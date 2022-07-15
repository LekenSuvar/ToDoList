/*Checkbox*/
const checkTask = document.querySelector('.main__task')

checkTask.addEventListener('click', (event) => {
    if (event.target.className == 'check') {
        event.target.classList.add('done')
        event.target.parentNode.classList.add('border')
    } 
    else if (event.target.className == 'delete'){
        event.target.parentNode.style.display = 'none'
    }
    else{
        event.target.classList.remove('done')   
        event.target.parentNode.classList.remove('border')
    }
}, false)