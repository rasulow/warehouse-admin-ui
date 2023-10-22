<template>
  <div>
    <v-combobox
        outlined
        dense
        :items="type"
        label="type"
        v-model="typeModel"
        @change="getFilteredCategory"
        class="mt-1"
    />
    <v-text-field
      outlined
      dense
      label="nameTm"
      v-model="news.nameTm"
    />
    <v-text-field
        outlined
        dense
        label="nameRu"
        v-model="news.nameRu"
    />
    <v-textarea
      outlined
      dense
      label="textTm"
      v-model="news.textTm"
    />
    <v-textarea
        outlined
        dense
        label="textRu"
        v-model="news.textRu"
    />
    <v-text-field
        outlined
        dense
        label="locationTm"
        v-model="news.locationTm"
    />
    <v-text-field
        outlined
        dense
        label="locationRu"
        v-model="news.locationRu"
    />
    <v-combobox
        outlined
        dense
        hide-details
        :items="category"
        label="category"
        v-model="news.category"
        item-text="nameTm"
    />
    <v-file-input
        v-model="news.photo"
        color="deep-purple accent-4"
        label="photo"
        prepend-icon="mdi-camera"
        outlined
        hide-details
        dense
        class="my-6"
    />
    <v-btn outlined width="100%" @click="saveInfo">Save</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data: () => ({
    news: {},
    type: ['Local', 'World'],
    typeModel: 'Local',
    category: [],
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

  }),
  created() {
    this.getFilteredCategory()
  },
  methods: {
    async getFilteredCategory() {
      await axios.get('/news-page/filters/',
          { params: { 'lang': 'Tm', 'section': this.typeModel } }
      )
          .then((res) => {
            this.category = res.data.data.filters
          })
          .catch((err) => {
            console.log(err)
          })
    },

    async saveInfo() {
      let formData = new FormData()

      formData.append('nameTm', this.news.nameTm)
      formData.append('nameRu', this.news.nameRu)
      formData.append('textTm', this.news.textTm)
      formData.append('textRu', this.news.textRu)
      formData.append('locationTm', this.news.locationTm)
      formData.append('locationRu', this.news.locationRu)
      formData.append('categoryId', this.news.category.id)
      formData.append('photo', this.news.photo)

      await axios.post('/news/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
          .then(() => {
            this.Toast.fire({
              icon:'success',
              title: 'Successfully saved'
            })
            this.news = {}
            this.$emit('close-nav-drawer', this.typeModel)
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