let val ='';
let speletsval ='';
let randomval ='';
let resultat ='';

let score = {
    vinster: 0,
    forluster: 0,
    oavgjort: 0,
}


function startaSpel(val) {
    let randomval = Math.random()

    if (randomval < 0.33){
        speletsval = 'sten';
    } else if(randomval > 0.33 && randomval <= 0.66){
        speletsval = 'sax';
    } else {
        speletsval = 'påse';
    }

    console.log('Du valde:', val);
    console.log('Spelet valde:', speletsval);

    switch(val){
        case 'sten':
            switch(speletsval){
                case 'sten': resultat='Oavgjort!'; score.oavgjort+=1; break;
                case 'sax': resultat='Du vann!'; score.vinster+=1; break;
                case 'påse': resultat='Du förlorade!'; score.forluster+=1; break;
            }
        break;
        case 'sax':
            switch(speletsval){
                case 'sten': resultat='Du förlorade!'; score.forluster+=1; break;
                case 'sax': resultat='Oavgjort!'; score.oavgjort+=1; break;
                case 'påse': resultat='Du vann!'; score.vinster+=1; break;
            }
        break;
        case 'påse':
            switch(speletsval){
                case 'sten': resultat='Du vann!'; score.vinster+=1; break;
                case 'sax': resultat='Du förlorade!'; score.forluster+=1; break;
                case 'påse': resultat='Oavgjort!'; score.oavgjort+=1; break;
            }
        break;
    }
    console.log(score);

    document.querySelector('.js-resultat')
        .innerHTML = resultat;
    
    document.querySelector('.js-moves')
        .innerHTML = `Du valde ${val}, spelet valde ${speletsval}.`;
    
    document.querySelector('.js-score')
        .innerHTML = `Vinster: ${score.vinster}  Förluster: ${score.forluster}  Oavgjort: ${score.oavgjort}`;
}

function aterstall() {
    score = {
        vinster: 0,
        forluster: 0,
        oavgjort: 0,
    }
    document.querySelector('.js-score')
        .innerHTML = `Vinster: ${score.vinster}  Förluster: ${score.forluster}  Oavgjort: ${score.oavgjort}`;
}