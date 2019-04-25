<!----------Make By YourName---------------->
  <template>
<v-card>
    <v-card-title>
        <v-btn @click="reelDialogSwitch(true)" color="success">Add</v-btn>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="reelList" :search="search">
        <template v-slot:items="props" text-xs-center>
            <td>{{ props.item.id }}</td>
            <td>
                <v-img :src="props.item.reel_image"></v-img>
            </td>
            <td>{{ props.item.reel_name }}</td>
            <td>{{ props.item.reel_size }}</td>
            <td>{{ props.item.reel_type }}</td>
            <td>{{ props.item.reel_color }}</td>
            <td>{{ props.item.reel_brand }}</td>
            <td>{{ props.item.reel_price }}</td>
            <td>
                <v-btn @click="getReelOnce( props.item.id )" small color="primary">Edit</v-btn><br/>
                <v-btn @click="deleteReel( props.item.id )" small color="error">Delete</v-btn>
            </td>
        </template>
        <v-alert v-slot:no-results :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
        </v-alert>
    </v-data-table>
    <reelDialog />
</v-card>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import reelDialog from "@/components/Web/Home/reelDialog";
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        reelDialog
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
                    value: 'reel_image'
                },
                {
                    text: 'Name',
                    value: 'reel_name'
                },
                {
                    text: 'Size',
                    value: 'reel_size'
                },
                {
                    text: 'Type',
                    value: 'reel_type'
                },
                {
                    text: 'Color',
                    value: 'reel_color'
                },
                {
                    text: 'Brand',
                    value: 'reel_brand'
                },
                {
                    text: 'Price',
                    value: 'reel_price'
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
        ...sync('reel/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('reel/*'),
        /******* Methods default run ******/
        async load() {
            await this.getReelList();
        }
    },
}
</script>
