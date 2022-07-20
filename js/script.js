const type = document.querySelector('.input__type'),
    btn = document.querySelector('.input__btn'),
    task = document.querySelector('.main__task'),
    main = document.querySelector('.main__content')

btn.addEventListener('click', (event) => {
    event.preventDefault();
    if(type.value.trim() == ''){
        type.value = ''
        return 0
    }
    const block = document.createElement('div')
    task.appendChild(block)
    block.classList.add('block')

    /*block's child*/
    const check = document.createElement('div'),
        text = document.createElement('input'),
        del = document.createElement('div'),
        edit = document.createElement('div')

    block.appendChild(check)
    block.appendChild(text)
    block.appendChild(edit)
    block.appendChild(del)

    text.value = type.value
    text.type = 'text'
    text.setAttribute('readonly', 'readonly')
    check.classList.add('check')
    text.classList.add('text')
    edit.classList.add('edit')
    del.classList.add('delete')

    /*reset input*/
    type.value = ''
})