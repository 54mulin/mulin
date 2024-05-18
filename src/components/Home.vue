<template>
    <v-card-title><v-avatar size="150px">
            <v-img alt="mulin"
                src="https://lh3.googleusercontent.com/jst1v7bWdoGDXguKOFekfbrGY5ZHSgL6Dzek5snBS8AqSnyTLa7sYCNgy1Si_FWupfXamqJsUPVhh2lxX9al1IQ=w1280"></v-img>
        </v-avatar></v-card-title>
    <v-card-title class="text-light-green-darken-4">Maureen Lin</v-card-title>
    <v-card-text>
        <v-icon icon="mdi-email-outline" size="x-small"></v-icon>
        E-mail: <br>
        mumulin1013[at]gmail.com <br>
        <v-icon icon="mdi-briefcase-outline" size="x-small"></v-icon>
        Office: <br>
        Tjing Ling Industrial Building 222, National Taiwan University
    </v-card-text>
    <v-divider></v-divider>
    <v-card-title>Research Interest</v-card-title>
    <v-card-text>
        Experienced Software Engineer with a demonstrated history of working.<br>
        Skilled in Full-stack development, Database Management, Data Mining, Analytics & Visualization.
    </v-card-text>
    <v-divider></v-divider>
    <v-card-title>Education</v-card-title>
    <v-card-text>
        <v-list-item v-for=" edu in edus">
            <a>{{ edu.department }}</a>
            <v-list-item-subtitle>{{ edu.school }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ edu.time }}</v-list-item-subtitle>
        </v-list-item>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-title>Education</v-card-title>
    <v-card-text>
        <v-list-item v-for=" exp in exps">
            <a>{{ exp.office }}</a>
            <v-list-item-subtitle>{{ exp.company }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ exp.time }}</v-list-item-subtitle>
        </v-list-item>
    </v-card-text>
</template>

<script>
import { edus, exps } from "./Home.js"

export default {
    data: () => ({
        edus: edus,
        exps: exps
    }),
}
</script>