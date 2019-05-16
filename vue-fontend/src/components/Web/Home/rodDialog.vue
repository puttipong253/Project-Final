<!----------Make By YourName---------------->
 <template>
<v-content>
    <v-dialog v-model="rodDialog" persistent :overlay="false" max-width="500px" transition="dialog-transition">
        <v-card>
            <v-toolbar dark color="primary">
                <v-toolbar-title v-if="!rodForm.id">Add Rod</v-toolbar-title>
                <v-toolbar-title v-else>Update Rod</v-toolbar-title>
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
                            <span v-if="rodForm.id">Power : {{check(rodForm.rod_power)}} </span>
                            <v-select v-model="rodForm.rod_power" item-text="name" item-value="value" :items="powers" label="Select Power" required></v-select>
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
                            <img v-if="rodForm.id" :src="rodForm.rod_image" alt>
                            <img v-else-if="rodForm" :src="rodForm.rod_image" alt>
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
    name: 'roddialog',
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
            powers: [{
                name: "NP",
                value: 0
            }, {
                name: "UL",
                value: 1
            }, {
                name: "L",
                value: 2
            }, {
                name: "M",
                value: 3
            }, {
                name: "ML",
                value: 4
            }, {
                name: "MH",
                value: 5
            }, {
                name: "H",
                value: 6
            }, {
                name: "EH",
                value: 7
            }, {
                name: "UH",
                value: 8
            }],
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
        ...sync('rod/*'),
        ...sync('calculate/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('rod/*'),
        ...call('calculate/*'),
        check(pow) {
            if (pow == 0) {
                return 'NP'
            } else if (pow == 1) {
                return 'UL'
            } else if (pow == 2) {
                return 'L'
            } else if (pow == 3) {
                return 'M'
            } else if (pow == 4) {
                return 'ML'
            } else if (pow == 5) {
                return 'MH'
            } else if (pow == 6) {
                return 'H'
            } else if (pow == 7) {
                return 'EH'
            } else if (pow == 8) {
                return 'UH'
            }
        },
        /******* Methods default run ******/
        load: async function () {

        }
    },
}
</script>
