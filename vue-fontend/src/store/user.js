import axios from '../axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'
const state = {
    print:true,
    loginForm:{
        email:'',
        password:'',
    },
    registerForm:{
        name:'',
        surname:'',
        email:'',
        password:'',
    },
    registerDialog: false,
    loginDialog: false,
    userData:{},
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {

    async registerDialogSwitch(context,params){
        if(params == true){
            state.registerDialog = true;
        }else{
            state.registerForm = {};
     
            state.registerDialog = false;
        }
    },
    async loginDialogSwitch(context,params){
        if(params == true){
            state.loginDialog = true;
        }else{
            state.loginForm = {};
     
            state.loginDialog = false;
        }
    },
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

async register() { 
    let load = await axios.post('/api/register', state.registerForm)
    .then((r) => { 
        state.rodDialog = false;
        location.reload(); 
        alert('Register Successfuly');
    }).catch((e) => {
        alert('Error Register');
    });
    
    
},
async getUser(context, params){ 
    console.log('[my token2]', JSON.stringify(localStorage.getItem('token')))
     await axios.get('/api/user')
    .then((r) => {
        state.userData = r.data.user;
    }).catch((e) => { 

    });
},

async updateUser(context, params){ 
   
     await axios.post('/api/cuser',state.userData)
    .then((r) => {
        alert('Successfuly');
    }).catch((e) => { 

    });
},
async updatePassword(context, params){ 
   
    await axios.post('/api/cpassword',params )
   .then((r) => {
    alert('Successfuly');
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