

let menu = document.getElementById('menu');
let open_men = document.getElementById('open_men');
let close_clo = document.getElementById('close_clo');

open_men.addEventListener('click', toggleMenu);
close_clo.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('show-menu');

}