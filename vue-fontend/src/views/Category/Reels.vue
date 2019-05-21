<!----------Make By YourName---------------->
 <template>
<v-card>
        <v-container fluid grid-list-md>
            <VTextField prepend-icon="search" @change="Reelsearching()" v-model="search" label="Search" />
            <v-layout row wrap>
                <v-flex v-for="reel in reelList" :key="reel" md2>
                    <v-hover>
                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3">
                            <div class="font-weight-light title text-xs-center mb-2">
                                <br>
                                {{reel.reel_name}}
                            </div>
                            <v-img :aspect-ratio="16/14" :src="reel.reel_image">
                            </v-img>
                            <v-card-text class="pt-4" style="position: relative;">
                                <v-btn @click.stop="showReelsData(reel)" absolute color="red accent-2" class="white--text z-index" small fab right top>
                                    <v-icon>search</v-icon>
                                </v-btn>
                                <div class="font-weight-light title text-xs-center mb-2">
                                    <h3 class="headline font-weight-light orange--text text-xs-center ">฿ {{reel.reel_price}}</h3>
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
                    <h3>Name : {{reelData.reel_name}}</h3>
                    <h3>Type : {{reelData.reel_type}}</h3>
                    <h3>Size : {{reelData.reel_size}}</h3>
                    <h3>Brand : {{reelData.reel_brand}}</h3>
                    <h3>Color : {{reelData.reel_color}}</h3>
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
    name: 'Reels',
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
            reelData: {},
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
        ...sync('reel/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        showReelsData(data){
            this.reelData = data;
            this.dialog = true;
        },
        ...call('reel/*'),
        async Reelsearching() {
            if (this.search != '') {
                await this.searchingReel2(this.search)
            } else {
                await this.getReelList();
            }
        },
        /******* Methods default run ******/
        async load() {
            await this.getReelList();
        }
    },
}
</script>
