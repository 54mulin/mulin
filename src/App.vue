<template>
  <v-app>
    <!-- <v-app-bar class="d-flex justify-center">

        <span class="ps-3 text-6 grey-darken-2" v-show="show" >Mulin</span>
        <v-spacer v-show="show"></v-spacer>
      <v-container class="pa-0 d-flex justify-center">
        <v-btn rounded class="text-light-green-darken-1 " v-for="item in allComponents" @click="changePage(item.id)">
          {{ item.title }}
        </v-btn>
      </v-container>
      <v-spacer v-show="show"></v-spacer>
    </v-app-bar> -->
    <v-app-bar>
      <v-app-bar-title>
        <v-container fluid class="pa-0 d-flex">
          <div  v-show="show" class="ma-auto text-6 grey-darken-2">Mulin</div>
          <v-spacer  v-show="show"></v-spacer>
          <v-btn-toggle >
            <v-btn rounded="xl" class="text-light-green-darken-1 " v-for="item in allComponents" @click="changePage(item.id)">
              {{ item.title }}
            </v-btn>
          </v-btn-toggle>
          <v-spacer  v-show="show"></v-spacer>
        </v-container>
      </v-app-bar-title>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <component :is="tab.component"></component>
    </v-main>
    <v-footer class="bg-grey-lighten-4 text-center d-flex flex-column">Last updated May 18, 2024 @ Mulin</v-footer>
  </v-app>
</template>

<script setup>
  import { computed } from 'vue'
  import { useDisplay } from 'vuetify'

  const { name } = useDisplay()

  const show = computed(() => {
    switch (name.value) {
      case 'xs': return false
      case 'sm': return false
      case 'md': return true
      case 'lg': return true
      case 'xl': return true
      case 'xxl': return true
    }

    return undefined
  })
</script>

<script>
import { shallowRef } from "vue";
import Home from "./components/Home.vue";
import Projects from "./components/Projects.vue";
import Useful from "./components/Useful.vue";

export default {
  data() {
    return {
      tab: { id: 1, title: "Home", component: shallowRef(Home) },
      allComponents: [
        { id: 1, title: "Home", component: shallowRef(Home) },
        { id: 2, title: "Projects", component: shallowRef(Projects) },
        { id: 3, title: "Useful Links", component: shallowRef(Useful) },
      ],
    };
  },
  methods: {
    changePage(id) {
      this.tab = this.allComponents.find((item) => item.id === id);
    },
  },
};
</script>
