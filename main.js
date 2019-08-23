'use strict';

window.onscroll = (ev) => {
    if ((window.innerHeight + window.scrollY + 5) >= document.body.offsetHeight) {
        console.log("scrollattu ihan alas");
        document.querySelector(".footer").style.opacity = "1";
        document.querySelector(".footer").style.transition = "opacity 500ms";
    }

    if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
        document.querySelector(".footer").style.opacity = "0";
        document.querySelector(".footer").style.transition = "opacity 500ms";
    }

    if (document.body.offsetHeight <= window.innerHeight + window.scrollY + 5) {
        document.querySelector(".footer").style.opacity = "1";
        document.querySelector(".footer").style.transition = "opacity 500ms";

    }
};

window.onload = (ev) => {
    if (document.body.offsetHeight <= window.innerHeight) {
        document.querySelector(".footer").style.opacity = "1";
        document.querySelector(".footer").style.transition = "opacity 500ms";
    }
}