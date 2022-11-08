let klbbutton = document.getElementById("kalimbaButton");
let homebutton = document.getElementById("homeButton");

let cssnavlinkklbhover = '.nav-item a:hover{color: #EFEFEF; text-shadow: 0 0 1px #E41655, 0 0 7px #E41655, 0 0 11px #E41655, 0 0 22px #E41655, 0 0 42px #E41655, 0 0 62px #E41655, 0 0 82px #E41655, 0 0 120px #E41655; }';
let cssbtnklb = '.btn-1,.btn-2,.btn-3{ background-image: linear-gradient(to right , #280F34 ,#E41655, #B30753); color: #BFF4ED;}';
let cssbtnklbhover = '.btn-1:hover,.btn-2:hover,.btn-3:hover{ background-position: 100% 0; box-shadow: 0 0px 30px 0 #E41655; color: #280F34;}';

let cssbtnhomehover = '.nav-item a:hover{ color: #EE4540; text-shadow: 0 0 1px #C72C41, 0 0 7px #C72C41, 0 0 11px #C72C41, 0 0 22px #C72C41, 0 0 42px #C72C41, 0 0 62px #C72C41, 0 0 82px #C72C41, 0 0 120px #C72C41;}';
let cssbtnhome = '.btn-1,.btn-2,.btn-3{ background-image: linear-gradient(to right , #2D132C ,#801336, #C72C41); color: #EE4540;}';
let cssnavlinkhomehover = '.btn-1:hover,.btn-2:hover,.btn-3:hover{ background-position: 100% 0; box-shadow: 0 0px 30px 0 #EE4540; color:EE4540;}';

let style = document.createElement('style');

//#region Kalimba
function kaLimba() {
    document.getElementById("kalimbapage").style.display = 'block';
    document.getElementsByClassName("nav")[0].style.backgroundColor= '#280F34';
    document.getElementsByClassName("nav")[0].style["boxShadow"]= '0 3px 10px #E41655';
    document.getElementsByClassName("nav-link")[0].style.color= '#BFF4ED';
    document.getElementsByClassName("nav-link")[1].style.color= '#BFF4ED';
    document.getElementsByClassName("nav-link")[2].style.color= '#BFF4ED';
    document.getElementsByClassName("nav-link")[3].style.color= '#BFF4ED';

    if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(cssnavlinkklbhover));
}

document.getElementsByClassName("nav-link")[0].appendChild(style);

    if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(cssbtnklb));
}

document.getElementsByClassName("nav-link")[0].appendChild(style);

    if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(cssbtnklbhover));
}

document.getElementsByClassName("nav-link")[0].appendChild(style);

};



klbbutton.addEventListener('click', kaLimba);


//#endregion Kalimba



//#region Home

function homeChange() {
    document.getElementById("kalimbapage").style.display = 'none';
    document.getElementsByClassName("nav")[0].style.backgroundColor= '#2D132C';
    document.getElementsByClassName("nav")[0].style["boxShadow"]= '0 3px 10px #801336';
    document.getElementsByClassName("nav-link")[0].style.color= '#C72C41';
    document.getElementsByClassName("nav-link")[1].style.color= '#C72C41';
    document.getElementsByClassName("nav-link")[2].style.color= '#C72C41';
    document.getElementsByClassName("nav-link")[3].style.color= '#C72C41';

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(cssnavlinkhomehover));
    }
    
    document.getElementsByClassName("nav-link")[0].appendChild(style);
    
        if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(cssbtnhome));
    }
    
    document.getElementsByClassName("nav-link")[0].appendChild(style);
    
        if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(cssbtnhomehover));
    }
    
    document.getElementsByClassName("nav-link")[0].appendChild(style);
    
};

function muteKlb() {
    const kalimbaAudio = document.getElementById("kalimbaAudio");
    const kalimbaAudio1 = document.getElementById("kalimbaAudio1");
    const kalimbaAudio2 = document.getElementById("kalimbaAudio2");
    const kalimbaAudio3 = document.getElementById("kalimbaAudio3");
    const kalimbaAudio4 = document.getElementById("kalimbaAudio4");
    const kalimbaAudio5 = document.getElementById("kalimbaAudio5");
    const kalimbaAudio6 = document.getElementById("kalimbaAudio6");
    const kalimbaAudio7 = document.getElementById("kalimbaAudio7");
    const kalimbaAudio8 = document.getElementById("kalimbaAudio8");
    const kalimbaAudio9 = document.getElementById("kalimbaAudio9");
    const kalimbaAudio10 = document.getElementById("kalimbaAudio10");
    const kalimbaAudio11 = document.getElementById("kalimbaAudio11");
    const kalimbaAudio12 = document.getElementById("kalimbaAudio12");
    const kalimbaAudio13 = document.getElementById("kalimbaAudio13");
    const kalimbaAudio14 = document.getElementById("kalimbaAudio14");
    const kalimbaAudio15 = document.getElementById("kalimbaAudio15");
    const kalimbaAudio16 = document.getElementById("kalimbaAudio16");


    kalimbaAudio.muted = true;
    kalimbaAudio1.muted = true;
    kalimbaAudio2.muted = true;
    kalimbaAudio3.muted = true;
    kalimbaAudio4.muted = true;
    kalimbaAudio5.muted = true;
    kalimbaAudio6.muted = true;
    kalimbaAudio7.muted = true;
    kalimbaAudio8.muted = true;
    kalimbaAudio9.muted = true;
    kalimbaAudio10.muted = true;
    kalimbaAudio11.muted = true;
    kalimbaAudio12.muted = true;
    kalimbaAudio13.muted = true;
    kalimbaAudio14.muted = true;
    kalimbaAudio15.muted = true;
    kalimbaAudio16.muted = true;
}

function unmuteKlb() {
    const kalimbaAudio = document.getElementById("kalimbaAudio");
    const kalimbaAudio1 = document.getElementById("kalimbaAudio1");
    const kalimbaAudio2 = document.getElementById("kalimbaAudio2");
    const kalimbaAudio3 = document.getElementById("kalimbaAudio3");
    const kalimbaAudio4 = document.getElementById("kalimbaAudio4");
    const kalimbaAudio5 = document.getElementById("kalimbaAudio5");
    const kalimbaAudio6 = document.getElementById("kalimbaAudio6");
    const kalimbaAudio7 = document.getElementById("kalimbaAudio7");
    const kalimbaAudio8 = document.getElementById("kalimbaAudio8");
    const kalimbaAudio9 = document.getElementById("kalimbaAudio9");
    const kalimbaAudio10 = document.getElementById("kalimbaAudio10");
    const kalimbaAudio11 = document.getElementById("kalimbaAudio11");
    const kalimbaAudio12 = document.getElementById("kalimbaAudio12");
    const kalimbaAudio13 = document.getElementById("kalimbaAudio13");
    const kalimbaAudio14 = document.getElementById("kalimbaAudio14");
    const kalimbaAudio15 = document.getElementById("kalimbaAudio15");
    const kalimbaAudio16 = document.getElementById("kalimbaAudio16");


    kalimbaAudio.muted = false;
    kalimbaAudio1.muted = false;
    kalimbaAudio2.muted = false;
    kalimbaAudio3.muted = false;
    kalimbaAudio4.muted = false;
    kalimbaAudio5.muted = false;
    kalimbaAudio6.muted = false;
    kalimbaAudio7.muted = false;
    kalimbaAudio8.muted = false;
    kalimbaAudio9.muted = false;
    kalimbaAudio10.muted = false;
    kalimbaAudio11.muted = false;
    kalimbaAudio12.muted = false;
    kalimbaAudio13.muted = false;
    kalimbaAudio14.muted = false;
    kalimbaAudio15.muted = false;
    kalimbaAudio16.muted = false;
}

window.addEventListener('load', muteKlb)
klbbutton.addEventListener('click', unmuteKlb);
homebutton.addEventListener('click', muteKlb);
homebutton.addEventListener('click', homeChange);


//#endregion Home