<template>
  <div>
<!--    name    -->
    <v-text-field
      outlined
      readonly
      dense
      label="name"
      :value="info['name']"
    />
<!--    club    -->
    <v-text-field
        outlined
        readonly
        dense
        label="club"
        :value="info['club']"
    />
<!--    made position   -->
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="6" xs="6">
        <v-text-field
          outlined
          readonly
          dense
          label="made"
          :value="info['made']"
          class="mr-1"
        />
      </v-col>
      <v-col cols="12" md="6" sm="6" xs="6">
        <v-text-field
            outlined
            readonly
            dense
            label="position"
            :value="info['position']"
            class="ml-1"
        />
      </v-col>
    </v-row>
<!--    birthPlace sportLevel   -->
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="6" xs="6">
        <v-text-field
            outlined
            readonly
            dense
            label="birthPlace"
            :value="info['birthPlace']"
            class="mr-1"
        />
      </v-col>
      <v-col cols="12" md="6" sm="6" xs="6">
        <v-text-field
            outlined
            readonly
            dense
            label="sportLevel"
            :value="info['sportLevel']"
            class="ml-1"
        />
      </v-col>
    </v-row>
<!--    age rating experience views   -->
    <v-row no-gutters>
      <v-col cols="12" md="3" sm="3" xs="3">
        <v-text-field
          outlined
          readonly
          dense
          label="age"
          :value="info.age"
          class="mr-1"
        />
      </v-col>
      <v-col cols="12" md="3" sm="3" xs="3">
        <v-text-field
            outlined
            readonly
            dense
            label="rating"
            :value="info.rating"
            class="mx-1"
        />
      </v-col>
      <v-col cols="12" md="3" sm="3" xs="3">
        <v-text-field
            outlined
            readonly
            dense
            label="experience"
            :value="info.experience"
            class="mx-1"
        />
      </v-col>
      <v-col cols="12" md="3" sm="3" xs="3">
        <v-text-field
            outlined
            readonly
            dense
            label="views"
            :value="info.views"
            class="ml-1"
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="6">
        <div style="font-weight: 700; margin-bottom: 10px; margin-top: 10px">workedAt:</div>
        <v-text-field
          outlined
          readonly
          dense
          hide-details
          v-for="(item, i) in info.workedAt"
          :key="i"
          :value="item"
          class="mb-3 mr-1"
        />
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <div style="font-weight: 700; margin-bottom: 10px; margin-top: 10px">badges:</div>
        <v-text-field
            outlined
            readonly
            dense
            hide-details
            v-for="(item, i) in info.badges"
            :key="i"
            :value="item"
            class="mb-3 ml-1"
        />
      </v-col>
    </v-row>
    <v-row no-gutters
      class="d-flex justify-center"
    >
      <v-img
        :src="url + '/' + info.imagePath"
        max-width="500"
        max-height="250"
      />
    </v-row>
  </div>
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

<style>

</style>