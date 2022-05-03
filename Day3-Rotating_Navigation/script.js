const openNav = document.getElementById('open');
const closeNav = document.getElementById('close');
const contentBlock = document.querySelector('.container');


openNav.addEventListener('click', () => {
    contentBlock.classList.add('show-nav');
});

closeNav.addEventListener('click', () => {
    contentBlock.classList.remove('show-nav');
});