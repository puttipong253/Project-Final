<!----------Make By YourName---------------->
 <template>
<div>
    <crudHook/>
    </div>
</template>

    <script>
    import crudHook from '@/components/Web/AdminCRUD/crudHook'
export default {
    name: 'adhooks',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        crudHook
    },
  /*-------------------------Set Component---------------------------------------*/
props:{

},
    /*-------------------------DataVarible---------------------------------------*/
    data() {
    return {

        };
    }, 
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
     async mounted() {
    /**** Call loading methods*/
            this.load(); 
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
     async beforeRouteEnter(to, from, next) { 
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed:{

},
    /*-------------------------Methods------------------------------------------*/
methods:{
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>