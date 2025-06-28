setTimeout(() => {
  document.getElementById('splash').style.display = 'none';
  document.getElementById('app').style.display = 'block';
}, 3000);

function board(btn) {
  const li = btn.parentElement;
  btn.remove();
  document.getElementById('onboard').appendChild(li);
}

let icon = document.querySelector(".menu_icon");

icon.addEventListener("click", () => {
  icon.classList.toggle("clicked");
});

var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var lineOne = document.querySelector('nav .menu-btn .line--1');
var lineTwo = document.querySelector('nav .menu-btn .line--2');
var lineThree = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
})