<template>
    <div class="mt-16 pa-0 ma-0">
      <div grid-list-xs>
        <span>Painel</span>
        <v-row>
          <v-col>
            <v-alert
              border="start"
              color="primary"
              variant="tonal"
              text="20"
              flat
              class="rounded-0 alert-titulo"
            >
              <template v-slot:title>
                <h5 class="custom-title text-center">
                  {{ titleCase("Validadores") }}
                </h5>
              </template>
            </v-alert>
          </v-col>
          <v-col>
            <v-alert
              border="start"
              color="success"
              variant="tonal"
              text="20"
              flat
              class="rounded-0 alert-titulo"
            >
              <template v-slot:title>
                <h5 class="custom-title text-center">
                  {{ titleCase("Meus Eventos") }}
                </h5>
              </template>
            </v-alert>
          </v-col>
        </v-row>
  
        <div class="painel">
          <h5>Atividades</h5>
          <small>Lista de todas atividades</small>
        </div>
      </div>
  
      <!-- TABELAS -->
      <DadosDeAtividades />
    </div>
  </template>
  
  <script>
  import DadosDeAtividades from "@/components/DadosDeAtividades.vue";
  export default {
    name: "StoryCarousel",
    components: {
      DadosDeAtividades,
    },
    data: () => ({
      model: null,
    }),
    methods: {
      titleCase(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
      },
    },
  };
  </script>
  
  <style scoped>
  .alert-titulo {
    padding: 0;
    margin: 0;
  }
  
  .custom-title {
    font-size: 15px;
    text-align: center !important;
    display: flex !important;
    justify-content: center !important;
    align-content: center !important;
  }
  .alert-titulo .v-alert__title {
    text-align: center;
  }
  
  .painel {
    margin-top: 12px;
    margin-bottom: 4px;
    border-bottom: 1px solid #cdcdcd;
  }
  </style>
  