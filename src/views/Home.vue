<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title class="text-center">Home Page</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="row welcome-page">
                <ion-card class="col-xl-4 col-lg-5 col-md-5 col-sm-6 col-12">
                    <ion-card-header>
                        <ion-card-subtitle>First Page</ion-card-subtitle>
                        <ion-card-title>Welcome Home</ion-card-title>
                    </ion-card-header>

                    <ion-card-content class="text-center">
                        <p>{{ welcomeText }}</p>
                        <ion-button class="pt-1" router-link="/about">Click Me</ion-button>
                    </ion-card-content>
                </ion-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

import { storeToRefs } from 'pinia';

import {
    IonContent,
    IonButton,
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent
} from "@ionic/vue";
// eslint-disable-next-line
import useStore from "../stores/main";

const mainStore = useStore();

const { welcomeText } = storeToRefs(mainStore);
// If you do not want to use 'welcome.value' use a reactive object can easier for people migrating for vue 2
const data = reactive({
    introductionText: welcomeText.value
});

if (data.introductionText === welcomeText.value) {
    console.log(data.introductionText);
}

</script>

<style lang="postcss">
    @import './views.css'
</style>
