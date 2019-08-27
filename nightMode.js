'use strict'

let nightModeToggle = document.getElementById('night-mode-toggle');
let state = window.localStorage.getItem('nightModeState');

let changeMode = () => {
    state = window.localStorage.getItem('nightModeState');

    if (state == 'false' || state == null) {
        document.querySelector('body').style.backgroundColor = '#24252a';
        document.querySelector('h2').style.color = '#7998b4';
        document.querySelector('.bg-light').style.backgroundColor = '#264967';
        document.querySelector('a').style.color = '#ffffff';
        document.querySelector('#middle1').style.color = '#ffffff';
        document.querySelector('#middle2').style.color = '#ffffff';
        document.querySelector('#navbarDropdown').style.color = '#ffffff';
        document.querySelector('#first').style.color = '#ffffff';
        window.localStorage.setItem('nightModeState', true);
    } else if (state == 'true') {
        document.querySelector('body').style.backgroundColor = '#ffffff';
        document.querySelector('h2').style.color = '#212529';
        document.querySelector('.bg-light').style.backgroundColor = '#7898b3';
        document.querySelector('a').style.color = '#212529';
        document.querySelector('#middle1').style.color = '#212529';
        document.querySelector('#middle2').style.color = '#212529';
        document.querySelector('#navbarDropdown').style.color = '#212529';
        document.querySelector('#first').style.color = '#212529';
        window.localStorage.setItem('nightModeState', false);
    }

    console.log("night mode state:", state);
}
console.log("night mode state:", state);


nightModeToggle.addEventListener('click', changeMode);
window.addEventListener('onload', changeMode);