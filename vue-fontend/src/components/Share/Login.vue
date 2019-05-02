<template>
<v-dialog width="400px">
    <v-btn flat slot="activator">
        <v-icon>lock_open</v-icon>
        <span class="mr-2" >Login</span>
    </v-btn>
    <v-card>
        <v-card-title>
            <h2>Login</h2>
        </v-card-title>
        <v-card-text>
            <form @submit.prevent="login()">
                <v-text-field label="Email" type="email" v-model="loginForm.email" required></v-text-field>
                <v-text-field label="Password" type="password" v-model="loginForm.password" required></v-text-field>
                <v-btn class="primary" type="submit">Login</v-btn>
            </form>
        </v-card-text>
    </v-card>
</v-dialog>
</template>

    
<script>
	import { get,sync ,call} from "vuex-pathify"; 
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
        ...sync('user/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
         ...call('user/*'),
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>
