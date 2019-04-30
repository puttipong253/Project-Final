<!----------Make By YourName---------------->
 <template>
<v-card>
  
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex v-for="hook in hookList" :key="hook" md2>

                    <v-responsive>
                        <v-img height="150px" :src="hook.hook_image">

                        </v-img>
                    </v-responsive>

                    <br>
                    <div class="text-xs-center">
                        <p>{{hook.hook_name}}</p>
                        <a href="#">Seemore</a>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
 
</v-card>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
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
        ...sync('hook/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('hook/*'),
        /******* Methods default run ******/
        async load() {
            await this.getHookList();
        }
    },
}
</script>
