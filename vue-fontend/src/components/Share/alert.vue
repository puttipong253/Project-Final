<!----------Make By YourName---------------->
 <template>
<div>
    <v-snackbar v-model="alertModel" :color="alertColor" 
      right
      :timeout="6000"
      top
       
    >
        {{alertText}}
        <v-btn   flat @click="alertModel = false" icon dark>
            <v-icon>close</v-icon>
        </v-btn>
    </v-snackbar>
</div>
</template>

    
<script>
	import { get,sync,call } from "vuex-pathify"; 
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {

    },
    /*-------------------------Set Component---------------------------------------*/
    props: {

    },
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {
snackbar:true
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
    computed: {
        ...sync('alert/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
         ...call('alert/*'),
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>
