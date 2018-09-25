<template>
  <div id="app" >
    <v-app id="inspire">

      <vnavigation :visible="drawer">
      </vnavigation>

      <vtoolbar  @toggle-menu="toggleMenu()">
      </vtoolbar>

      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
             <router-view></router-view>
          </v-layout>
        </v-container>
      </v-content>

      <vfooter></vfooter>

    </v-app>
  </div>
</template>

<script lang="ts">

  import Vnavigation     from '../../shared/components/Vnavigation/Vnavigation.vue';
  import Vtoolbar        from '../../shared/components/Vtoolbar/Vtoolbar.vue';
  import Vfooter         from '../../shared/components/Vfooter/Vfooter.vue';

  export default {
    components: {
      Vnavigation,
      Vtoolbar,
      Vfooter,
    },

    data:  () => ({
      drawer: true,
    }),

    methods: {
      toggleMenu () {
        this.drawer = !this.drawer;
        console.log(this.drawer);
      }    
    }
  };
</script>

<style lang="css">
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  @import "../../../../node_modules/vuetify/dist/vuetify.css";
</style>