const droplinks = document.querySelector('.droplinks');

function mobileMenu () {
    droplinks.innerHTML =  `<a href="index.html" target="_self">Hem</a>
    <a href="stensaxpase.html" target="_self">Sten Sax Påse</a>
    <a href="adoptapet.html" target="_self">Kattspel</a>
    <a href="iframesvideo.html" target="_self">Videospelare</a>`;
}

function eraseMenu () {
    droplinks.innerHTML = '';
}