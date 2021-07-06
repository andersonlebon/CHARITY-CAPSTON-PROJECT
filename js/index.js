const humbuger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const socialMedia = document.querySelector('.socialMedia');
const navBar = document.querySelector('.nav-bar');
const navBarUl = document.querySelector('.nav-bar ul');
const navBarUlLi = document.querySelectorAll('.nav-bar ul li');
const cancelBtn = document.querySelector('.cancelBtn');
const html = document.querySelector('html');

// Mobile menu events

humbuger.addEventListener('click', () => {
  socialMedia.classList.remove('hide');
  navBar.classList.remove('hide');
  header.classList.add('mob-menu');
  navBar.classList.add('d-flex-column-center-start');
  navBarUl.classList.add('d-flex-column-start');
  html.classList.add('mob-flue');
});

cancelBtn.addEventListener('click', () => {
  socialMedia.classList.add('hide');
  navBar.classList.add('hide');
  header.classList.remove('mob-menu');
  navBar.classList.remove('d-flex-column-center-start');
  navBarUl.classList.remove('d-flex-column-start');
  html.classList.remove('mob-flue');
});

navBarUlLi.forEach((li) => {
  li.addEventListener('click', () => {
    socialMedia.classList.add('hide');
    navBar.classList.add('hide');
    header.classList.remove('mob-menu');
    navBar.classList.remove('d-flex-column-center-start');
    navBarUl.classList.remove('d-flex-column-start');
    html.classList.remove('mob-flue');
  });
});
