<!----------Make By YourName---------------->
 <template>
<v-content>
    <v-dialog v-model="rodDialog" persistent :overlay="false" max-width="500px" transition="dialog-transition">
        <v-card>
            <v-toolbar dark color="primary">
                <v-toolbar-title>Add Rod</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark flat @click="rodDialogSwitch(false)" icon>
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-form @submit.prevent="storeRod()">
                <v-container>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="rodForm.rod_name" type="text" label="Name" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="rodForm.rod_length" type="number" label="Length" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="rodForm.rod_line" type="number" label="Line Weight" required></v-text-field>
                        </v-flex>
                       <v-flex xs12 sm6 md6>
                            <v-select v-model="rodForm.rod_power" :items="powers" label="Power" required></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-select v-model="rodForm.rod_type" :items="types" label="Type" required></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-select v-model="rodForm.rod_color" :items="colors" label="Color" required></v-select>                
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="rodForm.rod_brand" type="text" label="brand" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="rodForm.rod_price" type="number" label="price" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <img v-if="rodForm.id" :src="rodForm.rod_image" alt="">
                            <img v-else-if="rodForm" :src="rodForm.rod_image" alt="">
                            <image-uploader :preview="false" :maxWidth="150" v-model="rodForm.rod_image"></image-uploader>
                        </v-flex>
                    </v-layout>
                    <v-flex text-xs-center>
                        <v-btn type="submit" color="success">{{(rodForm.id)?'Update':'Add'}}</v-btn>
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
            types:['Casting','Spinning'],
            powers:['Ultra-Light (UL)',
                    'Light (L)',
                    'Medium (M)',
                    'Medium-Light (ML)',
                    'Medium-Heavy (MH)',
                    'Heavy (H)',
                    'Extra-Heavy (EH)',
                    'Ultra-Heavy (UH)'
            ],
            colors:['Red','Blue','Green','Yellow','Black','White','Pink','Purple','Orange','Gold','Silver']
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
        ...sync('rod/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('rod/*'),
        /******* Methods default run ******/
        load: async function () {

        }
    },
}
</script>
