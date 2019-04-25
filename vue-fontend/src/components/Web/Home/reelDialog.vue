<!----------Make By YourName---------------->
 <template>
<v-content>
    <v-dialog v-model="reelDialog" persistent :overlay="false" max-width="500px" transition="dialog-transition">
        <v-card>
            <v-toolbar dark color="primary">
                <v-toolbar-title>Add Reel</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark flat @click="reelDialogSwitch(false)" icon>
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-form @submit.prevent="storeReel()">
                <v-container>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="reelForm.reel_name" type="text" label="Name" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="reelForm.reel_size" type="number" label="Size" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-select v-model="reelForm.reel_type" :items="types" label="Type" required></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-select v-model="reelForm.reel_color" :items="colors" label="Color" required></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="reelForm.reel_brand" type="text" label="brand" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="reelForm.reel_price" type="number" label="price" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <img v-if="reelForm.id" :src="reelForm.reel_image" alt="">
                            <img v-else-if="reelForm" :src="reelForm.reel_image" alt="">
                            <image-uploader :preview="false" :maxWidth="150" v-model="reelForm.reel_image"></image-uploader>
                        </v-flex>
                    </v-layout>
                    <v-flex text-xs-center>
                        <v-btn type="submit" color="success">{{(reelForm.id)?'Update':'Add'}}</v-btn>
                    </v-flex>
                </v-container>
            </v-form>
        </v-card>
    </v-dialog>
</v-content>
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
            types: ['Casting', 'Spinning'],
            colors: ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Pink', 'Purple', 'Orange', 'Gold', 'Silver']
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
        ...sync('reel/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('reel/*'),
        /******* Methods default run ******/
        load: async function () {

        }
    },
}
</script>
