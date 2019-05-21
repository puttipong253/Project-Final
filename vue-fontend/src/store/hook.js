import axios from '../axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'

import store from './vuex';

const state = {
    hookList:[],
    hookFilterList:[],
    hookDialog:false,
    hookForm:{    },
    hookSearchSize:""
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
       
    },
    async searchingHook(context,params){
        let load = await axios.get('/api/searchHook?search='+params+ "&size=" + state.hookSearchSize )
    .then((r) => {
        state.hookFilterList = r.data;
    }).catch((e) => {
        console.log(e);
    });
},
    async searchingHook2(context,params){
        let load = await axios.get('/api/searchHook?search='+params )
    .then((r) => {
        state.hookList = r.data;
    }).catch((e) => {
        console.log(e);
    });
},
async filterHook(context,params) {
    await actions.getHookList();
    let output = []
    state.hookSearchSize = params;
    for (let i = 0; i < state.hookList.length; i++) {
        if (params <= 20 && state.hookList[i].hook_size <= 10) {
            output.push(state.hookList[i])
        } else if ((params > 20 && params <= 40) && (state.hookList[i].hook_size > 10 && state.hookList[i].hook_size <= 15)) {
            output.push(state.hookList[i])
        } else if ((params > 40) && (state.hookList[i].hook_size > 15)) {
            output.push(state.hookList[i])
        }
    }
    state.hookFilterList = output; 
}



 
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }