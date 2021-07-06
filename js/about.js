const donator = document.querySelector('.donator');
const donatorText = document.querySelector('.text-donator');

donator.addEventListener('mouseenter', () => {
  donatorText.classList.add('anim-donator');
});

donator.addEventListener('mouseleave', () => {
  donatorText.classList.remove('anim-donator');
});
