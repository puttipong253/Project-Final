import axios from "axios";
import _ from "lodash";
import { make } from "vuex-pathify";
const state = {
    addHook:{},
    addLine:{},
    addReel:{},
    addRod:{}
};
const getters = {};

const mutations = make.mutations(state);

const actions = {
 
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
