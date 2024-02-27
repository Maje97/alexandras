const iframe = document.getElementById('iframejs');
const iframediv = document.getElementById('iframecontainer');

const selectList = {
    name: [
                "Hazbin Hotel - Hell is Forever", 
                "Hazbin Hotel - Poison", 
                "Hazbin Hotel - Hells Greatest Dad", 
                "Hazbin Hotel - More Than Anything", 
                "Hazbin Hotel - Stayed Gone", 
                "Helluva Boss - 2 Minutes Notice",
                "Helluva Boss - Crooked",
                "Helluva Boss - Just Look My Way",
                "Helluva Boss - Juggling iz Cool"
            ],
    links: [
                "https://www.youtube.com/embed/kMy8W0j-Slw?si=-SqomYuKqnILSmQq",
                "https://www.youtube.com/embed/5adOotIvAps?si=fst3TNLtn_zJdMs9",
                "https://www.youtube.com/embed/jNUTxvki_d0?si=7NH06AdnEGqslfam",
                "https://www.youtube.com/embed/QzMHmnDwOz8?si=UXRAB2lwx1cXFZp4",
                "https://www.youtube.com/embed/Ai4eh_OCxvw?si=7F8wFxaBfuGBKvCn",
                "https://www.youtube.com/embed/s9HyDRpJrsw?si=2Y0ANTUN42LRcmm5",
                "https://www.youtube.com/embed/pZiNw3NvdhU?si=kjJsNomkOWalNPx3",
                "https://www.youtube.com/embed/rATbtwj1qls?si=Rh2y0Kg7b4zlIJDl",
                "https://www.youtube.com/embed/rCJeOgrVqJA?si=v-ej4N3yOUbN7r2s"
            ]
}

function menuButton () {
    iframe.src = "";
    createSelection();
}


function createSelection (){
    const selection = document.createElement('div');
    selection.style.gridArea = "3/2/4/3";
    selection.style.width = "560px";
    selection.style.height = "315px";
    selection.style.display = "flex";
    selection.style.flexDirection = "column";
    selection.style.alignItems = "center";
    selection.style.justifyContent = "space-around";

    for(let i = 0; i < selectList.name.length; i++){
        const videolink = document.createElement('button');
        const videonamn = document.createTextNode(`${selectList.name[i]}`);
        videolink.appendChild(videonamn);
        videolink.style.backgroundColor = "black";
        videolink.style.color = "white";
        videolink.style.borderColor = "white";
        videolink.style.fontSize = "large";
        videolink.style.cursor = "pointer";
        videolink.onclick = function(){
            iframe.src = selectList.links[i];
            selection.remove();
        }
        selection.appendChild(videolink);
    }

    iframediv.appendChild(selection);
}

createSelection();
