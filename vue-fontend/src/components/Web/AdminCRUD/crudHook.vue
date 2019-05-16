<!----------Make By YourName---------------->
  <template>
<v-card>
    <v-card-title>
        <v-btn @click="hookDialogSwitch(true)" color="success" fab><v-icon>add</v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>

    <v-data-table :headers="headers" :items="hookList" :search="search">
        <template v-slot:items="props" text-xs-center>
            <td>{{ props.item.id }}</td>
            <td>
                <v-img :src="props.item.hook_image"></v-img>
            </td>
            <td>{{ props.item.hook_name }}</td>
            <td>{{ props.item.hook_size }}</td>
            <td>{{ props.item.hook_type }}</td>
            <td>{{ props.item.hook_color }}</td>
            <td>{{ props.item.hook_brand }}</td>
            <td>{{ props.item.hook_price }}</td>
            <td>
                <v-btn @click="getHookOnce( props.item.id )" fab small color="primary"><v-icon>create</v-icon></v-btn>
                <v-btn @click="deleteHook( props.item.id )" fab small color="error"><v-icon>delete_outline</v-icon></v-btn>
            </td>
        </template>
        <v-alert v-slot:no-results :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
        </v-alert>
    </v-data-table>
    <hookDialog />
</v-card>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import hookDialog from "@/components/Web/Home/hookDialog";
export default {
    name: 'crudhook',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        hookDialog
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
                    value: 'hook_image'
                },
                {
                    text: 'Name',
                    value: 'hook_name'
                },
                {
                    text: 'size',
                    value: 'hook_size'
                },
                {
                    text: 'type',
                    value: 'hook_type'
                },
                {
                    text: 'color',
                    value: 'hook_color'
                },
                {
                    text: 'brand',
                    value: 'hook_brand'
                },
                {
                    text: 'price',
                    value: 'hook_price'
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
        ...sync('hook/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('hook/*'),
        /******* Methods default run ******/
        async load() {
            await this.getHookList();
        }
    },
}
</script>
