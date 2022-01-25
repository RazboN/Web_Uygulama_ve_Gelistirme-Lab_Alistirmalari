import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './pages/NotFound.vue';
import SoruBir from './pages/Sorular/SoruEkle.vue';
import SoruIki from './pages/Sorular/SorulariListele.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/soru1', component: SoruBir },
        { path: '/soru2', component: SoruIki },
        { path: '/:notFound(.*)', component: NotFound },
    ]
});

export default router;