<!----------Make By YourName---------------->
 <template>
<v-card>
        <v-container fluid grid-list-md>
            <VTextField prepend-icon="search" @change="Linesearching()" v-model="search" label="Search" />
            <v-layout row wrap>
                <v-flex v-for="line in lineList" :key="line" md2>
                    <v-hover>
                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" >
                            <div class="font-weight-light title text-xs-center mb-2">
                                <br>
                                {{line.line_name}}
                            </div>
                            <v-img :aspect-ratio="16/14" :src="line.line_image">
                            </v-img>
                            <v-card-text class="pt-4" style="position: relative;">
                                <v-btn @click.stop="showLinesData(line)" absolute color="red accent-2" class="white--text z-index" small fab right top>
                                    <v-icon>search</v-icon>
                                </v-btn>
                                <div class="font-weight-light title text-xs-center mb-2">
                                    <h3 class="headline font-weight-light orange--text text-xs-center ">฿ {{line.line_price}}</h3>
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
                    <h3>Name : {{lineData.line_name}}</h3>
                    <h3>Type : {{lineData.line_type}}</h3>
                    <h3>Size : {{lineData.line_size}}</h3>
                    <h3>Brand : {{lineData.line_brand}}</h3>
                    <h3>Color : {{lineData.line_color}}</h3>
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
    name: 'Lines',
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
            lineData: {},
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
        ...sync('line/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        showLinesData(data){
            this.lineData = data;
            this.dialog = true;
        },
        ...call('line/*'),
        async Linesearching() {
            if (this.search != '') {
                await this.searchingLine2(this.search)
            } else {
                await this.getLineList();
            }
        },
        /******* Methods default run ******/
        async load() {
            await this.getLineList();
        }
    },
}
</script>
