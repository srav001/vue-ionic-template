<template>
    <base-view>
        <template #default-view-title>
            <div class="ml-1">Yay!</div>
        </template>
        <template #default-view-body>
            <h1 class="text-center mt-3">Routing Works !</h1>

            <ion-modal :is-open="modalIsOpen" @did-dismiss="modalIsOpen = false">
                <about-component @on-close="modalIsOpen = false" />
            </ion-modal>

            <div class="col-12 text-center mt-3">
                <ion-button @click="showModal()">Open Modal</ion-button>
            </div>
        </template>
    </base-view>
</template>

<script setup lang="ts">
/* eslint import/no-unresolved: [2, { ignore: ['\.vue$'] }] */

import { ref } from 'vue';

import { IonButton, IonModal } from '@ionic/vue';

import BaseView from 'core/BaseView.vue';

import AboutComponent from 'components/about/AboutComponent.vue';

const modalIsOpen = ref(false);
const showModal = () => {
    modalIsOpen.value = true;
};
</script>
