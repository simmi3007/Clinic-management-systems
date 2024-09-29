const registerBtn = document.getElementById('registerBtn');
const overlay = document.getElementById('overlay');
const content = document.querySelector('.content');

registerBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    content.classList.add('blur');
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.add('hidden');
        content.classList.remove('blur');
    }
});