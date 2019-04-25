import axios from '../axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'
const state = {
    loginForm:{
        email:'',
        password:'',
    },
    userData:{},
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {
 
async login(context, params) { 
    let token = '';
    await axios.post('/api/login', state.loginForm)
    .then((r) => { 
        token = r.data;
       
    }).catch((e) => {
        alert('Error Login');
    });
    await localStorage.setItem("token",token); 
    await location.reload(); 
    
},
async getUser(context, params){ 
  
    console.log('[my token2]', JSON.stringify(localStorage.getItem('token')))
     await axios.get('/api/user',{ headers: { Authorization: `Bearer ${JSON.stringify(localStorage.getItem('token'))}` } })
    .then((r) => {
        state.userData = r.data;
    }).catch((e) => { 

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