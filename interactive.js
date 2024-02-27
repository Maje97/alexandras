const droplinks = document.querySelector('.droplinks');
let x = 1;

function mobileMenu () {
    x++;

    if (x == 1) {
        droplinks.innerHTML =  `<a href="index.html" target="_self">Hem</a>
        <a href="stensaxpase.html" target="_self">Sten Sax Påse</a>
        <a href="adoptapet.html" target="_self">Kattspel</a>
        <a href="iframesvideo.html" target="_self">Videospelare</a>`;
    } else {
        droplinks.innerHTML = '';
        x = 0;
    }
}

function eraseMenu () {
    droplinks.innerHTML = '';
}