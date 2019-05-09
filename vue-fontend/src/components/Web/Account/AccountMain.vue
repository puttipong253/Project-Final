<!----------Make By YourName---------------->
 <template>
<div class="pd-30">
    <Center>
        <h1>User Profile</h1>
    </Center>
    <form @submit.prevent="saveUser()">
        <VTextField v-model="userData.email" label="Email (Not Edit)" />
        <VTextField v-model="userData.name" label="Name" :readonly="edit" />
        <VTextField v-model="userData.surname" label="Surname" :readonly="edit" />
        <v-btn v-if="!edit" type="submit" color="success">Save User Data</v-btn>

        <v-btn v-if="pass" @click="pass = false" color="yellow">Change Password</v-btn>
        <v-btn v-if="edit" @click="edit = false" color="primary">Edit</v-btn>
        <v-btn v-if="!edit" @click="edit = true" color="red" dark>Close</v-btn>
    </form>

    <form v-if="!pass" @submit.prevent="cpass()">
        <VTextField type="password" v-model="password" label="New Password" />
        <VTextField type="password" v-model="passs" label="Confirm Password" />
        <v-btn v-if="password !='' && password == passs" type="submit" color="success">Save Password</v-btn>
        <v-btn v-if="!pass" @click="pass = true" color="red" dark>Close</v-btn>
    </form>

    <br><br>

</div>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
    name: 'accountmain',
    /*-------------------------Load Component---------------------------------------*/
    components: {

    },
    /*-------------------------Set Component---------------------------------------*/
    props: {

    },
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {
            edit: true,
            pass: true,
            password: '',
            passs: '',
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
        async saveUser() {
            await this.updateUser();
            this.edit = true;
            await location.reload();
        },
        async cpass() {
            let pass = {
                password: this.password
            }
            await this.updatePassword(pass);
            this.pass = true;
            await location.reload();

        },
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>
