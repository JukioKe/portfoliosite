'use strict'

let nightModeToggle = document.getElementById('night-mode-toggle');
let state = window.localStorage.getItem('nightModeState');

let changeMode = () => {
  state = window.localStorage.getItem('nightModeState');
  if (state == 'false' || state == null) {
    nightModeOn();
  } else if (state == 'true') {
    nightModeOff();
  }
}

let nightModeOn = () => {
  document.querySelector('body').style.backgroundColor = '#24252a';
  document.querySelector('h2').style.color = '#7998b4';
  document.querySelector('.bg-light').style.backgroundColor = '#264967';
  document.querySelector('a').style.color = '#ffffff';
  document.querySelector('#middle1').style.color = '#ffffff';
  document.querySelector('#middle2').style.color = '#ffffff';
  document.querySelector('#navbarDropdown').style.color = '#ffffff';
  document.querySelector('#first').style.color = '#ffffff';
  document.querySelector('.btn-outline-success').style.color = 'rgb(185, 185, 185)';
  document.querySelector('.btn-outline-success').style.borderColor = 'rgb(185, 185, 185)';
 
  let cards = document.querySelectorAll('.card');
  [].forEach.call(cards, (card)=>{
    card.style.backgroundColor = 'rgb(49, 49, 53)';
    card.style.color = '#e2e2e2';
   });

  window.localStorage.setItem('nightModeState', true);
  state = true;
}

let nightModeOff = () => {
  document.querySelector('body').style.backgroundColor = '#ffffff';
  document.querySelector('h2').style.color = '#212529';
  document.querySelector('.bg-light').style.backgroundColor = '#7898b3';
  document.querySelector('a').style.color = '#212529';
  document.querySelector('#middle1').style.color = '#212529';
  document.querySelector('#middle2').style.color = '#212529';
  document.querySelector('#navbarDropdown').style.color = '#212529';
  document.querySelector('#first').style.color = '#212529';
  document.querySelector('.btn-outline-success').style.color = "#464f5a";
  document.querySelector('.btn-outline-success').style.borderColor = "#5a5b67";

  let cards = document.querySelectorAll('.card');
  [].forEach.call(cards, (card)=>{
    card.style.backgroundColor = '#eaeaea';
    card.style.color = '#212529';
   });
  
  window.localStorage.setItem('nightModeState', false);
  state = false;
}

let updateModeOnload = () => {
  if (state == 'false' || state == null) {
    nightModeOff();
  } else if (state == 'true') {
    nightModeOn();
  }
}

nightModeToggle.addEventListener('click', changeMode);
window.addEventListener('load', updateModeOnload);