<template>
  <div>

    <v-text-field
      outlined
      dense
      label="nameTm"
      v-model="video.nameTm"
      class="mt-1"
    />
    <v-text-field
        outlined
        dense
        label="nameRu"
        v-model="video.nameRu"
    />
    <v-textarea
      outlined
      label="textTm"
      v-model="video.textTm"
      dense
    />
    <v-textarea
        outlined
        label="textRu"
        v-model="video.textRu"
        dense
    />
    <v-combobox
        dense
        outlined
        label="category"
        :items="category"
        v-model="video.category"
        item-text="nameTm"
    />
    <v-file-input
        v-model="video.photo"
        color="deep-purple accent-4"
        label="photo"
        prepend-icon="mdi-camera"
        outlined
        hide-details
        dense
        class="mb-6"
    />
    <v-file-input
        v-model="video.video"
        color="deep-purple accent-4"
        label="video"
        prepend-icon="mdi-video"
        outlined
        hide-details
        dense
        class="mb-3"
    />
    <v-btn outlined width="100%" class="mt-3" @click="saveInfo">Save</v-btn>
      <v-progress-circular
          v-if="progress"
          :size="50"
          color="primary"
          indeterminate
      />
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data: () => ({
    progress: false,
    video: {},
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
    this.getCategory()
  },
  methods: {
    async getCategory() {
      await axios.get('/sport-categories/')
          .then((res) => {
            this.category = res.data.data
                .filter((object) => object.section == 'Video')
          })
          .catch((err) => {
            console.log(err)
          })
    },
    async saveInfo() {

      let formData = new FormData()

      formData.append('nameTm', this.video.nameTm)
      formData.append('nameRu', this.video.nameRu)
      formData.append('textTm', this.video.textTm)
      formData.append('textRu', this.video.textRu)
      formData.append('categoryId', this.video.category.id)
      formData.append('photo', this.video.photo)
      formData.append('video', this.video.video)

      await axios.post('/videos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
          .then(() => {
            this.Toast.fire({
              icon:'success',
              title: 'Successfully saved'
            })
            this.video = {}
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
  },
  computed: {

  },
  components: {
  }
}
</script>

<style>
</style>