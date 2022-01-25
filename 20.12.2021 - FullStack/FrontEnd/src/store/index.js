import { createStore } from 'vuex'

import OgrencilerModulu from './Moduller/Ogrenciler/index.js';

const store = createStore({
  modules: {
    storeOgrenci: OgrencilerModulu,
  },
  state() {
    return {};
  }
});

export default store;
