<template>
  <v-app>
    <div class="mt-13 pa-0">
      <v-card fat elevation="0">
        <v-card-title 
          ><div class="float-end">
            <modal-validadores></modal-validadores>
          </div>
          <div>
            <h3 class="headline mb-0">Validadores</h3>
          </div>
        </v-card-title>
      </v-card>
      <v-divider horizontal></v-divider>
      <v-banner
        lines="one"
        icon="mdi-account-settings"
        color="deep-purple-accent-4"
        class="my-4"
      >
        <v-banner-text> fulano de tal</v-banner-text>
      </v-banner>
    </div>
  </v-app>
</template>

<script>
import ModalValidadores from "@/components/ModalValidadores.vue";
export default {
  name: "ValidadoresView",
  components: {
    ModalValidadores,
  },
};
</script>
