<template>
<div class="bg-color">
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex md12>
                <v-card height="500px" color="red"></v-card>
            </v-flex>
            <v-flex md6>
                <v-card height="500px" color="light-green accent-3"></v-card>
            </v-flex>
            <v-flex md6>
                <v-card height="500px" color="blue"></v-card>
            </v-flex>
        </v-layout>
        <br>
        <div class="text-xs-center">
            <v-btn color="yellow darken-1">
                How to BuildSpec
            </v-btn>

            <!-- <v-icon>mdi-facebook-box</v-icon>  -->

        </div>
    </v-container>
</div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            items: [{
                    src: '/assets/home_1.jpg'
                },
                {
                    src: '..//assets/home_2.jpg'
                },
            ]
        }
    }
}
</script>

<style>
.bg-color {
    background: #757575 !important;
}
</style>
