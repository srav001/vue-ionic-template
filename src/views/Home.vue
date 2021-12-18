<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Welcome to Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Home</h1>
      <ion-button router-link="/about">Click Me</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonButton,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
</script>

<style>
</style>
