<template>
<v-stepper v-model="e1">
    <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Rods</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">Reels</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 3" step="3">Lines</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 4" step="4">Hooks</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 5" step="5">Specs</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
        <v-stepper-content step="1">
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <v-flex v-for="rod in rodList" :key="rod" md2>
                        <v-hover>
                            <v-responsive slot-scope="{ hover }" class="mx-auto">
                                <v-img height="150px" :src="rod.rod_image">
                                    <v-expand-transition>
                                        <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                                            <div class="text-xs-center">
                                                <v-btn @click="storeRods(rod)">
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
                            <p>{{rod.rod_name}}</p>
                            <p>฿ {{rod.rod_price}}</p>
                            <a href="#">Seemore</a>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-stepper-content>

        <v-stepper-content step="2">
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <div v-for="reel in reelList" :key="reel">
                        <v-flex>
                            <div v-if="typeRod == reel.reel_type" style="width :150px">
                                <v-hover>
                                    <v-responsive slot-scope="{ hover }" class="mx-auto">
                                        <v-img height="150px" :src="reel.reel_image">
                                            <v-expand-transition>
                                                <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                                                    <div class="text-xs-center">
                                                        <v-btn @click="storeReels(reel)">
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
                                    <p>{{reel.reel_name}}</p>
                                    <p>฿ {{reel.reel_price}}</p>
                                    <a href="#">Seemore</a>
                                </div>
                            </div>

                        </v-flex>
                    </div>
                </v-layout>
            </v-container>
        </v-stepper-content>

        <v-stepper-content step="3">
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <div v-for="line in lineList" :key="line">
                        <v-flex>
                            <div v-if="sizeReel <= 2500 ">
                                <div v-if=" line.line_size <= 12 " style="width :150px">
                                    <v-hover>
                                        <v-responsive slot-scope="{ hover }" class="mx-auto">
                                            <v-img height="150px" :src="line.line_image">
                                                <v-expand-transition>
                                                    <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                                                        <div class="text-xs-center">
                                                            <v-btn @click="storeLines(line)">
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
                                        <p>{{line.line_name}}</p>
                                        <p>฿ {{line.line_price}}</p>
                                        <a href="#">Seemore</a>
                                    </div>
                                </div>
                            </div>
                            <div v-else-if="sizeReel > 2500  && sizeReel <= 4000">
                                <div v-if=" line.line_size > 12 && line.line_size  <= 30 " style="width :150px">
                                    <v-hover>
                                        <v-responsive slot-scope="{ hover }" class="mx-auto">
                                            <v-img height="150px" :src="line.line_image">
                                                <v-expand-transition>
                                                    <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                                                        <div class="text-xs-center">
                                                            <v-btn @click="storeLines(line)">
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
                                        <p>{{line.line_name}}</p>
                                        <p>฿ {{line.line_price}}</p>
                                        <a href="#">Seemore</a>
                                    </div>
                                </div>
                            </div>
                            <div v-else-if="sizeReel > 4000  && sizeReel <= 10000">
                                <div v-if=" line.line_size > 30  " style="width :150px">
                                    <v-hover>
                                        <v-responsive slot-scope="{ hover }" class="mx-auto">
                                            <v-img height="150px" :src="line.line_image">
                                                <v-expand-transition>
                                                    <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                                                        <div class="text-xs-center">
                                                            <v-btn @click="storeLines(line)">
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
                                        <p>{{line.line_name}}</p>
                                        <p>฿ {{line.line_price}}</p>
                                        <a href="#">Seemore</a>
                                    </div>
                                </div>
                            </div>
                        </v-flex>
                    </div>
                </v-layout>
            </v-container>
        </v-stepper-content>

        <v-stepper-content step="4">
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <div v-for="hook in hookList" :key="hook">
                        <v-flex>
                            <div v-if="sizeLine > 0  && sizeLine <= 20 ">
                                <div v-if="hook.hook_size > 0  && hook.hook_size <= 10 " style="width :150px">
                                    <v-hover>
                                        <v-responsive slot-scope="{ hover }" class="mx-auto">
                                            <v-img height="150px" :src="hook.hook_image">
                                                <v-expand-transition>
                                                    <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                                                        <div class="text-xs-center">
                                                            <v-btn @click="storeHooks(hook)">
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
                                        <p>฿ {{hook.hook_price}}</p>
                                        <a href="#">Seemore</a>
                                    </div>
                                </div>
                            </div>
                            <div v-if="sizeLine > 20  && sizeLine <= 40 ">
                                <div v-if="hook.hook_size > 10 && hook.hook_size <= 15 " style="width :150px">
                                    <v-hover>
                                        <v-responsive slot-scope="{ hover }" class="mx-auto">
                                            <v-img height="150px" :src="hook.hook_image">
                                                <v-expand-transition>
                                                    <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                                                        <div class="text-xs-center">
                                                            <v-btn @click="storeHooks(hook)">
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
                                        <p>฿ {{hook.hook_price}}</p>
                                        <a href="#">Seemore</a>
                                    </div>
                                </div>
                            </div>
                            <div v-if="sizeLine > 40 ">
                                <div v-if="hook.hook_size > 15 " style="width :150px">
                                    <v-hover>
                                        <v-responsive slot-scope="{ hover }" class="mx-auto">
                                            <v-img height="150px" :src="hook.hook_image">
                                                <v-expand-transition>
                                                    <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                                                        <div class="text-xs-center">
                                                            <v-btn @click="storeHooks(hook)">
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
                                        <p>฿ {{hook.hook_price}}</p>
                                        <a href="#">Seemore</a>
                                    </div>
                                </div>
                            </div>

                        </v-flex>
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
                                    <v-responsive slot-scope="{ hover }" class="mx-auto">
                                        <v-img height="200px" :src="addRod.rod_image">
                                            <v-expand-transition>
                                                <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                                                    <div class="text-xs-center">

                                                    </div>
                                                </div>
                                            </v-expand-transition>
                                        </v-img>
                                    </v-responsive>
                                </v-hover>
                            </v-flex>
                            <v-flex xs6 md6>
                                <v-hover>
                                    <v-responsive slot-scope="{ hover }" class="mx-auto">
                                        <v-img height="200px" :src="addReel.reel_image">
                                            <v-expand-transition>
                                                <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                                                    <div class="text-xs-center">

                                                    </div>
                                                </div>
                                            </v-expand-transition>
                                        </v-img>
                                    </v-responsive>
                                </v-hover>
                            </v-flex>
                            <v-flex xs6 md6>
                                <v-hover>
                                    <v-responsive slot-scope="{ hover }" class="mx-auto">
                                        <v-img height="200px" :src="addLine.line_image">
                                            <v-expand-transition>
                                                <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                                                    <div class="text-xs-center">

                                                    </div>
                                                </div>
                                            </v-expand-transition>
                                        </v-img>
                                    </v-responsive>
                                </v-hover>
                            </v-flex>
                            <v-flex xs6 md6>
                                <v-hover>
                                    <v-responsive slot-scope="{ hover }" class="mx-auto">
                                        <v-img height="200px" :src="addHook.hook_image">
                                            <v-expand-transition>
                                                <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                                                    <div class="text-xs-center">

                                                    </div>
                                                </div>
                                            </v-expand-transition>
                                        </v-img>
                                    </v-responsive>
                                </v-hover>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex sx6 md6>
                        <h2>รับน้ำหนักปลาได้สูงสุด = {{addLine.line_size*0.4}} กิโลกรัม</h2>
                        <h2>ราคารวม = {{addRod.rod_price+addReel.reel_price+addLine.line_price+addHook.hook_price}} บาท</h2>
                    </v-flex>
                </v-layout>
            </v-container>

            <div class="text-xs-center ">
                <v-btn round color="">Build Spec</v-btn>
            </div>
        </v-stepper-content>

    </v-stepper-items>
</v-stepper>
</template>

<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
}
</style>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
    data() {
        return {

            dialog: false,
            dataTmp: [],
            e1: 0,
            typeRod: '',
            sizeReel: '',
            sizeLine: '',
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
                // localStorage.removeItem('selectType')
                // localStorage.setItem('selectType',data.rod_type)
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

<style scoped>

</style>
