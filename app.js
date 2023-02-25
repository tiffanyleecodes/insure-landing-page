const open = document.querySelector('.menu-btn');
const close = document.querySelector('.close');
const menu = document.querySelector('.mobile-menu');

open.addEventListener('click', function(){
    if (menu.style.display === 'block') {
       menu.style.display = 'none';
    }else {
        menu.style.display = 'block'
    }
});

close.addEventListener('click', function(){
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
     }else {
         menu.style.display = 'block'
     }
})