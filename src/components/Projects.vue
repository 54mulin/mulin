<template>
  <v-card class="ma-5 mx-auto" max-width="1000">
    <div>
      <v-expansion-panels>
        <v-expansion-panel v-for="(prj, i) in prjs" :key="i">
          <v-expansion-panel-title expand-icon="mdi-menu-down">
            {{ prj.title }}
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list>
              <v-list-item-subtitle>{{ prj.devYear }}{{ prj.job }}{{ prj.languages }}</v-list-item-subtitle>
              <v-divider></v-divider>
              <v-img :height="300" :src="prj.img"></v-img>
              {{ prj.intro.desc }}
              <v-list-item v-for="item in prj.intro.list">
                {{ item.title }}<br />
                {{ item.desc }}
              </v-list-item>
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-card>
</template>

<script>
import { prjs } from "./Projects.js";
import imgage from "../assets/media.png";

export default {
  data() {
    return {
      prjs: prjs,
      temp: imgage,
    };
  }
};
</script>