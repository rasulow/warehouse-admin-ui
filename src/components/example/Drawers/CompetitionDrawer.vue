<template>
  <div>
    <v-text-field
        outlined
        dense
        label="nameTm"
        v-model="competition.nameTm"
        class="mt-1"
    />
    <v-text-field
        outlined
        dense
        label="nameRu"
        v-model="competition.nameRu"
    />
    <v-textarea
      outlined
      dense
      label="textTm"
      v-model="competition.textTm"
    />
    <v-textarea
        outlined
        dense
        label="textRu"
        v-model="competition.textRu"
    />
    <v-text-field
        outlined
        dense
        label="locationTm"
        v-model="competition.locationTm"
    />
    <v-text-field
        outlined
        dense
        label="locationTu"
        v-model="competition.locationRu"
    />

<!--    competition startDateTime    -->
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="6">
        <v-menu
            v-model="dateTimeMenu.startDateMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            max-width="auto"
            class="mr-1"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                outlined
                dense
                v-model="competition.dateStart"
                label="dateStart"
                readonly
                v-bind="attrs"
                v-on="on"
                class="mr-1"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="competition.dateStart"
              @input="dateTimeMenu.startDateMenu = false"
              no-title
          />
        </v-menu>
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <v-menu
            v-model="dateTimeMenu.startTimeMenu"
            :close-on-content-click="false"
            :nudge-left="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                outlined
                dense
                v-model="competition.timeStart"
                label="timeStart"
                readonly
                v-bind="attrs"
                v-on="on"
                class="ml-1"
            ></v-text-field>
          </template>
          <v-time-picker
              v-model="competition.timeStart"
              format="24hr"
              @input="dateTimeMenu.startTimeMenu = false"
              no-title
          />
        </v-menu>
      </v-col>
    </v-row>


    <!--    competition endDateTime    -->
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="6">
        <v-menu
            v-model="dateTimeMenu.endDateMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
            class="mr-1"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                outlined
                dense
                v-model="competition.dateEnd"
                label="dateEnd"
                readonly
                v-bind="attrs"
                v-on="on"
                class="mr-1"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="competition.dateEnd"
              @input="dateTimeMenu.endDateMenu = false"
              no-title
          />
        </v-menu>
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <v-menu
            v-model="dateTimeMenu.endTimeMenu"
            :close-on-content-click="false"
            :nudge-left="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                outlined
                dense
                v-model="competition.timeEnd"
                label="timeEnd"
                readonly
                v-bind="attrs"
                v-on="on"
                class="ml-1"
            ></v-text-field>
          </template>
          <v-time-picker
              v-model="competition.timeEnd"
              format="24hr"
              @input="dateTimeMenu.endTimeMenu = false"
              no-title
          />
        </v-menu>
      </v-col>
    </v-row>

    <v-combobox
        dense
        outlined
        label="type"
        v-model="competition.type"
        :items="types"
        item-text="nameTm"
    />
    <v-file-input
        v-model="competition.file"
        color="deep-purple accent-4"
        label="photo"
        prepend-icon="mdi-camera"
        outlined
        hide-details
        dense
        class="mb-3"
    />
    <v-btn outlined width="100%" class="mt-3" @click="saveInfo">Save</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data: () => ({
    competition: {},
    types: [],
    Toast: Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      },
    }),
    dateTimeMenu: {}
  }),
  created() {
    this.getTypes().then(() => {})
  },
  methods: {
    async getTypes() {
      await axios.get('/competition-types/')
          .then((res) => {
            this.types = res.data.data
          })
          .catch((err) => {
            console.log(err)
          })
    },

    async saveInfo() {
      let dateStart = `${this.competition.dateStart}T${this.competition.timeStart}:00`
      let dateEnd = `${this.competition.dateEnd}T${this.competition.timeEnd}:00`
      dateStart = new Date(dateStart)
      dateEnd = new Date(dateEnd)
      dateStart = dateStart.toISOString()
      dateEnd = dateEnd.toISOString()

      let formData = new FormData()

      formData.append('nameTm', this.competition.nameTm)
      formData.append('nameRu', this.competition.nameRu)
      formData.append('textTm', this.competition.textTm)
      formData.append('textRu', this.competition.textRu)
      formData.append('locationTm', this.competition.locationTm)
      formData.append('locationRu', this.competition.locationRu)
      formData.append('dateStart', dateStart)
      formData.append('dateEnd', dateEnd)
      formData.append('typeId', this.competition.type.id)
      formData.append('photo', this.competition.file)

      await axios.post('/competitions/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
          .then(() => {
            this.Toast.fire({
              icon:'success',
              title: 'Successfully saved'
            })
            this.$emit('close-nav-drawer')
          })
          .catch((err) => {
            this.Toast.fire({
              icon:'error',
              title: 'Something went wrong'
            })
            console.log(err)
            this.$emit('close-nav-drawer')
          })
    }

  }
}

</script>


<style scoped>


</style>