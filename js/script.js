const type = document.querySelector('.input__type'),
    btn = document.querySelector('.input__btn'),
    task = document.querySelector('.main__task')

btn.addEventListener('click', () => {
    if(type.value.trim() == ''){
        type.value = ''
        return 0
    }
    const block = document.createElement('div')
    task.appendChild(block)
    block.classList.add('block')

    /*block's child*/
    const check = document.createElement('div'),
        text = document.createElement('div'),
        del = document.createElement('div')

    block.appendChild(check)
    block.appendChild(text)
    block.appendChild(del)

    text.innerHTML = type.value
    check.classList.add('check')
    text.classList.add('text')
    del.classList.add('delete')

    /*reset input*/
    type.value = ''
})