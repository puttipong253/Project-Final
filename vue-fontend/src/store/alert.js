import axios from 'axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'
const state = {
    alertModel:false,
    alertText:'',
    alertColor:'blue',
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {
    
    async alSuccess(context,params){
        state.alertModel  = true;
        state.alertText  = params;
        state.alertColor  = 'blue';
    },
    async alError(context,params){
        state.alertModel  = true;
        state.alertText  = params;
        state.alertColor  = 'red';
    }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }