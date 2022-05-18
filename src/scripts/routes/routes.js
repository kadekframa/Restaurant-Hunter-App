import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Home from '../views/pages/home';

const routes = {
    '/': Home, // default page.
    '/home': Home,
    '/favorite': Favorite,
    '/detail/:id': Detail,
};

export default routes;
