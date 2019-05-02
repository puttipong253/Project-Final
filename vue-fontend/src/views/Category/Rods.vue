<!----------Make By YourName---------------->
 <template>
<v-card>
    <v-layout row wrap>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex v-for="rod in rodList" :key="rod">
                    <v-hover>
                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" width="210px">
                            <div class="font-weight-light title text-xs-center mb-2">
                                <br>
                                {{rod.rod_name}}
                            </div>
                            <v-img :aspect-ratio="16/14" :src="rod.rod_image">
                            </v-img>
                            <v-card-text class="pt-4" style="position: relative;">
                                <div class="font-weight-light title text-xs-center mb-2">
                                    <h3 class="headline font-weight-light orange--text text-xs-center ">฿ {{rod.rod_price}}</h3>
                                </div>
                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                        <template v-slot:header>
                                            <div>Detail</div>
                                        </template>
                                        <v-card-text class="text-xs-center blue lighten-2">
                                            Type = {{rod.rod_type}} <br>
                                            Length = {{rod.rod_length}} f.<br>
                                            Power = {{rod.rod_power}} <br>
                                            LineWeight = {{rod.rod_line}} g.<br>
                                            Brand = {{rod.rod_brand}} <br>
                                            Color = {{rod.rod_color}}
                                        </v-card-text>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-card-text>
                        </v-card>
                    </v-hover>
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
