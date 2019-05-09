<!----------Make By YourName---------------->
 <template>
<v-container fluid grid-list-md>
    <v-layout row wrap>
        <div v-for="reel in reelList" :key="reel.id">
            <v-flex v-if="typeRod == reel.reel_type">
                <v-hover>
                    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" width="212px">
                        <div class="font-weight-light title text-xs-center mb-2">
                            <br>
                            {{reel.reel_name}}
                        </div>
                        <v-img :aspect-ratio="16/14" :src="reel.reel_image">
                        </v-img>
                        <v-card-text class="pt-4" style="position: relative;">
                            <v-btn @click="storeReels(reel)" absolute color="orange" class="white--text z-index" fab right top>
                                <v-icon>add</v-icon>
                            </v-btn>
                            <v-btn @click.stop="showReelsData(reel)" absolute color="red accent-2" class="white--text z-index" small fab left top>
                                <v-icon>search</v-icon>
                            </v-btn>
                            <div class="font-weight-light title text-xs-center mb-2">
                                <h3 class="headline font-weight-light orange--text text-xs-center ">฿ {{reel.reel_price}}</h3>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-flex>
        </div>
    </v-layout>
    <div>
        <v-dialog v-model="dialog2" width="300px" persistent>
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
                        <v-btn color="red" flat @click="dialog2 = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-dialog>
    </div>
</v-container>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
    name: 'Step2',
    /*-------------------------Load Component---------------------------------------*/
    components: {

    },
    /*-------------------------Set Component---------------------------------------*/
    props: {

    },
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {
            reelData: {},
            dialog2: false,
            UL: 1,
            L: 2,
            M: 3,
            ML: 4,
            MH: 5,
            H: 7,
            EH: 9,
            UH: 10,
  
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
        ...sync('calculate/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        showReelsData(data) {
            this.reelData = data;
            this.dialog2 = true;
        },
        storeReels(data) {
            let check = confirm('คุณแน่ใจใช่ไหมที่จะเลือกสินค้าชิ้นนี้');
            if (check) {
                this.sizeReel = data.reel_size
                this.addReel = data;
                this.e1++;
            }
        },
        ...call('reel/*'),
        ...call('calculate/*'),
        /******* Methods default run ******/
        async load() {
            await this.getReelList();
        }
    },
}
</script>

<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;

}

.z-index {
    z-index: 1 !important;
}

.v-background {
    background: #E0E0E0 !important;
}

.v-dialog {
    background: #424242 !important;
}

.small {
    max-width: 600px;

}
</style>
