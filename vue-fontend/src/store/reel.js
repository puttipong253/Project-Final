import axios from '../axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'

import store from './vuex';

const state = {
    reelList:[],
    reelDialog:false,
    reelForm:{},
    reel_image:'',
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {

async reelDialogSwitch(context,params){
    if(params == true){
        state.reelDialog = true;
    }else{
        state.reelForm = {};
    
        state.reelDialog = false;
    }
},

async getReelList() {
let load = await axios.get('/api/reel')
    .then((r) => {
        state.reelList = r.data;
    }).catch((e) => {
        console.log(e);
    });
  
    },

    async getReelOnce(context,params) {
        let load = await axios.get('/api/reel/'+params)
            .then((r) => {
                state.reelForm = r.data;
                 state.reelDialog = true;
            }).catch((e) => {
                console.log(e);
            });
          
    },
        

    async storeReel() {
            if(!state.reelForm.id){
               await actions.insertReel();
            }else{
                await actions.updateReel();
            }
            actions.getReelList();
     },

    async insertReel(){
        let load = await axios.post('/api/reel',state.reelForm)
        .then((r) => {
            state.reelDialog = false;
            store.dispatch('alert/alSuccess','Sucessfully'); 
            location.reload();
        }).catch((e) => {
            store.dispatch('alert/alError','Incorrect'); 
            console.log(e);
        });
       
    },

    async updateReel(){
        let load = await axios.put('/api/reel/'+state.reelForm.id,state.reelForm)
        .then((r) => {
            state.reelDialog = false;
            store.dispatch('alert/alSuccess','Sucessfully'); 
        }).catch((e) => {
            store.dispatch('alert/alError','Incorrect');  
            console.log(e);
        });
       
    },

    async deleteReel(context,params){

        let check = confirm("Delete");
        if(check){
        let load = await axios.delete('/api/reel/'+params)
        .then((r) => { 
            store.dispatch('alert/alSuccess','Sucessfully'); 
          }).catch((e) => {
            store.dispatch('alert/alError','Incorrect');  
              console.log(e);
          });}
        actions.getReelList();
       
    }



 
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }