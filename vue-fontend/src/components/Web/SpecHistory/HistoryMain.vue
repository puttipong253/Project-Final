<!----------Make By YourName---------------->
 <template>
<div class="pd-40">
    <v-layout row wrap>
        <v-text-field v-if="print" solo v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
        <v-btn v-if="print" round @click="printOn()" color="success">Open Print Mode</v-btn>
        <v-btn v-if="!print" round @click="printing()" dark color="Blue">Print Now</v-btn>
        <v-btn v-if="!print" round @click="printOff()" dark color="red">Close Print Mode</v-btn>
    </v-layout>

    <br><br>
    <v-data-table :search="search" :headers="headers" :items="addData">
        <template v-slot:items="props">
            <td>
                <div class="text-xs-center">
                    <img class="hg120" :src="props.item.hook_image"><br>
                    {{ props.item.hook_name }} <br>
                    {{ props.item.hook_price }} $
                </div>
            </td>
            <td>
                <div class="text-xs-center">
                    <img class="hg120" :src="props.item.line_image"><br>
                    {{ props.item.line_name }} <br>
                    {{ props.item.line_price }} $
                </div>
            </td>
            <td>
                <div class="text-xs-center">
                    <img class="hg120" :src="props.item.reel_image"><br>
                    {{ props.item.reel_name }} <br>
                    {{ props.item.reel_price }} $
                </div>
            </td>
            <td>
                <div class="text-xs-center">
                    <img class="hg120" :src="props.item.rod_image"><br>
                    {{ props.item.rod_name }} <br>
                    {{ props.item.rod_price }} $
                </div>
            </td>
            <td>
                <div class="text-xs-center">
                   <v-btn class="error">
                       Invoice
                   </v-btn>
                </div>
            </td>
        </template>
    </v-data-table>
</div>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
    name: 'invoicemain',
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
            headers: [{
                    text: 'Hook',
                    value: 'hook_name'
                },
                {
                    text: 'Line',
                    value: 'line_name'
                },
                {
                    text: 'Reel',
                    value: 'reel_name'
                },
                {
                    text: 'Rod',
                    value: 'rod_name'
                },
                {
                    text: 'Action',
                    value: 'view'
                }
            ],
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
        ...sync('user/*'),
        ...sync('calculate/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('user/*'),
        ...call('calculate/*'),
        async printOn() {
            this.print = false;
            /* if(!this.print){
                 window.print();
             } */

        },
        async printing() {
            window.print();
        },
        async printOff() {
            this.print = true;
        },
        /******* Methods default run ******/
        load: async function () {
            await this.showSpec();
            console.log('Error');
        }
    },
}
</script>
