const Slide1 = () => import('./slides/Slide1.vue');
const Slide2 = () => import('./slides/Slide2.vue');
const Slide3 = () => import('./slides/Slide3.vue');
const Slide4 = () => import('./slides/Slide4.vue');
const Slide5 = () => import('./slides/Slide5.vue');
const Slide6 = () => import('./slides/Slide6.vue');
const Slide7 = () => import('./slides/Slide7.vue');
const Slide8 = () => import('./slides/Slide8.vue');

export const routes = [
    { path: '/1', component: Slide1, name: 1 },
    { path: '/2', component: Slide2, name: 2 },
    { path: '/3', component: Slide3, name: 3 },
    { path: '/4', component: Slide4, name: 4 },
    { path: '/5', component: Slide5, name: 5 },
    { path: '/6', component: Slide6, name: 6 },
    { path: '/7', component: Slide7, name: 7 },
    { path: '/8', component: Slide8, name: 8 },
    { path: '*', redirect: {name: 1}},
];