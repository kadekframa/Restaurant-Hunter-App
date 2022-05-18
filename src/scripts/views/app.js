import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
    constructor({ button, drawer, content, hero }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;
        this._hero = hero;

        this._initialAppShell();
    }

    _initialAppShell() {
        // Initial Drawer.
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
            hero: this._hero,
        });

        // kita bisa menginisiasikan komponen lain bila ada.
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();

        const skipToContentElement = document.querySelector('.skip-to-konten');
        skipToContentElement.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#main').focus();
    });
    }
};

export default App;
