<!----------Make By YourName---------------->
 <template>
<div>
    <crudRod/>
    </div>
</template>

    <script>
    import crudRod from '@/components/Web/AdminCRUD/crudRod'
export default {
    name: 'crudrod',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        crudRod
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