





const menu = document.querySelector('.menu');
const hamburgermenu = document.querySelector ('.hamburger-menu');
const iconBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');


hamburgermenu.addEventListener('click' , displaymenu);
menu.addEventListener('click' , displaymenu);
function displaymenu (){
    if(menu.classlist.contains('tampil')) {
        menu.classList.remove('tampil');
        iconBars.stayle.display='inline';
        iconBars.stayle.display ='none';
    } else {
        menu.classList.add('tampil');
        iconBars.stayle.display='none';
        iconClose.stayle.display='inline';
    }
}