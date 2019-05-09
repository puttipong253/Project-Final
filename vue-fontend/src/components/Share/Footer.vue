<!----------Make By YourName---------------->

 <template>
<v-footer dark height="auto">
    <v-card class="flex" flat tile>
        <v-card-title class="teal">
            <strong class="subheading">Get connected with us on social networks!</strong>
            <v-spacer></v-spacer>
            <v-btn a target="_blank" href="https://www.facebook.com/profile.php?id=100003719200402" dark icon>
                <v-icon size="24px">fab fa-facebook</v-icon>
            </v-btn>
            <v-btn a target="_blank" href="https://mail.google.com/" dark icon>
                <v-icon size="24px">fab fa-google-plus</v-icon>
            </v-btn>
        </v-card-title>
        <v-card-actions class="grey darken-3 justify-center">
            &copy;2018 — <strong>Vuetify</strong>
        </v-card-actions>
    </v-card>
</v-footer>
</template>

<script>
export default {
    name: 'Footer',
    /*-------------------------Load Component---------------------------------------*/
    components: {

    },
    /*-------------------------Set Component---------------------------------------*/
    props: {

    },
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {
            icons: ['fab fa-facebook']
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
