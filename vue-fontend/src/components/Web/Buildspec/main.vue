<template>
<v-card height="700px" color="grey lighten-2">
    <v-stepper v-model="e1">
        <div class="v-background">
            <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1" color="green">Rods</v-stepper-step>

                <v-divider color="yellow"></v-divider>

                <v-stepper-step :complete="e1 > 2" step="2" color="green">Reels</v-stepper-step>

                <v-divider color="yellow"></v-divider>

                <v-stepper-step :complete="e1 > 3" step="3" color="green">Lines</v-stepper-step>

                <v-divider color="yellow"></v-divider>

                <v-stepper-step :complete="e1 > 4" step="4" color="green">Hooks</v-stepper-step>

                <v-divider color="yellow"></v-divider>

                <v-stepper-step :complete="e1 > 5" step="5" color="green">Specs</v-stepper-step>
            </v-stepper-header>
        </div>

        <v-stepper-items>
            <v-stepper-content step="1">
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
                                        <v-btn @click="storeRods(rod)" absolute color="orange" class="white--text z-index" fab right top>
                                            <v-icon>add</v-icon>
                                        </v-btn>
                                        <v-btn @click.stop="showRodsData(rod)" absolute color="red accent-2" class="white--text z-index" small fab left top>
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
            </v-stepper-content>

            <v-stepper-content step="2">
                <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <div v-for="reel in reelList" :key="reel">
                            <v-flex v-if="typeRod == reel.reel_type">
                                <v-hover>
                                    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" width="210px">
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
                </v-container>
            </v-stepper-content>

            <v-stepper-content step="3">
                <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <div v-for="line in lineList" :key="line">
                            <div v-if="sizeReel <= 2500 ">
                                <v-flex v-if=" line.line_size <= 12 ">
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" width="210px">
                                            <div class="font-weight-light title text-xs-center mb-2">
                                                <br>
                                                {{line.line_name}}
                                            </div>
                                            <v-img :aspect-ratio="16/14" :src="line.line_image">
                                            </v-img>
                                            <v-card-text class="pt-4" style="position: relative;">
                                                <v-btn @click="storeLines(line)" absolute color="orange" class="white--text z-index" fab right top>
                                                    <v-icon>add</v-icon>
                                                </v-btn>
                                                <v-btn @click.stop="showLinesData(line)" absolute color="red accent-2" class="white--text z-index" small fab left top>
                                                    <v-icon>search</v-icon>
                                                </v-btn>
                                                <div class="font-weight-light title text-xs-center mb-2">
                                                    <h3 class="headline font-weight-light orange--text text-xs-center ">฿ {{line.line_price}}</h3>
                                                </div>
                                            </v-card-text>
                                        </v-card>
                                    </v-hover>
                                </v-flex>
                            </div>
                            <div v-else-if="sizeReel > 2500  && sizeReel <= 4000">
                                <v-flex v-if=" line.line_size > 12 && line.line_size  <= 30 ">
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" width="210px">
                                            <div class="font-weight-light title text-xs-center mb-2">
                                                <br>
                                                {{line.line_name}}
                                            </div>
                                            <v-img :aspect-ratio="16/14" :src="line.line_image">
                                            </v-img>
                                            <v-card-text class="pt-4" style="position: relative;">
                                                <v-btn @click="storeLines(line)" absolute color="orange" class="white--text z-index" fab right top>
                                                    <v-icon>add</v-icon>
                                                </v-btn>
                                                <v-btn @click.stop="showLinesData(line)" absolute color="red accent-2" class="white--text z-index" small fab left top>
                                                    <v-icon>search</v-icon>
                                                </v-btn>
                                                <div class="font-weight-light title text-xs-center mb-2">
                                                    <h3 class="headline font-weight-light orange--text text-xs-center ">฿ {{line.line_price}}</h3>
                                                </div>
                                            </v-card-text>
                                        </v-card>
                                    </v-hover>
                                </v-flex>
                            </div>
                            <div v-else-if="sizeReel > 4000  && sizeReel <= 10000">
                                <v-flex v-if=" line.line_size > 30  ">
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" width="210px">
                                            <div class="font-weight-light title text-xs-center mb-2">
                                                <br>
                                                {{line.line_name}}
                                            </div>
                                            <v-img :aspect-ratio="16/14" :src="line.line_image">
                                            </v-img>
                                            <v-card-text class="pt-4" style="position: relative;">
                                                <v-btn @click="storeLines(line)" absolute color="orange" class="white--text z-index" fab right top>
                                                    <v-icon>add</v-icon>
                                                </v-btn>
                                                <v-btn @click.stop="showLinesData(line)" absolute color="red accent-2" class="white--text z-index" small fab left top>
                                                    <v-icon>search</v-icon>
                                                </v-btn>
                                                <div class="font-weight-light title text-xs-center mb-2">
                                                    <h3 class="headline font-weight-light orange--text text-xs-center ">฿ {{line.line_price}}</h3>
                                                </div>
                                            </v-card-text>
                                        </v-card>
                                    </v-hover>
                                </v-flex>
                            </div>
                        </div>
                    </v-layout>
                </v-container>
            </v-stepper-content>

            <v-stepper-content step="4">
                <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <div v-for="hook in hookList" :key="hook">
                            <div v-if="sizeLine > 0  && sizeLine <= 20 ">
                                <v-flex v-if="hook.hook_size > 0  && hook.hook_size <= 10 ">
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" width="210px">
                                            <div class="font-weight-light title text-xs-center mb-2">
                                                <br>
                                                {{hook.hook_name}}
                                            </div>
                                            <v-img :aspect-ratio="16/14" :src="hook.hook_image">
                                            </v-img>
                                            <v-card-text class="pt-4" style="position: relative;">
                                                <v-btn @click="storeHooks(hook)" absolute color="orange" class="white--text z-index" fab right top>
                                                    <v-icon>add</v-icon>
                                                </v-btn>
                                                <v-btn @click.stop="showHooksData(hook)" absolute color="red accent-2" class="white--text z-index" small fab left top>
                                                    <v-icon>search</v-icon>
                                                </v-btn>
                                                <div class="font-weight-light title text-xs-center mb-2">
                                                    <h3 class="headline font-weight-light orange--text text-xs-center ">฿ {{hook.hook_price}}</h3>
                                                </div>
                                            </v-card-text>
                                        </v-card>
                                    </v-hover>
                                </v-flex>
                            </div>
                            <div v-if="sizeLine > 20  && sizeLine <= 40 ">
                                <v-flex v-if="hook.hook_size > 10 && hook.hook_size <= 15 ">
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" width="210px">
                                            <div class="font-weight-light title text-xs-center mb-2">
                                                <br>
                                                {{hook.hook_name}}
                                            </div>
                                            <v-img :aspect-ratio="16/14" :src="hook.hook_image">
                                            </v-img>
                                            <v-card-text class="pt-4" style="position: relative;">
                                                <v-btn @click="storeHooks(hook)" absolute color="orange" class="white--text z-index" fab right top>
                                                    <v-icon>add</v-icon>
                                                </v-btn>
                                                <v-btn @click.stop="showHooksData(hook)" absolute color="red accent-2" class="white--text z-index" small fab left top>
                                                    <v-icon>search</v-icon>
                                                </v-btn>
                                                <div class="font-weight-light title text-xs-center mb-2">
                                                    <h3 class="headline font-weight-light orange--text text-xs-center ">฿ {{hook.hook_price}}</h3>
                                                </div>
                                            </v-card-text>
                                        </v-card>
                                    </v-hover>
                                </v-flex>
                            </div>
                            <div v-if="sizeLine > 40 ">
                                <v-flex v-if="hook.hook_size > 15 ">
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" width="210px">
                                            <div class="font-weight-light title text-xs-center mb-2">
                                                <br>
                                                {{hook.hook_name}}
                                            </div>
                                            <v-img :aspect-ratio="16/14" :src="hook.hook_image">
                                            </v-img>
                                            <v-card-text class="pt-4" style="position: relative;">
                                                <v-btn @click="storeHooks(hook)" absolute color="orange" class="white--text z-index" fab right top>
                                                    <v-icon>add</v-icon>
                                                </v-btn>
                                                <v-btn @click.stop="showHooksData(hook)" absolute color="red accent-2" class="white--text z-index" small fab left top>
                                                    <v-icon>search</v-icon>
                                                </v-btn>
                                                <div class="font-weight-light title text-xs-center mb-2">
                                                    <h3 class="headline font-weight-light orange--text text-xs-center ">฿ {{hook.hook_price}}</h3>
                                                </div>
                                            </v-card-text>
                                        </v-card>
                                    </v-hover>
                                </v-flex>
                            </div>
                        </div>
                    </v-layout>
                </v-container>
            </v-stepper-content>

            <v-stepper-content step="5">
                <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs6 md6>
                            <v-layout row wrap>
                                <v-flex xs6 md6>
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" width="210px">
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
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" width="210px">
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
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" width="210px">
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
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3" width="210px">
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
                            <h2>Fish Weight : {{addLine.line_size*0.4}} kg.</h2> <br>
                            <div v-if="addReel.reel_size <= 1000">
                                <h2>Popular for fish type : {{typefish1000}}</h2> <br>
                            </div>
                            <div v-else-if="addReel.reel_size > 1000 && addReel.reel_size <= 2000 ">
                                <h2>Popular for fish type : {{typefish2000}}</h2> <br> 
                            </div>
                             <div v-else-if="addReel.reel_size > 2000 && addReel.reel_size <= 3000 ">
                                <h2>Popular for fish type : {{typefish3000}}</h2><br>
                            </div>
                            <div v-else-if="addReel.reel_size > 3000 && addReel.reel_size <= 4000 ">
                                <h2>Popular for fish type : {{typefish4000}}</h2><br>
                            </div>
                            <div v-else-if="addReel.reel_size > 4000 && addReel.reel_size <= 5000 ">
                                <h2>Popular for fish type : {{typefish5000}}</h2><br>
                            </div>
                            <div v-else-if="addReel.reel_size > 5000 && addReel.reel_size <= 7000 ">
                                <h2>Popular for fish type : {{typefish7000}}</h2><br>
                            </div>
                            <div v-else-if="addReel.reel_size > 7000 ">
                                <h2>Popular for fish type : {{typefish8000}}</h2><br>
                            </div>
                            <h2>Sum Price : {{addRod.rod_price+addReel.reel_price+addLine.line_price+addHook.hook_price}} ฿</h2>
                        </v-flex>
                    </v-layout>
                </v-container>

                <div class="text-xs-center ">
                    <v-btn round color="error">Save To Invoice</v-btn>
                </div>
            </v-stepper-content>

        </v-stepper-items>
    </v-stepper>
    <div>
        <v-dialog v-model="dialog1" width="300px" persistent>
            <div class="text-xs-center">
                <v-card class="grey lighten-2">
                    <v-card-title class="headline grey darken-3 white--text" primary-title>
                        Description
                    </v-card-title>
                    <br>
                    <h3>Name : {{rodData.rod_name}}</h3>
                    <h3>Type : {{rodData.rod_type}}</h3>
                    <h3>Length : {{rodData.rod_length}} ft.</h3>
                    <h3>Power : {{rodData.rod_power}}</h3>
                    <h3>LineWeight : {{rodData.rod_line}} g.</h3>
                    <h3>Brand : {{rodData.rod_brand}}</h3>
                    <h3>Color : {{rodData.rod_color}}</h3>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red" flat @click="dialog1 = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-dialog>
    </div>
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
    <div>
        <v-dialog v-model="dialog3" width="300px" persistent>
            <div class="text-xs-center">
                <v-card class="grey lighten-2">
                    <v-card-title class="headline grey darken-3 white--text" primary-title>
                        Description
                    </v-card-title>
                    <br>
                    <h3>Name : {{lineData.line_name}}</h3>
                    <h3>Type : {{lineData.line_type}}</h3>
                    <h3>Size : {{lineData.line_size}} lb.</h3>
                    <h3>Brand : {{lineData.line_brand}}</h3>
                    <h3>Color : {{lineData.line_color}}</h3>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red" flat @click="dialog3 = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-dialog>
    </div>
    <div>
        <v-dialog v-model="dialog4" width="300px" persistent>
            <div class="text-xs-center">
                <v-card class="grey lighten-2">
                    <v-card-title class="headline grey darken-3 white--text" primary-title>
                        Description
                    </v-card-title>
                    <br>
                    <h3>Name : {{hookData.hook_name}}</h3>
                    <h3>Type : {{hookData.hook_type}}</h3>
                    <h3>Size : {{hookData.hook_size}}</h3>
                    <h3>Brand : {{hookData.hook_brand}}</h3>
                    <h3>Color : {{hookData.hook_color}}</h3>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red" flat @click="dialog4 = false">
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
    data() {
        return {
            rodData: {},
            reelData: {},
            lineData: {},
            hookData: {},
            dialog1: false,
            dialog2: false,
            dialog3: false,
            dialog4: false,
            e1: 0,
            typeRod: '',
            sizeReel: '',
            sizeLine: '',
            typefish1000: 'Bream , Trout , Whiting',
            typefish2000: 'Bream , Trout , Whiting , Bass , Flathead , Perch , Luderick',
            typefish3000: 'Bream , Bass , Flathead , Tarwhine , KG Whiting , Mangrove jack',
            typefish4000: 'Snapper , Morwong , Tailor , Mangrove Jack , Cod , Bone Fish , Barramundi , Mulloway , Drummer',
            typefish5000: 'Snapper , Morwong , Tailor , Mangrove Jack , Cod , Bone Fish , Barramundi , Mulloway',
            typefish7000: 'Snapper , Morwong , Tailor , Cod , Mulloway , Aust Salmon , Kingfish , Samson Fish , Mulloway',
            typefish8000: 'Snapper , Morwong , Kingfish , Mulloway , Small Sharks , Large Mackerel , Mahi Mahi , Small Tuna',
        }
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
        ...sync('reel/*'),
        ...sync('line/*'),
        ...sync('hook/*'),
        ...sync('calculate/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        showRodsData(data) {
            this.rodData = data;
            this.dialog1 = true;
        },
        showReelsData(data) {
            this.reelData = data;
            this.dialog2 = true;
        },
        showLinesData(data) {
            this.lineData = data;
            this.dialog3 = true;
        },
        showHooksData(data) {
            this.hookData = data;
            this.dialog4 = true;
        },
        storeHooks(data) {
            let check = confirm('คุณแน่ใจใช่ไหมที่จะเลือกสินค้าชิ้นนี้');
            if (check) {
                this.addHook = data;
                this.e1++;
            }
        },
        storeLines(data) {
            let check = confirm('คุณแน่ใจใช่ไหมที่จะเลือกสินค้าชิ้นนี้');
            if (check) {
                this.sizeLine = data.line_size
                this.addLine = data;
                this.e1++;
            }
        },
        storeReels(data) {
            let check = confirm('คุณแน่ใจใช่ไหมที่จะเลือกสินค้าชิ้นนี้');
            if (check) {
                this.sizeReel = data.reel_size
                this.addReel = data;
                this.e1++;
            }
        },
        storeRods(data) {
            let check = confirm('คุณแน่ใจใช่ไหมที่จะเลือกสินค้าชิ้นนี้');
            if (check) {
                this.typeRod = data.rod_type
                this.addRod = data;
                this.e1++;
            }
        },

        ...call('rod/*'),
        ...call('reel/*'),
        ...call('line/*'),
        ...call('hook/*'),
        /******* Methods default run ******/
        async load() {
            await this.getRodList();
            await this.getReelList();
            await this.getLineList();
            await this.getHookList();
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
</style>
