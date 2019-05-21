<!----------Make By YourName---------------->
 <template>
<v-card>
        <v-container fluid grid-list-md>
            <VTextField prepend-icon="search" @change="Rodsearching()" v-model="search" label="Search" />
            <v-layout row wrap>
                <v-flex v-for="rod in rodList" :key="rod" md2>
                    <v-hover>
                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3">
                            <div class="font-weight-light title text-xs-center mb-2">
                                <br>
                                {{rod.rod_name}}
                            </div>
                            <v-img :aspect-ratio="16/14" :src="rod.rod_image">
                            </v-img>
                            <v-card-text class="pt-4" style="position: relative;">
                                <v-btn @click.stop="showRodsData(rod)" absolute color="red accent-2" class="white--text z-index" small fab right top>
                                    <v-icon>search</v-icon>
                                </v-btn>
                                <div class="font-weight-light title text-xs-center mb-2">
                                    <h3 class="headline font-weight-light orange--text text-xs-center ">฿ {{rod.rod_price}}</h3>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-flex>
            </v-layout>
        </v-container>
    <div>
        <v-dialog v-model="dialog" width="300px" persistent>
            <div class="text-xs-center">
                <v-card class="grey lighten-2">
                    <v-card-title class="headline grey darken-3 white--text" primary-title>
                        Description
                    </v-card-title>
                    <br>
                    <h3>Name : {{rodData.rod_name}}</h3>
                    <h3>Type : {{rodData.rod_type}}</h3>
                    <h3>Length : {{rodData.rod_length}} ft.</h3>
                    <h3>Power : {{rangeSpaec}}</h3>
                    <h3>LineWeight : {{rodData.rod_line}} g.</h3>
                    <h3>Brand : {{rodData.rod_brand}}</h3>
                    <h3>Color : {{rodData.rod_color}}</h3>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red" flat @click="dialog = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-dialog>
    </div>
</v-card>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
    name: 'Rods',
    /*-------------------------Load Component---------------------------------------*/
    components: {

    },
    /*-------------------------Set Component---------------------------------------*/
    props: {

    },
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {
            search:'',
            rodData: {},
            dialog: false,
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
        ...sync('calculate/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        showRodsData(data){
            this.rodData = data;
            this.checkSpec(data.rod_power)
            this.dialog = true;
        },
        ...call('rod/*'),
        ...call('calculate/*'),
        async Rodsearching() {
            if (this.search != '') {
                await this.searchingRod2(this.search)
            } else {
                await this.getRodList();
            }
        },
        /******* Methods default run ******/
        async load() {
            await this.getRodList();
        }
    },
}
</script>
