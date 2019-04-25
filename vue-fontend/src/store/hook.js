import axios from '../axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'

import store from './vuex';

const state = {
    hookList:[],
    hookDialog:false,
    hookForm:{    },
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {

async hookDialogSwitch(context,params){
    if(params == true){
        state.hookDialog = true;
        
        
    }else{
        state.hookForm = {};     
        state.hookDialog = false;
        
    }
    
},

async getHookList() {
let load = await axios.get('/api/hook')
    .then((r) => {
        state.hookList = r.data;
    }).catch((e) => {
        console.log(e);
    });
  
    },

    async getHookOnce(context,params) {
        let load = await axios.get('/api/hook/'+params)
            .then((r) => {
                state.hookForm = r.data;
                 state.hookDialog = true;
            }).catch((e) => {
                console.log(e);
            });
          
    },
        

    async storeHook() {
            if(!state.hookForm.id){
               await actions.insertHook();
            }else{
                await actions.updateHook();
            }
            actions.getHookList();
     },

    async insertHook(){
        let load = await axios.post('/api/hook',state.hookForm)
        .then((r) => {
            state.hookDialog = false;
            store.dispatch('alert/alSuccess','Sucessfully'); 
            location.reload();
        }).catch((e) => {
            store.dispatch('alert/alError','Incorrect');  
            console.log(e);
        });
       
    },

    async updateHook(){
        let load = await axios.put('/api/hook/'+state.hookForm.id,state.hookForm)
        .then((r) => {
            state.hookDialog = false;
            store.dispatch('alert/alSuccess','Sucessfully'); 
        }).catch((e) => {
            store.dispatch('alert/alError','Incorrect');  
            console.log(e);
        });
       
    },

    async deleteHook(context,params){

        let check = confirm("Delete");
        if(check){
        let load = await axios.delete('/api/hook/'+params)
        .then((r) => { 
            store.dispatch('alert/alSuccess','Sucessfully'); 
          }).catch((e) => {
            store.dispatch('alert/alError','Incorrect');  
              console.log(e);
          });}
        actions.getHookList();
       
    }



 
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }