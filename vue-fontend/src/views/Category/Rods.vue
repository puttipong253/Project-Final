<!----------Make By YourName---------------->
 <template>
<v-card>
    <v-layout row wrap>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex v-for="rod in rodList" :key="rod" md2>

                    <v-responsive>
                        <v-img height="150px" :src="rod.rod_image">

                        </v-img>
                    </v-responsive>

                    <br>
                    <div class="text-xs-center">
                        <p>{{rod.rod_name}}</p>
                        <a href="#">Seemore</a>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-layout>
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
        ...sync('rod/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('rod/*'),
        /******* Methods default run ******/
        async load() {
            await this.getRodList();
        }
    },
}
</script>
