import axios from "../axios";
import _ from "lodash";
import { make } from "vuex-pathify"; 

const state = {
    e1:0,
    typeRod: '',
    sizeReel:0,
    sizeLine: 0,
    rodScore:0,
    addHook:{},
    addLine:{},
    addReel:{},
    addRod:{},
    addData:[],
    rangeSpaec:'Medium (M)',
    datacollection: null
};
const getters = {};

const mutations = make.mutations(state);

const actions = {

  async fillData() {
    state.datacollection = {
        labels: ['Line', 'Reel', 'Rod'],
        datasets: [{
            label: '# Score of Strength',
            data: [state.sizeLine,state.sizeReel/100,state.addRod.rod_power*10 , 1, 100],
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
        }]
    }
},

  async checkSpec(context,params){
    if (params == 2) {
      state.rangeSpaec = "Ultra-Light (UL)";
    }
    else if (params == 3) {
      state.rangeSpaec = "Light (L)";
    }
    else if (params == 4) {
      state.rangeSpaec = "Medium (M)";
    }
    else if (params == 5) {
      state.rangeSpaec = "Medium-Light (ML)";
    }
    else if (params == 6) {
      state.rangeSpaec = "Medium-Heavy (MH)";
    }
    else if (params == 7) {
      state.rangeSpaec = "Heavy (H)";
    }
    else if (params == 8) {
      state.rangeSpaec = "Extra-Heavy (EH)";
    }
    else if (params == 9) {
      state.rangeSpaec = "Ultra-Heavy (UH)";
    }
  },
 
  async storeSpec(context,params){
    let load = await axios.post('/api/spec',params)
    .then((r) => {
       alert('Save Data Successfuly');
    }).catch((e) => {
        console.log(e);
    }); 
  },

  async showSpec(context,params){
    let id =0;
    await axios.get('/api/user')
   .then((r) => {
    id = r.data.user.id;
   }).catch((e) => { 

   });

    let load = await axios.get('/api/spec/'+id)
    .then((r) => {
        state.addData = r.data;
    }).catch((e) => {
        console.log(e);
    }); 

    
  }

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
