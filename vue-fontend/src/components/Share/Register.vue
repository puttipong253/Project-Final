<!----------Make By YourName---------------->
<template>
<v-dialog v-model="registerDialog" width="400px" persistent>
    <v-btn flat slot="activator">
        <v-icon>assignment_ind</v-icon>
        <span class="mr-2" >Register</span>
    </v-btn>
    <v-card>
        <v-toolbar dark color="primary">
            <v-toolbar-title>Register</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn dark flat @click="registerDialogSwitch(false)" icon>
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
            <form @submit.prevent="register()">
                <v-text-field label="Name" type="text" v-model="registerForm.name" required></v-text-field>
                <v-text-field label="Surname" type="text" v-model="registerForm.surname" required></v-text-field>
                <v-text-field label="Password" type="password" v-model="registerForm.password" required></v-text-field>
                <v-text-field label="E-mail" type="email" v-model="registerForm.email" required></v-text-field>
                <v-btn class="primary" type="submit"><v-icon>account_box</v-icon>&nbsp;Submit</v-btn>
            </form>
        </v-card-text>
    </v-card>
</v-dialog>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
    name: 'Register',
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
        /******* Methods default run ******/
        ...call('user/*'),
        load: async function () {}
    },
}
</script>
