<template>
  <v-app>
    <v-app-bar class="d-flex justify-center">
      <v-container fluid class="pa-0 d-flex justify-center">
        <v-btn rounded class="text-light-green-darken-1" v-for="item in allComponents" @click="changePage(item.id)">
          {{ item.title }}
        </v-btn>
      </v-container>
    </v-app-bar>
    
    <v-main class="bg-grey-lighten-3">
      <component :is="tab.component"></component>
    </v-main>
    <v-footer class="bg-grey-lighten-4 text-center d-flex flex-column">Last updated May 18, 2024 @ Mulin</v-footer>
  </v-app>
</template>

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
