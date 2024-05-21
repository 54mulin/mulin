<template>
    <v-card class="ma-5 mx-auto" max-width="1000">
        <v-list density="compact">
            <v-list-subheader>Useful Links</v-list-subheader>
            <v-list-item v-for="(use, i) in uses" :key="i" :value="use.title" color="primary" :href="use.url" target="_blank">
                <template #prepend>
                    <v-icon :icon="use.icon"></v-icon>
                </template>
                <v-list-item-title  v-text="use.title" ></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
import { uses } from "./Useful.js";

export default {
    data() {
        return {
            uses: uses
        };
    }
};
</script>