<template>
  <v-card
      style="padding: 20px !important"
  >
    <!-- Close dialog -->
    <v-row no-gutters style="margin-bottom: 20px">
      <div style="font-weight: 500; font-size: 25px">Full information</div>
      <v-spacer/>
      <v-btn
          icon
          @click="$emit('close-dialog')"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-row>

    <v-text-field
      outlined
      readonly
      dense
      label="nameTm"
      :value="info.nameTm"
    />
    <v-text-field
        outlined
        readonly
        dense
        label="nameTm"
        :value="info.nameRu"
    />
    <v-textarea
      outlined
      readonly
      label="textTm"
      :value="info.textTm"
    />
    <v-textarea
        outlined
        readonly
        label="textRu"
        :value="info.textRu"
    />
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="6" xs="6">
        <v-img
          max-width="500"
          height="250"
          :src="url + '/' + info.imagePath"
          class="mr-1"
        />
      </v-col>
      <v-col cols="12" md="6" sm="6" xs="6">
        <video
            class="ml-1"
            controls
            style="max-width: 500px; max-height: 250px; margin: 0"
            :src="url + '/' + info.videoPath" type="video/mp4"
        >

        </video>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import BASE_URL from "@/utils/url";
export default {
  data: () => ({
    url: BASE_URL
  }),
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>