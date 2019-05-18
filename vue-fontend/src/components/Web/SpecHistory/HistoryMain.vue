<!----------Make By YourName---------------->
 <template>
<div class="pd-40">
    <v-card-title>
        <h2>SpecHistory</h2>
        <v-spacer></v-spacer>
        <v-text-field v-if="print" v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <!-- <v-layout row wrap>
        <v-text-field v-if="print" solo v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
        <v-btn v-if="print" round @click="printOn()" color="success">Open Print Mode</v-btn>
        <v-btn v-if="!print" round @click="printing()" dark color="Blue">Print Now</v-btn>
        <v-btn v-if="!print" round @click="printOff()" dark color="red">Close Print Mode</v-btn>
    </v-layout> -->

    <br><br>
    <v-data-table v-if="tableData" :search="search" :headers="headers" :items="specList">
        <template v-slot:items="props">
            <td class="text-xs-center">
                {{ props.item.id}}
            </td>
            <td class="text-xs-center">
                {{ props.item.created_at}}
            </td>
            <td class="text-xs-center"><br>
                <img class="hg120" :src="props.item.hook_image"><br>
                {{ props.item.hook_name }} <br>
                {{ props.item.hook_price }} $
            </td>
            <td class="text-xs-center"><br>
                <img class="hg120" :src="props.item.line_image"><br>
                {{ props.item.line_name }} <br>
                {{ props.item.line_price }} $
            </td>
            <td class="text-xs-center"><br>
                <img class="hg120" :src="props.item.reel_image"><br>
                {{ props.item.reel_name }} <br>
                {{ props.item.reel_price }} $
            </td>
            <td class="text-xs-center"><br>
                <img class="hg120" :src="props.item.rod_image"><br>
                {{ props.item.rod_name }} <br>
                {{ props.item.rod_price }} $
            </td>
            <td class="text-xs-center">
                <v-btn @click="printing(props.item)" small color="primary">
                    <v-icon>print</v-icon>&nbsp;Print
                </v-btn>
                <v-btn @click="deleteSpec( props.item.id )" small color="error">
                    <v-icon>delete_outline</v-icon>Delete
                </v-btn>
            </td>
        </template>
    </v-data-table>
    <v-dialog v-model="dialogPrint" scrollable fullscreen persistent :overlay="false"  transition="dialog-transition">
        <VCard height="850">
            <v-container row >
                <h1 class="fs26"><b>FISHING SPEC</b></h1><h1 class="fs16 text-xs-right"><b>Spec ID :</b> {{printData.id}}</h1>
                <center>
                    <h2 class="fs26">Purchase Order</h2>
                </center>
                <h1 class="fs17 text-xs-left"><b>Customer Detail</b></h1>
                <h1 class="fs16 text-xs-left"><b>Name :</b> {{userData.name}} &nbsp; <b>Surname :</b> {{userData.surname}}</h1>
                <h1 class="fs16 text-xs-left"><b>Spec Date :</b> {{ printData.created_at}}</h1>

                <table class="w3-table-all" height="300px">
                    <thead>
                        <tr class="grey lighten-2">
                            <th class="text-xs-left ">NUMBER</th>
                            <th class="text-xs-left">ITEM DESCRIPTION</th>
                            <th class="text-xs-right">QTY</th>
                            <th class="text-xs-right">UNIT</th>
                            <th class="text-xs-right">UNIT PRICE</th>
                            <th class="text-xs-right">TOTAL PRICE</th>
                        </tr>
                    </thead>
                    <tr>
                        <td class="text-xs-left white">1</td>
                        <td class="text-xs-left white">{{ printData.rod_name }} {{printData.rod_type }} Rod</td>
                        <td class="text-xs-right white">1</td>
                        <td class="text-xs-right white">rod</td>
                        <td class="text-xs-right white"> {{ printData.rod_price }} ฿</td>
                        <td class="text-xs-right white"> {{ printData.rod_price }} ฿</td>
                    </tr>
                    <tr>
                        <td class="text-xs-left white">2</td>
                        <td class="text-xs-left white">{{ printData.reel_name }} {{printData.reel_type }} Reel</td>
                        <td class="text-xs-right white">1</td>
                        <td class="text-xs-right white">piece</td>
                        <td class="text-xs-right white"> {{ printData.reel_price }} ฿</td>
                        <td class="text-xs-right white"> {{ printData.reel_price }} ฿</td>
                    </tr>
                    <tr>
                        <td class="text-xs-left white">3</td>
                        <td class="text-xs-left white">{{ printData.line_name }} {{printData.line_type }} </td>
                        <td class="text-xs-right white">1</td>
                        <td class="text-xs-right white">piece</td>
                        <td class="text-xs-right white"> {{ printData.line_price }} ฿</td>
                        <td class="text-xs-right white"> {{ printData.line_price }} ฿</td>
                    </tr>
                    <tr>
                        <td class="text-xs-left white">4</td>
                        <td class="text-xs-left white">{{ printData.hook_name }} {{printData.hook_type }} </td>
                        <td class="text-xs-right white">1</td>
                        <td class="text-xs-right white">pack</td>
                        <td class="text-xs-right white"> {{ printData.hook_price }} ฿</td>
                        <td class="text-xs-right white"> {{ printData.hook_price }} ฿</td>
                    </tr>
                    
                </table><br><br>
                <div class="text-xs-right ">
                    
                <b><U>Grand Total</U></b>  &nbsp;  {{ printData.rod_price+printData.reel_price+printData.line_price+printData.hook_price}} ฿
                
                </div>
            </v-container>
            <!-- <v-btn  @click="printOn()" color="primary">
                <v-icon>print</v-icon>&nbsp;Print
            </v-btn> -->
            <v-btn  @click="closeDialogPrint()" color="red" dark>
                <v-icon>close</v-icon>close
            </v-btn>
        </VCard>
    </v-dialog>
</div>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
    name: 'historymain',
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
                    text: 'ID',
                    value: 'id'
                },
                {
                    text: 'Time',
                    value: 'created_at'
                },
                {
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
            printData: {},
            dialogPrint: false,
            tableData: true,
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
        ...sync('spec/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('user/*'),
        ...call('calculate/*'),
        ...call('spec/*'),
        async printOn() {
            window.print();
            /* if(!this.print){
                 window.print();
             } */

        },
        async printing(data) {
            // window.print();
            this.printData = data;
            this.dialogPrint = true;
            this.tableData = false;
        },
        async closeDialogPrint() {
            this.dialogPrint = false;
            this.tableData = true;
        },
        /******* Methods default run ******/
        load: async function () {
            await this.showSpec();
            console.log('Error');
        }
    },
}
</script>

