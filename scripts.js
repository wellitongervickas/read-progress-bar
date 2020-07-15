const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

const articleElement = document.querySelector('#text-article');
const barElement = document.querySelector('#progress-bar')

document.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const articleContent = articleElement.offsetHeight;
    const offset = Math.round(header.offsetHeight + footer.offsetHeight);
    const percentage = Math.round(currentScroll * 100 / (articleContent - offset));
    
    barElement.style.width = `${percentage}%`;
});