import axios from '../axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'

import store from './vuex';

const state = {
    specList:[],

    
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {

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
        await axios.get('/api/user/')
       .then((r) => {
        id = r.data.user.id;
       }).catch((e) => { 
    
       });
    
        let load = await axios.get('/api/spec/'+id)
        .then((r) => {
            state.specList = r.data;
        }).catch((e) => {
            console.log(e);
        }); 
      },
      async deleteSpec(context,params){

        let check = confirm("Delete");
        if(check){
        let load = await axios.delete('/api/spec/'+params)
        .then((r) => { 
            store.dispatch('alert/alSuccess','Sucessfully'); 
          }).catch((e) => {
            store.dispatch('alert/alError','Incorrect');  
              console.log(e);
          });}
        actions.showSpec();
       
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }