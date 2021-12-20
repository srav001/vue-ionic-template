<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title class="ml-1">Yay!</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="text-center">
            <h1 class="text-center mt-3">Routing Works !</h1>

            <ion-modal :is-open="modalIsOpen" @did-dismiss="modalIsOpen = false">
                <about-modal @on-close="modalIsOpen = false" />
            </ion-modal>
            <ion-button class="mt-3" @click="showModal()">Open Modal</ion-button>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
    IonContent,
    IonButton,
    IonButtons,
    IonBackButton,
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonModal,
} from "@ionic/vue";
import AboutModal from "../components/AboutModal.vue";

const modalIsOpen = ref(false);
const showModal = () => {
    modalIsOpen.value = true;
};

</script>

<style>
</style>
