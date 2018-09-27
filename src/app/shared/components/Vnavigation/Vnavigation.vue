<template>
      <v-navigation-drawer
        :clipped="$vuetify.breakpoint.lgAndUp"
        v-model="drawer"
        fixed
        app
      >
        <v-list dense>
          <template v-for="item in items">
            <v-list-tile :key="item.text" :to="item.action">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>
</template>

<script lang="ts">
  export default {
      props: {
        drawer: {
          type: Boolean,
          required: false
        }
      },
      data:  () => ({
          items:  [
            { icon: 'home', text: 'Home', action: 'home' },
            { icon: 'people', text: 'User', action: 'user' },
            { icon: 'location_city', text: 'Property', action: 'property' },
            { icon: 'trending_up', text: 'Agency', action: 'agency' },
            { icon: 'account_balance', text: 'Locality', action: 'locality' },
            { icon: 'email', text: 'Lead', action: 'lead' },
            { icon: 'notifications', text: 'Alert',action: 'alert' },
            { icon: 'payment', text: 'Order', action: 'order' },
            { icon: 'trending_up', text: 'Statistic', action: 'statistics' },
            { icon: 'settings', text: 'Configuration', action: 'configuration' },
          ],
      })
  };

</script>

<style>

</style>
