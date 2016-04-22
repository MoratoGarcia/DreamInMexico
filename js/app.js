!function() {
  'use strict';

  const button = document.querySelector('#donate-button');
  const modal = document.querySelector('.modal');
  const close = document.querySelector('#close');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
  });

  close.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
  });
}();
function() {
  $(".button-collapse").sideNav();
}();
