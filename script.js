console.log('we are on it!');

const box = document.querySelector('.box');

box.addEventListener('click', () => {
    box.classList.add('active');
    setTimeout(() => {
        box.classList.remove('active');
    }, 800);
});
