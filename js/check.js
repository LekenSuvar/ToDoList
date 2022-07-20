/*Checkbox, Edit, Delete*/

main.addEventListener('click', () => {
    console.log('click')
})


task.addEventListener('click', (event) => {
    if (event.target.className == 'check') {
        event.target.classList.add('done')
        event.target.parentNode.classList.add('border')
    } else if (event.target.className == 'edit' || event.target.className == 'edit process') {
        if (event.target.previousSibling.hasAttribute('readonly') === true) {
            event.target.previousSibling.removeAttribute('readonly')
            event.target.previousSibling.focus()
            event.target.classList.add('process')
        } else {
            event.target.classList.remove('process')
            if(event.target.previousSibling.value.trim() == ''){
                event.target.previousSibling.value = 'Empty Task'
            }
            event.target.previousSibling.setAttribute('readonly', false)
        }
    } else if (event.target.className == 'delete') {
        event.target.parentNode.style.display = 'none'
    } else {
        event.target.classList.remove('done')
        event.target.parentNode.classList.remove('border')
    }
}, false)