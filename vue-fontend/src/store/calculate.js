import axios from "../axios";
import _ from "lodash";
import { make } from "vuex-pathify"; 

const state = {
    e1:0,
    sizeReel:0,
    sizeLine:0,
    rodPower:0,
    addHook:{},
    addLine:{},
    addReel:{},
    addRod:{},
    addData:[],
    rangeSpaec:'',
    datacollection: null
};
const getters = {};

const mutations = make.mutations(state);

const actions = {

  
  async fillData() {
    state.datacollection = {
        labels: ['Rod', 'Reel', 'Line'],
        datasets: [
          {
            label: '# Score of Strength',
            data: [state.rodPower/9*100,state.sizeReel/10000*100,state.sizeLine/50*100, 1, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1

        },
      ]
    }
},

  async checkSpec(context,params){
    if (params == 0) {
      state.rangeSpaec = 'NP';
    }
    else if (params == 1) {
      state.rangeSpaec = 'UL';
    }
    else if (params == 2) {
      state.rangeSpaec = 'L';
    }
    else if (params == 3) {
      state.rangeSpaec = 'M';
    }
    else if (params == 4) {
      state.rangeSpaec = 'ML';
    }
    else if (params == 5){
      state.rangeSpaec = 'MH';
    }
    else if (params == 6) {
      state.rangeSpaec = 'H';
    }
    else if (params == 7) {
      state.rangeSpaec = 'EH';
    }
    else if (params == 8) {
      state.rangeSpaec = 'UH';
    }
  }, 

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
