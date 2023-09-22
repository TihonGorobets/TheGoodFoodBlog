let contents = document.querySelectorAll('.b-pop-list');
let buttons = document.querySelectorAll('.b-inner-a');
let openedIndex = -1; // Инициализируем переменную для отслеживания открытого блока

buttons.forEach((button, index) => { 
  button.addEventListener('click', () => { 
    if (openedIndex !== -1) { 
      // Закрываем предыдущий открытый блок 
      contents[openedIndex].style.display = 'none'; 
    } 
 
    if (openedIndex !== index) { 
      // Если это не текущий открытый блок, открываем его 
      contents[index].style.display = 'block'; 
      openedIndex = index; // Обновляем индекс текущего открытого блока 
    } else { 
      // Если текущий блок уже открыт, закрываем его 
      contents[index].style.display = 'none'; 
      openedIndex = -1; // Устанавливаем -1 для отслеживания закрытого состояния 
    } 
  }); 
});








let toggle = document.querySelector('.open');
let mobileMenu = document.querySelector('.mobile-menu');
let line1 = document.querySelector('.header-burgerAfter');
let line2 = document.querySelector('.header-burger');
let line3 = document.querySelector('.header-burgerBefore');

toggle.addEventListener('click', () => { 

    if (mobileMenu.className === 'mobile-menu')
    mobileMenu.classList.add('active'); 
    else 
    mobileMenu.classList.remove('active');

    if (line1.className === 'header-burgerAfter')
    line1.classList.add('active'); 
    else 
    line1.classList.remove('active');

    if (line2.className === 'header-burger')
    line2.classList.add('active'); 
    else 
    line2.classList.remove('active');

    if (line3.className === 'header-burgerBefore')
    line3.classList.add('active'); 
    else 
    line3.classList.remove('active');

});




/* let popList = document.querySelectorAll(".b-pop-list");
let innerToggle = document.querySelectorAll(".b-inner-a");
let currentlyOpenBlock = null; 
 
    innerToggle.forEach((button, index) => { 
      button.addEventListener('click', () => { 
        if (currentlyOpenBlock !== null) { 
          currentlyOpenBlock.style.display = 'none'; 
            if (currentlyOpenBlock === popList[index]) { 
            currentlyOpenBlock = null; 
            return; 
          } 
        } 
        popList[index].style.display = 'block'; 
        currentlyOpenBlock = popList[index];
      }); 
    });
 */
/*let popList = document.querySelectorAll(".list");
let innerToggle = document.querySelectorAll(".b-inner-a");

innerToggle.forEach((button, index) => {
    button.addEventLister('click', ()=>{
        popList.forEach((list) => {
            list.style.display = 'none';
        });
        innerToggle[index].style.display = 'block';
    });
});*/