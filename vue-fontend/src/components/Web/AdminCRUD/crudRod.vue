<!----------Make By YourName---------------->
  <template>
<v-card>
    <v-card-title>
        <v-btn @click="rodDialogSwitch(true)" color="success" fab><v-icon>add</v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="rodList" :search="search">
        <template v-slot:items="props" text-xs-center>
            <td>{{ props.item.id }}</td>
            <td>
                <v-img :src="props.item.rod_image"></v-img>
            </td>
            <td>{{ props.item.rod_name }}</td>
            <td>{{ props.item.rod_length }}</td>
            <td>{{ props.item.rod_line }}</td>
            <td v-if="props.item.rod_power == 0">NP</td>
            <td v-else-if="props.item.rod_power == 1">UL</td>
            <td v-else-if="props.item.rod_power == 2">L</td>
            <td v-else-if="props.item.rod_power == 3">M</td>
            <td v-else-if="props.item.rod_power == 4">ML</td>
            <td v-else-if="props.item.rod_power == 5">MH</td>
            <td v-else-if="props.item.rod_power == 6">H</td>
            <td v-else-if="props.item.rod_power == 7">EH</td>
            <td v-else-if="props.item.rod_power == 8">UH</td>
            <td>{{ props.item.rod_type }}</td>
            <td>{{ props.item.rod_color }}</td>
            <td>{{ props.item.rod_brand }}</td>
            <td>{{ props.item.rod_price }}</td>
            <td>
                <v-btn @click="getRodOnce( props.item.id )" fab small color="primary"><v-icon>create</v-icon></v-btn>
                <v-btn @click="deleteRod( props.item.id )" fab small color="error"><v-icon>delete_outline</v-icon></v-btn>
            </td>
        </template>
        <v-alert v-slot:no-results :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
        </v-alert>
    </v-data-table>
    <rodDialog />
</v-card>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import rodDialog from "@/components/Web/Home/rodDialog";
export default {
    name: 'crudrod',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        rodDialog
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
                    value: 'rod_image'
                },
                {
                    text: 'Name',
                    value: 'rod_name'
                },
                {
                    text: 'Length',
                    value: 'rod_length'
                },
                {
                    text: 'Line Weight',
                    value: 'rod_line'
                },
                                {
                    text: 'Power',
                    value: 'rod_power'
                },
                {
                    text: 'Type',
                    value: 'rod_type'
                },
                {
                    text: 'Color',
                    value: 'rod_color'
                },
                {
                    text: 'Brand',
                    value: 'rod_brand'
                },
                {
                    text: 'Price',
                    value: 'rod_price'
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
        this.checkSpec(rod_power);
            
        
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
        ...sync('calculate/*'),
        /******* Methods default run ******/
        async load() {
            await this.getRodList();
        }
    },
}
</script>
