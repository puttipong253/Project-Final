<!----------Make By YourName---------------->
  <template>
<v-card>
    <v-card-title>
        <v-btn @click="lineDialogSwitch(true)" color="success">Add</v-btn>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="lineList" :search="search">
        <template v-slot:items="props" text-xs-center>
            <td>{{ props.item.id }}</td>
            <td>
                <v-img :src="props.item.line_image"></v-img>
            </td>
            <td>{{ props.item.line_name }}</td>
            <td>{{ props.item.line_size }}</td>
            <td>{{ props.item.line_type }}</td>
            <td>{{ props.item.line_color }}</td>
            <td>{{ props.item.line_brand }}</td>
            <td>{{ props.item.line_price }}</td>
            <td>
                <v-btn @click="getLineOnce( props.item.id )" small color="primary">Edit</v-btn><br/>
                <v-btn @click="deleteLine( props.item.id )" small color="error">Delete</v-btn>
            </td>
        </template>
        <v-alert v-slot:no-results :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
        </v-alert>
    </v-data-table>
    <lineDialog/>
</v-card>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import lineDialog from "@/components/Web/Home/lineDialog";
export default {
    name: 'crudline',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        lineDialog
    },
    /*-------------------------Set Component---------------------------------------*/
    props: {

    },
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {
            search: '',
            headers: [{
                    text: 'Id',
                    value: 'id'
                },
                {
                    text: 'Image',
                    value: 'line_image'
                },
                {
                    text: 'Name',
                    value: 'line_name'
                },
                {
                    text: 'Size',
                    value: 'line_size'
                },
                {
                    text: 'Type',
                    value: 'line_type'
                },
                {
                    text: 'Color',
                    value: 'line_color'
                },
                {
                    text: 'Brand',
                    value: 'line_brand'
                },
                {
                    text: 'Price',
                    value: 'line_price'
                },
                {
                    text: 'Action',
                    sortable: false,
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
        ...sync('line/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('line/*'),
        /******* Methods default run ******/
        async load() {
            await this.getLineList();
        }
    },
}
</script>
