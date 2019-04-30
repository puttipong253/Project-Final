<template>
  <v-app>     
   <NavBar/> 
     <Alerter/>  
     <v-content>    
      <router-view></router-view>
    </v-content>   
  </v-app>  
</template>

<script>
   import { get,sync,call } from "vuex-pathify"; 
   //import Alerter from '@/components/Share/alert';
  import NavBar from '@/views/NavBar';
export default {
  name: 'App',
  components:{
    NavBar
  },
  date(){
    return{
      //
    }
  }, /*-------------------------Run Methods when Start this Page------------------------------------------*/
    async mounted() {
        /**** Call loading methods*/
        this.load();
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed: {
        ...sync('user/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
         ...call('user/*'),
        /******* Methods default run ******/
        load: async function () {
          let token = localStorage.getItem('token');
          if(token){
           await this.getUser();
          } 
          //console.log('[my token]', JSON.stringify(localStorage.getItem('token')));
        }
    },
}
</script>
