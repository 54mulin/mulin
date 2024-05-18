<template>
  <v-app>
    <v-app-bar density="compact" scroll-behavior="elevate">
      <v-spacer></v-spacer>
      <v-tabs v-model="tab" align-tabs="center">
        <v-tab v-for="item in items" :key="item" :text="item" :value="item" color="light-green-darken-2"></v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet class="rounded-lg mx-auto">
              <v-tabs-window v-model="tab">
                <v-tabs-window-item v-for="(item, index) in items" :key="item" :value="item">
                  <component :is="allComponents[index].component">
                  </component>
                </v-tabs-window-item>
              </v-tabs-window>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer class="bg-grey-lighten-4 text-center d-flex flex-column">Last updated May 18, 2024 @ Mulin</v-footer>
  </v-app>
</template>


<script>
import { shallowRef } from "vue";
import Home from './Home.vue'
import Projects from './Projects.vue'
import Useful from './Useful.vue'

export default {
  name: 'ScrollTopBtn',
  components: {
    Home,
    Projects,
    Useful
  },
  data() {
    return {
      tab: null,
      items: [
        'Home', 'Projects', 'Useful Links'
      ],

      allComponents: [
        { id: 1, component: shallowRef(Home) },
        { id: 2, component: shallowRef(Projects) },
        { id: 3, component: shallowRef(Useful) },
      ]
    }
  },

}
</script>¡