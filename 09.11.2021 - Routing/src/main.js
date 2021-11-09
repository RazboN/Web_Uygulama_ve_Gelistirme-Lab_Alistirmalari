import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const webUygRouter = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/takimlar' }, //component: TeamsList 
        { path: '/kullanicilar', component: UsersList },
        { path: '/takimlar', component: TeamsList },
        { path: '/takimlar/:takimId', component: TeamMembers, props: true }
    ]
});

const app = createApp(App)

app.use(webUygRouter);

app.mount('#app');
