export default {
    sahipOlunanBeceriler(state){
        return state.beceriler;
    },
    beceriVarMi(state){
        return state.beceriler && state.beceriler.length > 0;
    }
};