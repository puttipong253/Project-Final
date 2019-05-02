<!----------Make By YourName---------------->
 <template>
<v-content>
    <v-dialog v-model="hookDialog"  persistent :overlay="false" max-width="500px" transition="dialog-transition">
        <v-card>
            <v-toolbar dark color="primary">
                <v-toolbar-title>Add Hook</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark flat @click="hookDialogSwitch(false)" icon>
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-form @submit.prevent="storeHook()">
                <v-container>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="hookForm.hook_name" type="text" label="Name"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="hookForm.hook_size" type="number" label="Size"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-select v-model="hookForm.hook_type" :items="types" label="Type"></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-select v-model="hookForm.hook_color" :items="colors" label="Color"></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="hookForm.hook_brand" type="text" label="brand"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field v-model="hookForm.hook_price" type="number" label="price"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <img v-if="hookForm.id" :src="hookForm.hook_image" alt="">
                            <img v-else-if="hookForm" :src="hookForm.hook_image" alt="">
                            <image-uploader :preview="false" :maxWidth="150" v-model="hookForm.hook_image" ></image-uploader>
                        </v-flex>

                    </v-layout>
                    <v-flex text-xs-center>
                        <v-btn type="submit" color="success">{{(hookForm.id)?'Update':'Add'}}</v-btn>
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
            types: ['Single Hook', 'Double Hook', 'Triple Hook'],
            colors: ['Gold', 'Black', 'Silver','Red'],
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
        ...sync('hook/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('hook/*'),

        /******* Methods default run ******/
        load: async function () {

        }
    },
}
</script>
