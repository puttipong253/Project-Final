<!----------Make By YourName---------------->
 <template>
<v-container fluid grid-list-md>
    <v-layout row wrap>
        <v-flex xs6 md6>
            <v-layout row wrap>
                <v-flex xs6 md6>
                    <v-hover>
                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" width="212px">
                            <div class="font-weight-light title text-xs-center mb-2">
                                <br>
                                {{addRod.rod_name}}
                            </div>
                            <v-img :aspect-ratio="16/14" :src="addRod.rod_image">
                            </v-img>
                            <v-card-text class="pt-4" style="position: relative;">
                                <div class="font-weight-light title text-xs-center mb-2">
                                    <h3 class="headline font-weight-light orange--text text-xs-center ">฿ {{addRod.rod_price}}</h3>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-flex>
                <v-flex xs6 md6>
                    <v-hover>
                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" width="212px">
                            <div class="font-weight-light title text-xs-center mb-2">
                                <br>
                                {{addReel.reel_name}}
                            </div>
                            <v-img :aspect-ratio="16/14" :src="addReel.reel_image">
                            </v-img>
                            <v-card-text class="pt-4" style="position: relative;">
                                <div class="font-weight-light title text-xs-center mb-2">
                                    <h3 class="headline font-weight-light orange--text text-xs-center ">฿ {{addReel.reel_price}}</h3>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-flex>
                <v-flex xs6 md6>
                    <v-hover>
                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" width="212px">
                            <div class="font-weight-light title text-xs-center mb-2">
                                <br>
                                {{addLine.line_name}}
                            </div>
                            <v-img :aspect-ratio="16/14" :src="addLine.line_image">
                            </v-img>
                            <v-card-text class="pt-4" style="position: relative;">
                                <div class="font-weight-light title text-xs-center mb-2">
                                    <h3 class="headline font-weight-light orange--text text-xs-center ">฿ {{addLine.line_price}}</h3>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-flex>
                <v-flex xs6 md6>
                    <v-hover>
                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" width="212px">
                            <div class="font-weight-light title text-xs-center mb-2">
                                <br>
                                {{addHook.hook_name}}
                            </div>
                            <v-img :aspect-ratio="16/14" :src="addHook.hook_image">
                            </v-img>
                            <v-card-text class="pt-4" style="position: relative;">
                                <div class="font-weight-light title text-xs-center mb-2">
                                    <h3 class="headline font-weight-light orange--text text-xs-center ">฿ {{addHook.hook_price}}</h3>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-flex>
            </v-layout>
        </v-flex>

        <v-flex sx6 md6>
            <div class="small">
                <line-chart :chart-data="datacollection" width="750px"></line-chart>
            
            </div>
            <v-timeline>
                <v-timeline-item color="red lighten-2" small>
                    <v-card class="elevation-2">
                        <v-card-title class="title">Fish Weight</v-card-title>
                        <v-card-text>
                            {{addLine.line_size*0.4}} kg.
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item color="red lighten-2" small>
                    <v-card class="elevation-2" >
                        <v-card-title class="title">Popular for fish type</v-card-title>
                        <v-card-text>
                            <div v-if="addReel.reel_size <= 1000">
                                {{typefish1000}}
                            </div>
                            <div v-else-if="addReel.reel_size > 1000 && addReel.reel_size <= 2000 ">
                                {{typefish3000}}
                            </div>
                            <div v-else-if="addReel.reel_size > 2000 && addReel.reel_size <= 3000 ">
                                {{typefish3000}}
                            </div>
                            <div v-else-if="addReel.reel_size > 3000 && addReel.reel_size <= 4000 ">
                                {{typefish4000}}
                            </div>
                            <div v-else-if="addReel.reel_size > 4000 && addReel.reel_size <= 5000 ">
                                {{typefish5000}}
                            </div>
                            <div v-else-if="addReel.reel_size > 5000 && addReel.reel_size <= 7000 ">
                                {{typefish7000}}
                            </div>
                            <div v-else-if="addReel.reel_size > 7000 ">
                                {{typefish8000}}
                            </div>
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item color="red lighten-2" small>
                    <v-card class="elevation-2">
                        <v-card-title class="title">Sum Price </v-card-title>
                        <v-card-text>
                            {{addRod.rod_price+addReel.reel_price+addLine.line_price+addHook.hook_price}} ฿
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-flex>
    </v-layout>
    <div class="text-xs-center ">
        <v-btn @click="saveSpec(userData.id,addRod.id,addReel.id,addLine.id,addHook.id)" round color="error">Save To Invoice</v-btn>
    </div>
</v-container>
</template>

<script>
import LineChart from '@/LineChart.js'
import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
    name: 'Step5',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        LineChart
    },
    /*-------------------------Set Component---------------------------------------*/
    props: {

    },
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {
            typefish1000: 'Bream , Trout , Whiting',
            typefish2000: 'Bream , Trout , Whiting , Bass , Flathead , Perch , Luderick',
            typefish3000: 'Bream , Bass , Flathead , Tarwhine , KG Whiting , Mangrove jack',
            typefish4000: 'Snapper , Morwong , Tailor , Mangrove Jack , Cod , Bone Fish , Barramundi , Mulloway , Drummer',
            typefish5000: 'Snapper , Morwong , Tailor , Mangrove Jack , Cod , Bone Fish , Barramundi , Mulloway',
            typefish7000: 'Snapper , Morwong , Tailor , Cod , Mulloway , Aust Salmon , Kingfish , Samson Fish , Mulloway',
            typefish8000: 'Snapper , Morwong , Kingfish , Mulloway , Small Sharks , Large Mackerel , Mahi Mahi , Small Tuna',
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
       this.fillData();
       this.load();
        
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed: {
        ...sync('user/*'),
        ...sync('calculate/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        async saveSpec(user, rod, reel, line, hook) {
            let data = {
                'user_id': user,
                'hook_id': hook,
                'line_id': line,
                'reel_id': reel,
                'rod_id': rod
            }
            await this.storeSpec(data);
            await this.$router.replace('/Invoice');
        },
        ...call('user/*'),
        ...call('calculate/*'),
        /******* Methods default run ******/
        async load() {
       
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
