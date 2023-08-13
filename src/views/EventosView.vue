<template>
  <div>
    <br />
    <br />
    <br />
    <span class="text-h5 ma-auto titulo">Registrar eventos</span>
    <v-divider horizontal></v-divider>
    <v-sheet
      elevation="0"
      rounded="sm"
      width="100%"
      class="folha pa-2 mx-auto mb-10"
      flat
    >
      <form
        class="mt-5 form-save-event"
        ref="formSaveEvent"
        @submit.prevent="save"
      >
        <v-text-field
          name="evento"
          clearable
          label="Nome do evento"
          prepend-inner-icon="mdi-card-text"
          variant="outlined"
          color="primary"
          required
        ></v-text-field>
        <v-text-field
          name="codigo"
          clearable
          label="Número de códigos"
          prepend-inner-icon="mdi-account-group"
          variant="outlined"
          color="primary"
          required
        ></v-text-field>

        <v-alert
          v-if="resposta.msg"
          closable
          :text="resposta.msg"
          :type="resposta.tipo"
          variant="tonal"
        ></v-alert>

        <v-btn
          block
          class="text-none mb-4 mt-2"
          color="primary"
          size="x-large"
          variant="flat"
          type="submit"
          name="btn-submit"
        >
          Registrar o evento
        </v-btn>
        <input type="hidden" name="request" value="save-event" />
      </form>
    </v-sheet>

    <v-card
      class="mx-auto mb-2"
      color="#36393f"
      theme="dark"
      variant="flat"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="400"
      data-aos-transition="1500"
      v-for="evento in eventos"
      :key="evento.idevento"
    >
      <v-sheet color="#202225">
        <v-card-item>
          <template v-slot:prepend>
            <v-card-subtitle>
              <v-icon icon="mdi-calendar-multiple-check" start></v-icon>
              evento {{ evento.idevento }}
            </v-card-subtitle>
          </template>

          <v-btn
            icon="mdi-calendar-account-outline"
            variant="tonal"
            color="success"
            size="small"
            class="float-end"
          ></v-btn>
        </v-card-item>
      </v-sheet>

      <v-card class="ma-4" color="#2f3136" rounded="lg" variant="flat">
        <v-card-item>
          <v-card-subtitle class="text-body-2 d-flex align-center">
            <v-icon color="#949cf7" icon="mdi-calendar" start></v-icon>

            <span class="text-medium-emphasis font-weight-bold">{{
              evento.eventoData
            }}</span>
          </v-card-subtitle>

          <div class="py-2">
            <div class="text-h6">{{ evento.eventoNome }}</div>
          </div>
        </v-card-item>

        <v-divider></v-divider>

        <div class="pa-4 d-flex align-center text-center justify-space-evenly">
          <v-btn
            border
            class="text-none"
            prepend-icon="mdi-check"
            variant="text"
          >
            Interested
          </v-btn>
          <v-chip
            class="ms-2 text-medium-emphasis"
            color="grey-darken-4"
            prepend-icon="mdi-account-multiple"
            size="small"
            :text="evento.qtdCodigo"
            variant="flat"
          ></v-chip>
        </div>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import apiUrl from "../config";
export default {
  data: () => ({
    resposta: {
      tipo: "",
      msg: "",
    },
    eventos: "",
  }),

  created() {
    setInterval(() => {
      this.initialize();
    }, 1000);
  },

  methods: {
    save() {
      try {
        fetch(apiUrl + "/xhttpRequests.php", {
          method: "POST",
          body: new FormData(document.querySelector(".form-save-event")),
        })
          .then((res) => res.json())
          .then((response) => {
            this.resposta.tipo = response.status;
            this.resposta.msg = response.msg;
            console.log(response);
          });
      } catch (error) {
        console.error(error);
      }

      // console.log(data);
    },
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

  watch: {},
};
</script>

<style scoped>
.folha {
  display: colum;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100vh;
  flex-direction: row;
  transform: calc(50%, 50%);
  position: relative;
  top: 50%;
  left: 0;
}
.titulo {
  color: #4f4f4f !important;
  font-size: 16px !important;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
