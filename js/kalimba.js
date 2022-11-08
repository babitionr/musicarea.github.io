const keys = document.querySelectorAll(".key"),
    hints = document.querySelectorAll(".hints");

function playNote(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if (!key) return;
        sound.currentTime = 0;
        sound.play();
        key.classList.add("key-klb");
}

function removeTransition(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        key.classList.remove("key-klb");
  }

window.addEventListener("keyup", removeTransition);
window.addEventListener("keydown", playNote);


//option
let sildeklboptionIndex = 1;
showklbSlides(sildeklboptionIndex);

function plusSlidesklb (n) {
    showklbSlides(sildeklboptionIndex += n);
}

function showklbSlides (n) {
    let i;
    let slideklboptions = document.getElementsByClassName("slide-icon-klb");

    if (n > slideklboptions.length) {sildeklboptionIndex = 1}
    if (n < 1) {sildeklboptionIndex = slideklboptions.length}
    for (i = 0; i < slideklboptions.length; i++) {
        slideklboptions[i].style.display = "none";

    }
    slideklboptions[sildeklboptionIndex-1].style.display = "block";
}

//expand
let dropdownKlb = document.getElementById("dropdown-klb");
let menuDropdown = document.getElementById("listoption-klb");

function dropdownoptionKlb() {
    if (menuDropdown.style.display === "none") {
        menuDropdown.style.display = "block";
      } else {
        menuDropdown.style.display = "none";
      }
  };

dropdownKlb.addEventListener("click", dropdownoptionKlb);


//changedisplay
