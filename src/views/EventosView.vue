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
    }),
  
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
  