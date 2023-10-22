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

/* let lupa = document.querySelector(".lupa-icon");
let lupaMn = document.querySelector(".lupa-icon-mn");
let inputBox = document.querySelector(".input-box");
let isRotate = false;

lupa.addEventListener('click', function(){
    if(isRotate){
      lupa.style.transform = 'rotate(0deg)'
      lupaMn.style.transform = 'rotate(0deg)'
      inputBox.style.display = 'block';
    }else{
      lupa.style.transform = 'rotate(90deg)'
      lupaMn.style.transform = 'rotate(90deg)'
      inputBox.style.display = 'none';
    }
    isRotate = !isRotate;
});

lupaMn.addEventListener('click', function(){
  if(isRotate){
    lupa.style.transform = 'rotate(0deg)'
    lupaMn.style.transform = 'rotate(0deg)'
  }else{
    lupa.style.transform = 'rotate(90deg)'
    lupaMn.style.transform = 'rotate(90deg)'
  }
  isRotate = !isRotate
}); */

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