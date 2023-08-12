<template>
  <v-app>
    <v-card
      class="bg-white mb-2"
      color="primary"
      v-for="evento in eventos"
      :key="evento.idevento"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="400"
      data-aos-transition="1500"
    >
      <v-card-title class="flex-column align-start">
        <div class="text-h6 mb-2 text-uppercase text-truncate truncate-text truncate">{{ evento.eventoNome }}</div>
      </v-card-title>
      <v-card-subtitle class="mt-n4"> Evento número: {{ evento.idevento }} </v-card-subtitle>
      <div class="d-flex align-center pa-0 ml-4 mt-2">
        <v-avatar size="24" class="me-4 rounded-0 text-white">
          <v-icon class="text-light">mdi-calendar</v-icon>
        </v-avatar>
        <span class="text-body-2 text-light"> {{ evento.eventoData }}</span>
      </div>
      <v-card-text class="d-flex justify-space-around">
        <v-chip prepend-icon="mdi-account-multiple-plus" color="success">
          códigos
        </v-chip>
        <v-chip prepend-icon="mdi-calendar-remove" color="warning">
          Remover</v-chip
        >
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import apiUrl from "../config";

export default {
  components: {},
  data: () => ({
    eventos: "",
  }),

  computed: {},

  watch: {},

  created() {
    setInterval(() => {
      this.initialize();
    }, 1000);
  },

  methods: {
    async initialize() {
      try {
        const response = await fetch(
          apiUrl + "/xhttpRequests.php?request=get-event"
        );
        const data = await response.json();

        this.eventos = data;

        console.log("Data received from API:", data.length); // Adicione este log
      } catch (error) {
        console.error("Error:", error); // Adicione este log
      }
    },
  },
};
</script>

<style scoped>
.table-custom {
  font-size: 14px !important;
}
</style>
