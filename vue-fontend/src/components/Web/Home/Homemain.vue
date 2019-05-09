<template>
<div class="bg-color">
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex md12>
                <v-card height="500px" color="red">
                    <v-parallax :src="require('@/assets/home_24.jpg')">
                        <div class="text-xs-center display-3 mb-5">
                            Welcome to BuildSpec
                        </div>
                    </v-parallax>
                </v-card>
            </v-flex>
            <v-flex md5>
                <v-card height="500px" color="light-green accent-3">
                    <v-parallax :src="require('@/assets/home_11.jpg')">

                    </v-parallax>
                </v-card>
            </v-flex>
            <v-flex md7>
                <v-card height="500px" color="blue">
                    <v-parallax :src="require('@/assets/home_22.jpg')">
                        <div class="text-xs-center">
                            <h1>BuildSpec Fishing Tools</h1>
                        </div>
                    </v-parallax>
                </v-card>
            </v-flex>
        </v-layout>
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
