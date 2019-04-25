<!----------Make By YourName---------------->
 <template>
<v-layout row wrap>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex v-for="hook in hookList" :key="hook" md2>
                <v-hover>
                    <v-responsive slot-scope="{ hover }" class="mx-auto">
                        <v-img height="150px" :src="hook.hook_image">
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                                    <div class="text-xs-center">
                                        <v-btn @click="addData(hookList)">
                                            ADD
                                        </v-btn>
                                    </div>
                                </div>
                            </v-expand-transition>
                        </v-img>
                    </v-responsive>
                </v-hover>
                <br>
                <div class="text-xs-center">
                    <p>{{hook.hook_name}}</p>
                    <a href="#">Seemore</a>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</v-layout>
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
