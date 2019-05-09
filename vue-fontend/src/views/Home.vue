<!----------Make By YourName---------------->
 <template>
<div>
    <Homemain/>
    <Footer/>
</div>
</template>

  
<script>
import Homemain from '@/components/Web/Home/Homemain';
import Footer from '@/components/Share/Footer';
export default {
    name: 'Home',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        Homemain,
        Footer
    },
    /*-------------------------Set Component---------------------------------------*/
    props: {

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
    computed: {

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>
