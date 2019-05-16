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
                <v-btn @click="printing(props.item)" small color="primary"><v-icon>print</v-icon>&nbsp;Print</v-btn>
                <v-btn @click="deleteSpec( props.item.id )" small color="error"><v-icon>delete_outline</v-icon>Delete</v-btn>
            </td>
        </template>
    </v-data-table>
    <v-dialog v-model="dialogPrint" scrollable fullscreen persistent :overlay="false" max-width="500px" transition="dialog-transition">
        <VCard>
            <v-container row wrap>
                <center>
                    <h1 class="fs26"><b>Purchase Order</b></h1>
                </center>
                <hr>
                <h1 class="fs16"><b>UserName :</b> {{userData.name}}</h1>
                <h1 class="fs16"><b>Order Number :</b> {{printData.id}}</h1>
                <h2 class="fs16"><b>Spec Date :</b> {{ printData.created_at}}</h2>
                <table class="w3-table-all" height="300px">
                    <thead>
                        <tr class="w3-light-grey text-xs-center">
                            <th class="text-xs-center">ProductID</th>
                            <th class="text-xs-center">ProductType</th>
                            <th class="text-xs-center">ProductName</th>
                            <th class="text-xs-center">ProductPrice</th>
                        </tr>
                    </thead>
                    <tr>
                        <td class="text-xs-center">{{ printData.rod_id }}</td>
                        <td class="text-xs-center">Fishing Rod</td>
                        <td class="text-xs-center">{{ printData.rod_name }}</td>
                        <td class="text-xs-center"> {{ printData.rod_price }} $</td>
                    </tr>
                    <tr>
                        <td class="text-xs-center">{{ printData.reel_id }}</td>
                        <td class="text-xs-center">Fishing Reel</td>
                        <td class="text-xs-center">{{ printData.reel_name }}</td>
                        <td class="text-xs-center"> {{ printData.reel_price }} $</td>
                    </tr>
                    <tr>
                        <td class="text-xs-center">{{ printData.line_id }}</td>
                        <td class="text-xs-center">Fishing Line</td>
                        <td class="text-xs-center">{{ printData.line_name }}</td>
                        <td class="text-xs-center"> {{ printData.line_price}} $</td>
                    </tr>
                    <tr>
                        <td class="text-xs-center">{{ printData.hook_id }}</td>
                        <td class="text-xs-center">Fishing Hook</td>
                        <td class="text-xs-center">{{ printData.hook_name }}</td>
                        <td class="text-xs-center"> {{ printData.hook_price}} $</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td class="text-xs-right">SumPrice</td>
                        <td class="text-xs-center"> {{ printData.rod_price+printData.reel_price+printData.line_price+printData.hook_price}} $</td>
                    </tr>
                </table>
            </v-container>
            <v-btn @click="printOn()" color="primary"><v-icon>print</v-icon>&nbsp;Print</v-btn>
            <v-btn @click="closeDialogPrint()" color="red" dark><v-icon>close</v-icon>close</v-btn>
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
