const droplinks = document.querySelector('.droplinks');

function mobileMenu () {
    droplinks.innerHTML =  `<a href="index.html" target="_self">Hem</a>
    <a href="stensaxpase.html" target="_self">Sten Sax Påse</a>`;
}

function eraseMenu () {
    droplinks.innerHTML = '';
}