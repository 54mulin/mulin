<template>
    <v-card class="ma-5">
        <v-card-title>
            <v-avatar size="150px">
                <v-img alt="mulin"
                    src="https://lh3.googleusercontent.com/jst1v7bWdoGDXguKOFekfbrGY5ZHSgL6Dzek5snBS8AqSnyTLa7sYCNgy1Si_FWupfXamqJsUPVhh2lxX9al1IQ=w1280"></v-img>
            </v-avatar>
            <v-container fluid class="pa-0 text-light-green-darken-4">Maureen Lin</v-container>
            <v-container fluid class="px-0 text-subtitle-2">
                <v-icon icon="mdi-email-outline" size="x-small"></v-icon>
                E-mail: <br />
                mumulin1013[at]gmail.com <br />
                <v-icon icon="mdi-briefcase-outline" size="x-small"></v-icon>
                Office: <br />
                Tjing Ling Industrial Building 222, National Taiwan University
            </v-container>
        </v-card-title>

        <v-card-text>
            <v-divider></v-divider>
            <v-container fluid class="px-0">
                <span class="text-h6">Research Interest</span> <br>
                <v-list-item>
                    Experienced Software Engineer with a demonstrated history of working. <br>
                    Skilled in Full-stack development, Database Management, Data Mining,
                    Analytics & Visualization.
                </v-list-item>
            </v-container>

            <v-divider></v-divider>
            <v-container fluid class="px-0">
                <span class="text-h6">Education</span> <br>
                <v-list-item v-for="edu in edus">
                    <span>{{ edu.department }}</span>
                    <v-list-item-subtitle>
                        {{ edu.school }} <br>
                        {{ edu.time }}
                    </v-list-item-subtitle>
                </v-list-item>
            </v-container>

            <v-divider></v-divider>
            <v-container fluid class="px-0">
                <span class="text-h6">Experience</span> <br>
                <v-list-item v-for="exp in exps">
                    <span>{{ exp.office }}</span>
                    <v-list-item-subtitle>
                        {{ exp.company }} <br>
                        {{ exp.time }}
                    </v-list-item-subtitle>
                </v-list-item>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
import { edus, exps } from "./Home.js";

export default {
    data() {
        return {
            edus: edus,
            exps: exps
        };
    }
};
</script>
