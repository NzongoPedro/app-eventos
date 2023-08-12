<template>
  <v-app>
    <v-card class="pa-0 ma-0">
      <v-app-bar
        app
        color="primary"
        dark
        scroll-behavior="collapse hide"
        scroll-threshold="993"
        fixed
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>APUPU-EVENTOS</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" app temporary class="primary">
        <v-list>
          <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
            title="John Leider"
            subtitle="john@google.com"
          >
            <template v-slot:append>
              <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list :lines="false" density="compact" nav>
          <v-list-item
            v-for="item in items"
            :key="item.text"
            :value="item"
            color="primary"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon" class="ml-3"></v-icon>
            </template>
            <router-link :to="item.to" color="primary" class="link-nav">
              <v-list-item-title class="text-uppercase">{{
                item.text
              }}</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-container flat>
        <!-- Conteúdo principal -->
        <router-view></router-view>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    items: [
      { text: "dashboard", icon: "mdi-view-dashboard", to: "home" },
      { text: "eventos", icon: "mdi-calendar", to: "eventos" },
      { text: "validadores", icon: "mdi-account-multiple", to: "validadores" },
      { text: "registros", icon: "mdi-format-list-checks", to: "registros" },
      /* { text: "Recent", icon: "mdi-history" },
      { text: "Offline", icon: "mdi-check-circle" },
      { text: "Uploads", icon: "mdi-upload" }, */
    ],
  }),
};
</script>

<style>
.primary .v-navigation-drawer {
  background-color: var(--primary);
}
.link-nav {
  color: var(--primary);
  text-decoration: none;
}
</style>
