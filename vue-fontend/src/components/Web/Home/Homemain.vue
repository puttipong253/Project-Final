<template>
<div class="bg-color">
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex md12>
                <v-card height="500px" color="red">
                    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
                </v-card>
            </v-flex>
            <v-flex md6>
                <v-card height="500px" color="light-green accent-3"></v-card>
            </v-flex>
            <v-flex md6>
                <v-card height="500px" color="blue">
                    <v-carousel hide-delimiters>
                        <v-carousel-item>
                            <img src="@/assets/home_1.jpg">
                        </v-carousel-item>
                        <v-carousel-item>
                            <img src="@/assets/home_2.jpg">
                        </v-carousel-item>
                    </v-carousel>
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
