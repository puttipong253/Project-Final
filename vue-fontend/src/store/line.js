import axios from '../axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'

import store from './vuex';

const state = {
    lineList:[],
    lineDialog:false,
    lineForm:{},
    
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {

async lineDialogSwitch(context,params){
    if(params == true){
        state.lineDialog = true;
    }else{
        state.lineForm = {};
       
        state.lineDialog = false;
    }
},

async getLineList() {
let load = await axios.get('/api/line')
    .then((r) => {
        state.lineList = r.data;
    }).catch((e) => {
        console.log(e);
    });
  
    },

    async getLineOnce(context,params) {
        let load = await axios.get('/api/line/'+params)
            .then((r) => {
                state.lineForm = r.data;
                state.lineDialog = true;
                
            }).catch((e) => {
                console.log(e);
            });
           
    },
        

    async storeLine() {
            if(!state.lineForm.id){
               await actions.insertLine();
            }else{
                await actions.updateLine();
                
            }
            actions.getLineList();
     },

    async insertLine(){
        let load = await axios.post('/api/line',state.lineForm)
        .then((r) => {
            state.lineDialog = false;
            store.dispatch('alert/alSuccess','Sucessfully'); 
            location.reload();
        }).catch((e) => {
            store.dispatch('alert/alError','Incorrect');  
            console.log(e);
        });
       
    },

    async updateLine(){
        let load = await axios.put('/api/line/'+state.lineForm.id,state.lineForm)
        .then((r) => {
            state.lineDialog = false;
            store.dispatch('alert/alSuccess','Sucessfully'); 
        }).catch((e) => {
            store.dispatch('alert/alError','Incorrect');  
            console.log(e);
        });
       
    },

    async deleteLine(context,params){

        let check = confirm("Delete");
        if(check){
        let load = await axios.delete('/api/line/'+params)
        .then((r) => { 
            store.dispatch('alert/alSuccess','Sucessfully'); 
        }).catch((e) => {
            store.dispatch('alert/alError','Incorrect');  
            console.log(e);
        });}
        actions.getLineList();
       
    },
    async searchingLine(context,params){
        let load = await axios.get('/api/searchLine?search='+params )
    .then((r) => {
        state.lineList = r.data;
    }).catch((e) => {
        console.log(e);
    });
}



 
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }