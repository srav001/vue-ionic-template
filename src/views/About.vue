<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Yay! </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Routing Works !</h1>
      <!-- MODAL CODE -->
      <ion-modal :is-open="modalIsOpen" @didDismiss="closeModal()">
        <about-modal @onClose="closeModal" />
      </ion-modal>
      <ion-button @click="showModal">Open Modal</ion-button>
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

const closeModal = () => {
    modalIsOpen.value = false;
};
</script>

<style>
</style>
