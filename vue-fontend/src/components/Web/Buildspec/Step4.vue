<!----------Make By YourName---------------->
 <template>
<v-container fluid grid-list-md>
    <VTextField prepend-icon="search" @change="Hooksearching()" v-model="search" label="Search" />
    <v-layout row wrap>
        <v-flex v-for="hook in hookFilterList" :key="hook.id" md2>

            <v-hover>
                <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="grey lighten-3">
                    <div class="font-weight-light title text-xs-center mb-2">
                        <br>
                        {{hook.hook_name}}
                    </div>
                    <v-img :aspect-ratio="16/14" :src="hook.hook_image">
                    </v-img>
                    <v-card-text class="pt-4" style="position: relative;">
                        <v-btn @click="storeHooks(hook)" absolute color="orange" class="white--text z-index" small fab right top>
                            <v-icon>add</v-icon>
                        </v-btn>
                        <v-btn @click.stop="showHooksData(hook)" absolute color="grey" class="white--text z-index" small fab left top>
                            <v-icon>search</v-icon>
                        </v-btn>
                        <div class="font-weight-light title text-xs-center mb-2">
                            <h3 class="headline font-weight-light orange--text text-xs-center ">฿ {{hook.hook_price}}</h3>
                        </div>
                    </v-card-text>
                </v-card>
            </v-hover>
        </v-flex>
    </v-layout>
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
</v-container>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
    name: 'Step4',
    /*-------------------------Load Component---------------------------------------*/
    components: {

    },
    /*-------------------------Set Component---------------------------------------*/
    props: {

    },
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {
            search: '',
            hookData: {},
            dialog4: false,
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
        ...sync('hook/*'),
        ...sync('calculate/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        showHooksData(data) {
            this.hookData = data;
            this.dialog4 = true;
        },
        storeHooks(data) {
            let check = confirm('Are you sure you want to select this product?');
            if (check) {
                this.addHook = data;
                this.fillData();
                this.e1++;
            }
        },
        async Hooksearching() {
  
                await this.searchingHook(this.search)

        },
        ...call('hook/*'),
        ...call('calculate/*'),
        /******* Methods default run ******/
        async load() {
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

.small {
    max-width: 600px;

}
</style>
