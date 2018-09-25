<template>
  <v-footer
    height="auto"
    color="blue darken-3"
    >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
      >
        {{ link }}
      </v-btn>
      <v-flex
        blue
        darken-3
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2018 — <strong>Logic-Immo.be 2018 Concept Multimedia Belgium sa - IPM</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script lang="ts">
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ]
    })    
  };    
</script>

<style>

</style>
