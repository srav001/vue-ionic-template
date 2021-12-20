<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title class="text-center">Home Page</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="row justify-center m-0 p-3">
                <ion-card class="col-xl-4 col-lg-5 col-md-5 col-sm-6 col-12">
                    <ion-card-header>
                        <ion-card-subtitle>First Page</ion-card-subtitle>
                        <ion-card-title>Welcome Home</ion-card-title>
                    </ion-card-header>

                    <ion-card-content class="text-center">
                        <p>This is just to show bootstrap's grid system can be used with tailwind to create responsive UI with great customizability easily.</p>
                        <ion-button class="pt-1" router-link="/about">Click Me</ion-button>
                    </ion-card-content>
                </ion-card>
            </div>
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
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent
} from "@ionic/vue";
</script>

<style>
</style>
