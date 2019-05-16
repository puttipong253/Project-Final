<!----------Make By YourName---------------->
 <template>
<v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
        <v-flex xs12 md8>
            <v-card>
                <Center>
                    <h1>User Profile</h1>
                </Center>
                <form @submit.prevent="saveUser()">
                    <v-container py-0>
                        <v-layout wrap>
                            <v-flex xs12 md12>
                                <v-text-field v-model="userData.email" class="purple-input" label="Email (Not Edit)" />
                            </v-flex>
                            <v-flex xs12 md6>
                                <v-text-field v-model="userData.name" label="Name" :readonly="edit" />
                            </v-flex>
                            <v-flex xs12 md6>
                                <v-text-field v-model="userData.surname" label="Surname" :readonly="edit" />
                            </v-flex>
                            <v-flex xs12 text-xs-center>
                                <v-btn v-if="!edit" type="submit" color="success">Save User Data</v-btn>

                                <v-btn v-if="pass" @click="pass = false" color="yellow">Change Password</v-btn>
                                <v-btn v-if="edit" @click="edit = false" color="primary">Edit</v-btn>
                                <v-btn v-if="!edit" @click="edit = true" color="red" dark>Close</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </form>
                <form v-if="!pass" @submit.prevent="cpass()">
                    <v-container py-0>
                        <v-layout wrap>
                            <v-flex xs12 md12>
                                <v-text-field type="password" v-model="password" label="New Password" />
                            </v-flex>
                            <v-flex xs12 md12>
                                <v-text-field type="password" v-model="passs" label="Confirm Password" />
                            </v-flex>
                            <v-flex xs12 text-xs-center>
                                <v-btn v-if="password !='' && password == passs" type="submit" color="success">Save Password</v-btn>
                                <v-btn v-if="!pass" @click="pass = true" color="red" dark>Close</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </form>
            </v-card>
        </v-flex>

    </v-layout>
</v-container>
<!-- <div class="pd-30">
    <Center>
        <h1>User Profile</h1>
    </Center>
    <form @submit.prevent="saveUser()" height="
    500px">
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

</div> -->
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
                id:this.userData.id,
                password: this.password
            }
            await this.updatePassword(pass);
            this.pass = true;
            //await location.reload();

        },
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>
