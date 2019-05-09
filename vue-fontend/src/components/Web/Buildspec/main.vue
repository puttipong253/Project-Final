<template>
<v-card height="700px" color="grey lighten-2">
    <v-stepper v-model="e1">
        <div class="v-background">
            <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1" color="green">Rods</v-stepper-step>

                <v-divider color="yellow"></v-divider>

                <v-stepper-step :complete="e1 > 2" step="2" color="green">Reels</v-stepper-step>

                <v-divider color="yellow"></v-divider>

                <v-stepper-step :complete="e1 > 3" step="3" color="green">Lines</v-stepper-step>

                <v-divider color="yellow"></v-divider>

                <v-stepper-step :complete="e1 > 4" step="4" color="green">Hooks</v-stepper-step>

                <v-divider color="yellow"></v-divider>

                <v-stepper-step :complete="e1 > 5" step="5" color="green">Specs</v-stepper-step>
            </v-stepper-header>
        </div>

        <v-stepper-items>
            <v-stepper-content step="1">
                <Step1 />
            </v-stepper-content>

            <v-stepper-content step="2">
                <Step2 />
            </v-stepper-content>

            <v-stepper-content step="3">
                <Step3 />
            </v-stepper-content>

            <v-stepper-content step="4">
                <Step4 />
            </v-stepper-content>

            <v-stepper-content step="5">
                <Step5/>
            </v-stepper-content>

        </v-stepper-items>
    </v-stepper>
</v-card>
</template>

<script>
import Step1 from '@/components/Web/Buildspec/Step1'
import Step2 from '@/components/Web/Buildspec/Step2'
import Step3 from '@/components/Web/Buildspec/Step3'
import Step4 from '@/components/Web/Buildspec/Step4'
import Step5 from '@/components/Web/Buildspec/Step5'

import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
    components: {
        Step1,
        Step2,
        Step3,
        Step4,
        Step5
    },
    data() {
        return {

        }
    },
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
    mounted() {
      
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed: {

        ...sync('user/*'),
        ...sync('calculate/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
       
    },
}
</script>

<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;

}

.z-index {
    z-index: 1 !important;
}

.v-background {
    background: #E0E0E0 !important;
}

.v-dialog {
    background: #424242 !important;
}

.small {
    max-width: 600px;

}
</style>
