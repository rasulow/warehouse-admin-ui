<template>
  <div>
    <v-text-field
        outlined
        dense
        label="nameTm"
        v-model="name.nameTm"
        class="mt-1"
    />
    <v-text-field
        outlined
        dense
        label="nameRu"
        v-model="name.nameRu"
    />

    <v-btn outlined width="100%" @click="saveInfo">Save</v-btn>
  </div>
</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data: () => ({
    name: {},
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
  props: {
  },
  computed: {
  },
  methods: {
    async saveInfo() {
      await axios.post('/health-care-departments/', this.name)
          .then(() => {
            this.Toast.fire({
              icon:'success',
              title: 'Successfully saved'
            })
            this.name = {}
            this.$emit('close-nav-drawer')
          })
          .catch((err => {
            this.Toast.fire({
              icon:'error',
              title: 'Something went wrong'
            })
            console.log(err)
            this.$emit('close-nav-drawer')
          }))
    }
  }
}
</script>