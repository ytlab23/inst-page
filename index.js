

var menu = document.getElementById('menu');
var changeImg = document.getElementById("changeImage");
var navbar = document.getElementById('navBar');

function changeMenu() {
    if (changeImg.getAttribute('src') === './img/main-menu.png')
        {
            changeImg.src = './img/reject_12091676.png';
            navbar.classList.remove('nav-bar');
            navbar.classList.add('open-menu');
        }
    else if (changeImg.getAttribute('src') === './img/reject_12091676.png') {
        changeImg.src ='./img/main-menu.png' ;
        navbar.classList.add('nav-bar');
            navbar.classList.remove('open-menu');
    }
    
}
menu.addEventListener('click', changeMenu);