let popNone = document.querySelectorAll(".pop-list-none");
let blocks = document.querySelectorAll(".b-pop-list");
popNone.forEach(function(closeBtn, index){
    closeBtn.addEventListener('click', function(){
        blocks[index].style.display = 'none';
    });
});