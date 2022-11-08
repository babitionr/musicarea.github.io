//Change Tab
function openTab(event, tabName) {
    let i, tabcontent, tabs;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tabs = document.getElementsByClassName("tabs");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}



//Image slide show

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("imageshow");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    for (i = 0; i < slides.length; i++) 
      slides[slideIndex-1].style.display = "block";
}


//Video slide show

let videoIndex = 1;
showvideoSlides(videoIndex);

function plusvideoSlides(a) {
    showvideoSlides(videoIndex += a);
}

function currentvideoSlide(a) {
    showvideoSlides(videoIndex = a);
}

function showvideoSlides(a) {
    let i;
    let slidevideos = document.getElementsByClassName("videoshow");
    if (a > slidevideos.length) {videoIndex = 1}    
    if (a < 1) {videoIndex = slidevideos.length}
    for (i = 0; i < slidevideos.length; i++) {
        slidevideos[i].style.display = "none";  
    }
    for (i = 0; i < slidevideos.length; i++) 
    slidevideos[videoIndex-1].style.display = "block";
}



