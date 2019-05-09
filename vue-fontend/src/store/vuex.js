import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'; 


import hook from './hook';
import line from './line';
import rod from './rod';
import reel from './reel';
import alert from './alert';
import calculate from './calculate';
import user from './user';

Vue.use(Vuex)


const modules = {
    user:user,
    hook:hook,
    line:line,
    rod:rod,
    reel:reel,
    alert:alert,
    calculate:calculate,
 
}

export default new Vuex.Store({
    plugins: [pathify.plugin],
    modules: modules, 
})