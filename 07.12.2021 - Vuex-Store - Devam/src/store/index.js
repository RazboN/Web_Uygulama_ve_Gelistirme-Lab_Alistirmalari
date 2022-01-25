import { createStore } from "vuex";

import becerilerModule from './modules/beceri/index.js';


const store = createStore({
    modules: {
        beceriler: becerilerModule,
    },
    state() {
        return {};
    }
});

export default store;