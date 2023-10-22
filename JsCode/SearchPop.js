let lupa = document.querySelector(".lupa-icon"); 
let lupaMn = document.querySelector(".lupa-icon-mn"); 
let inputBox = document.querySelectorAll(".input-box-mn"); 
let isRotate = false; 
let currentIndx = 0; 
let isMobileMenuOpen = false;  
 
lupa.addEventListener('click', function () { 
    if (currentIndx >= inputBox.length) { 
        currentIndx = 0; 
    } 
 
    if (inputBox[currentIndx].style.display === "none" || inputBox[currentIndx].style.display === "") { 
        inputBox[currentIndx].style.display = "block"; 
    } else { 
        inputBox[currentIndx].style.display = "none"; 
    } 
 
    if (isMobileMenuOpen) { 
        mobileMenu.classList.remove('active'); 
        isMobileMenuOpen = false; 
    } 
 
    lupa.style.transform = isRotate ? "rotate(0deg)" : "rotate(90deg)"; 
    lupaMn.style.transform = isRotate ? "rotate(0deg)" : "rotate(90deg)"; 
    isRotate = !isRotate; 
    currentIndx++; 
}); 
 
lupaMn.addEventListener('click', function () { 
    if (currentIndx >= inputBox.length) { 
        currentIndx = 0; 
    } 
 
    if (inputBox[currentIndx].style.display === "none" || inputBox[currentIndx].style.display === "") { 
        inputBox[currentIndx].style.display = "block"; 
    } else { 
        inputBox[currentIndx].style.display = "none"; 
    } 
 
    
    if (isMobileMenuOpen) { 
        mobileMenu.classList.remove('active'); 
        isMobileMenuOpen = false; 
        line1.classList.remove('active');
        line2.classList.remove('active');
        line3.classList.remove('active');
    }
   
    lupa.style.transform = isRotate ? "rotate(0deg)" : "rotate(90deg)"; 
    lupaMn.style.transform = isRotate ? "rotate(0deg)" : "rotate(90deg)"; 
    isRotate = !isRotate; 
    currentIndx++; 
}); 
 
let toggle = document.querySelector('.open'); 
let mobileMenu = document.querySelector('.mobile-menu'); 
let line1 = document.querySelector('.header-burgerAfter'); 
let line2 = document.querySelector('.header-burger'); 
let line3 = document.querySelector('.header-burgerBefore'); 
toggle.addEventListener('click', () => { 
    if (isMobileMenuOpen) { 
        mobileMenu.classList.remove('active'); 
        isMobileMenuOpen = false; 
    } else { 
        mobileMenu.classList.add('active'); 
        isMobileMenuOpen = true; 
    } 
 
 
    if (isMobileMenuOpen) { 
        lupa.style.transform = "rotate(0deg)"; 
        lupaMn.style.transform = "rotate(0deg)"; 
        isRotate = false; 
        inputBox.forEach(box => { 
            box.style.display = "none"; 
        }); 
    } 
 
     
    if (line1.classList.contains('active')) { 
        line1.classList.remove('active'); 
    } else { 
        line1.classList.add('active'); 
    } 
    if (line2.classList.contains('active')) { 
        line2.classList.remove('active'); 
    } else { 
        line2.classList.add('active'); 
    } 
    if (line3.classList.contains('active')) { 
        line3.classList.remove('active'); 
    } else { 
        line3.classList.add('active'); 
    } 
});