<!----------Make By YourName---------------->
 <template>
<v-content>
    <v-dialog v-model="lineDialog" persistent :overlay="false" max-width="500px" transition="dialog-transition">
        <v-card>
            <v-toolbar dark color="primary">
                <v-toolbar-title>Add Line</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark flat @click="lineDialogSwitch(false)" icon>
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-form @submit.prevent="storeLine()">
                <v-container>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="lineForm.line_name" type="text" label="Name" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="lineForm.line_size" type="number" label="Size" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-select v-model="lineForm.line_type" :items="types" label="Type" required></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-select v-model="lineForm.line_color" :items="colors" label="Color" required></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="lineForm.line_brand" type="text" label="brand" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="lineForm.line_price" type="number" label="price" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <img v-if="lineForm.id" :src="lineForm.line_image" alt="">
                            <img v-else-if="lineForm" :src="lineForm.line_image" alt="">
                            <image-uploader :preview="false" :maxWidth="150" v-model="lineForm.line_image"></image-uploader>
                        </v-flex>
                    </v-layout>
                    <v-flex text-xs-center>
                        <v-btn type="submit" color="success">{{(lineForm.id)?'Update':'Add'}}</v-btn>
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
            types:['Monofilament','PE'],
            colors:['Red','Blue','Green','Yellow','Black','White','Pink','Purple','Orange']
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
        ...sync('line/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('line/*'),
        /******* Methods default run ******/
        load: async function () {

        }
    },
}
</script>
