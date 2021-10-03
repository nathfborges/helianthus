import Home from './components/home.vue';
import Id from './components/id.vue';
import Graphic from './components/graphic.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/continue', component: Id },
    { path: '/graphic', component: Graphic }
];