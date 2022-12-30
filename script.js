document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper){

    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
    
    
    dropDownBtn.addEventListener('click', function () {
        dropDownList.classList.toggle('dropdown__list-visible');
        this.classList.add('dropdown__button-active');
    });
    
    dropDownListItems.forEach(function(listItem){
        listItem.addEventListener('click', function(e){
            e.stopPropagation(); //остановим передачу клика наверх
            dropDownBtn.innerText = this.innerText;
            dropDownBtn.focus();
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove('dropdown__list-visible');
        }
        )
    })
    
    //клик снаружи закрываем список
    document.addEventListener('click', function(e){
        console.log('document.click');
        if(e.target !== dropDownBtn){
            dropDownBtn.classList.remove('dropdown__button-active');
            dropDownList.classList.remove('dropdown__list-visible');
        }
        
    })
    
    //скрыть по нажанию на кнопки
    document.addEventListener('keydown', function(e){
        if(e.key === 'Tab' || e.key == 'Escape' ){
            dropDownBtn.classList.remove('dropdown__button-active');
            dropDownList.classList.remove('dropdown__list-visible');
        }
    })
})


document.querySelectorAll('.input').forEach(function(input){
    input.addEventListener('click',function(){
        this.classList.toggle('input-active');
    })
})