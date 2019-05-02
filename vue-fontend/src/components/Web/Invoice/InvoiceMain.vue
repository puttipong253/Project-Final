<!----------Make By YourName---------------->
 <template>
<div>
    <v-container fluid grid-list-xl>
        <v-card height="500px">
        <v-layout row justify-space-between>
            
            <v-flex xs2>
                    <v-card-text>Username</v-card-text>
            </v-flex>
            <v-flex xs2>
                    <v-card-text>Spec NO.</v-card-text>
            </v-flex>
           
        </v-layout>
        </v-card>
    </v-container>
    <br>
    <div class="text-xs-center">
        <v-btn color="purple accent-3">Export to PDF</v-btn>
    </div>
</div>
</template>

<script>
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

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>
