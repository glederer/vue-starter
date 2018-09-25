<template>
     <v-toolbar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="blue darken-3"
        dark
        app
        fixed
      >
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
           <v-toolbar-side-icon @click.stop="toggleMenu()"></v-toolbar-side-icon>
          <span class="hidden-sm-and-down">Logic-immo</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>

      </v-toolbar>
</template>

<script lang="ts">
  export default {
      methods: {
          toggleMenu: function () {
            this.$emit('toggle-menu');
          }
      }
  };    
</script>

<style>

</style>