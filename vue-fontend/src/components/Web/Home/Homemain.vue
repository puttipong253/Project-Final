<template>
<div class="bg-color">
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex md12>
                <v-card height="570px">
                    <v-img :src="require('@/assets/home_24.jpg')">
                        <div class="text">
                            Welcome to BuildSpec
                        </div>
                        <div class="text2">
                            BuildSpec for Fishing
                        </div><br>
                        <div v-if="userData.id" class="text-xs-center">
                            <v-btn class="blue-grey darken-1 white--text" onclick="window.location.href='/buildspec';">BuildSpec</v-btn>
                        </div>
                    </v-img>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
    components: {

    },
    data() {
        return {
            items: [{
                    src: '/assets/home_1.jpg'
                },
                {
                    src: './assets/home_2.jpg'
                },
            ]
        }
    },
    computed: {
        ...sync('user/*')
    },
}
</script>

<style>
.bg-color {
    background: #757575 !important;
}

.text {
    margin-top: 150px;
    color: #FFF176;
    font-size: 80px;
    text-align: center;
}

.text2 {
    color: #FFF176;
    font-size: 50px;
    text-align: center;
}
</style>
