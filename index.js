

var menu = document.getElementById('menu');
var changeImg = document.getElementById("changeImage");
var navbar = document.getElementById('navBar');

function changeMenu() {
    if (changeImg.getAttribute('src') === './main-menu.png')
        {
            changeImg.src = './reject_12091676.png';
            navbar.classList.add('open-menu')
        }
    else if (changeImg.getAttribute('src') === './reject_12091676.png') {
        changeImg.src = './main-menu.png'
    }
    
}
menu.addEventListener('click', changeMenu);