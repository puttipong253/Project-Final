import axios from '../axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'

import store from './vuex';

const state = {
    rodList:[],
    rodDialog:false,
    rodForm:{},
    rod_image:'',
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {

async rodDialogSwitch(context,params){
    if(params == true){
        state.rodDialog = true;
    }else{
        state.rodForm = {};
 
        state.rodDialog = false;
    }
},

async getRodList() {
let load = await axios.get('/api/rod')
    .then((r) => {
        state.rodList = r.data;
    }).catch((e) => {
        console.log(e);
    });
  
    },

    async getRodOnce(context,params) {
        let load = await axios.get('/api/rod/'+params)
            .then((r) => {
                state.rodForm = r.data;
                 state.rodDialog = true;
            }).catch((e) => {
                console.log(e);
            });
          
    },
        

    async storeRod() {
            if(!state.rodForm.id){
               await actions.insertRod();
            }else{
                await actions.updateRod();
            }
            actions.getRodList();
     },

    async insertRod(){
        let load = await axios.post('/api/rod',state.rodForm)
        .then((r) => {
            state.rodDialog = false;
            store.dispatch('alert/alSuccess','Sucessfully'); 
            location.reload();
        }).catch((e) => {
            store.dispatch('alert/alError','Incorrect');  
            console.log(e);
        });
       
    },

    async updateRod(){
        let load = await axios.put('/api/rod/'+state.rodForm.id,state.rodForm)
        .then((r) => {
            state.rodDialog = false;
            store.dispatch('alert/alSuccess','Sucessfully'); 
        }).catch((e) => {
            store.dispatch('alert/alError','Incorrect');  
            console.log(e);
        });
       
    },

    async deleteRod(context,params){

        let check = confirm("Delete");
        if(check){
        let load = await axios.delete('/api/rod/'+params)
        .then((r) => { 
            store.dispatch('alert/alSuccess','Sucessfully'); 
          }).catch((e) => {
            store.dispatch('alert/alError','Incorrect');  
              console.log(e);
          });}
        actions.getRodList();
       
    }



 
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }