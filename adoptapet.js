const canvas = document.getElementById('adoptpetcanvas');
const ctx = canvas.getContext('2d');
const catInput = document.getElementById('choosepet');
const bakgrundInput = document.getElementById('bakgrund');
const toyInput = document.getElementById('toy');
const bedInput = document.getElementById('bed');

const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 500;

const catSprites = new Image ();
catSprites.src = 'bilder-aap/catsheet.png';
const bedSprites = new Image ();
bedSprites.src = 'bilder-aap/bedsheet.png';
const toySprites = new Image ();
toySprites.src = 'bilder-aap/toysheet.png';

document.getElementById('resetbttn').addEventListener("click", function(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    catInput.value = '';
    bakgrundInput.value = '';
    toyInput.value = '';
    bedInput.value = '';
    canvas.style.backgroundColor = "white";});

function ChangeCat (value) {
    switch (value) {
        case 'Vit': ctx.drawImage(catSprites, 0 * 200, 0, 200, 300, 175, 100, 200, 300);
            break;
        case 'Röd': ctx.drawImage(catSprites, 1 * 200, 0, 200, 300, 175, 100, 200, 300);
            break;
        case 'Sköldpadd': ctx.drawImage(catSprites, 2 * 200, 0, 200, 300, 175, 100, 200, 300);
            break;
    }
}

function ChangeBed (value) {
    switch (value) {
        case 'Låda': ctx.drawImage(bedSprites, 0 * 200, 0, 200, 100, 175, 300, 200, 100);
            break;
        case 'Korg': ctx.drawImage(bedSprites, 1 * 200, 0, 200, 100, 175, 300, 200, 100);
            break;
        case 'Kudde': ctx.drawImage(bedSprites, 2 * 200, 0, 200, 100, 175, 300, 200, 100);
            break;
    }
}

function ChangeToy (value) {
    switch (value) {
        case 'Fjäril': ctx.drawImage(toySprites, 0 * 100, 0, 100, 200, 50, 200, 100, 200);
            break;
        case 'Mus': ctx.drawImage(toySprites, 1 * 100, 0, 100, 200, 50, 200, 100, 200);
            break;
        case 'Boll': ctx.drawImage(toySprites, 2 * 100, 0, 100, 200, 50, 200, 100, 200);
            break;
    }
}

function ChangeBakgrund (value) {
    switch (value) {
        case 'Rosa': canvas.style.backgroundColor = "pink";
            break;
        case 'Blå': canvas.style.backgroundColor = "lightblue";
            break;
        case 'Grön': canvas.style.backgroundColor = "lightgreen";
            break;
    }
}