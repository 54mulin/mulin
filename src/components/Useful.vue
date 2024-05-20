<template>
    <v-empty-state image="https://vuetifyjs.b-cdn.net/docs/images/components/v-empty-state/astro-dog.svg" size="200"
        text-width="250">
        <template #media>
            <v-img class="mb-8"></v-img>
        </template>

        <template #title>
            <div class="text-h6 text-high-emphasis">Empty in drafts</div>
        </template>

        <template #text>
            <div class="text-body-1">
                Save a draft message and it will show up here
            </div>
        </template>
    </v-empty-state>
</template>
