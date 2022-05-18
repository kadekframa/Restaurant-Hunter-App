import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './components/app-bar';
import './components/footer-bar';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#main'),
    hero: document.querySelector('.hero'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });

/* navigation drawer */
// const menu = document.querySelector('#menu');
// const drawer = document.querySelector('#drawer');
// const main = document.querySelector('main');
// const hero = document.querySelector('.hero');
// const anchorAll = document.querySelectorAll('.nav-item-anchor');
// const anchorLast = document.querySelector('.after-this');

// menu.addEventListener('click', (event) => {
//     if (drawer.classList.contains('open') || drawer.classList.contains('open-focus')) {
//         drawer.classList.remove('open');
//         drawer.classList.remove('open-focus');
//     } else {
//         drawer.classList.add('open');
//     }
//     event.stopPropagation();
// });

// hero.addEventListener('click', () => {
//     drawer.classList.remove('open');
// });

// main.addEventListener('click', () => {
//     drawer.classList.remove('open');
// });

// anchorAll.forEach((elem) => {
//     elem.addEventListener('focus', () => {
//         drawer.classList.add('open-focus');
//     });

//     elem.addEventListener('click', () => {
//         drawer.classList.remove('open');
//         drawer.classList.remove('open-focus');
//     });
// });

// anchorLast.addEventListener('blur', () => {
//     drawer.classList.remove('open');
//     drawer.classList.remove('open-focus');
// });
