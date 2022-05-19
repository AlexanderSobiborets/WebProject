const demo = () => 'Webpack Boilerplate v5.12.1 - SASS/PostCSS, ES6/7, browser sync, source code listing and more.';

// eslint-disable-next-line no-console
console.log(demo());

const overlay = document.querySelector('div.section-about__video-overlay');
if (overlay) {
    overlay.addEventListener('click', () => {
        const video = document.querySelector('video.section-about__video-player'); 
        overlay.style.visibility = 'none';
        video.play();
    });
}