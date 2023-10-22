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

<!--    nameTm nameRu    -->
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="6">
        <v-text-field
            outlined
            readonly
            dense
            label="nameTm"
            :value="info.nameTm"
            class="mr-1"
        />
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <v-text-field
            outlined
            readonly
            dense
            label="nameRu"
            :value="info.nameRu"
            class="ml-1"
        />
      </v-col>
    </v-row>

<!--    jobTm jobRu    -->
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="6">
        <v-text-field
            outlined
            readonly
            dense
            label="jobTm"
            :value="info.jobTm"
            class="mr-1"
        />
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <v-text-field
            outlined
            readonly
            dense
            label="jobRu"
            :value="info.jobRu"
            class="ml-1"
        />
      </v-col>
    </v-row>

<!--    workAtTm workAtRu    -->
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="6">
        <v-text-field
            outlined
            readonly
            dense
            label="workAtTm"
            :value="info.workAtTm"
            class="mr-1"
        />
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <v-text-field
            outlined
            readonly
            dense
            label="workAtRu"
            :value="info.workAtRu"
            class="ml-1"
        />
      </v-col>
    </v-row>

<!--    age experience views rating   -->
    <v-row no-gutters>
      <v-col cols="12" md="3" sm="3">
        <v-text-field
            outlined
            readonly
            dense
            label="age"
            :value="info.age"
            class="mr-1"
        />
      </v-col>
      <v-col cols="12" md="3" sm="3">
        <v-text-field
            outlined
            readonly
            dense
            label="experience"
            :value="info.experience"
            class="mx-1"
        />
      </v-col>
      <v-col cols="12" md="3" sm="3">
        <v-text-field
            outlined
            readonly
            dense
            label="views"
            :value="info.views"
            class="mx-1"
        />
      </v-col>
      <v-col cols="12" md="3" sm="3">
        <v-text-field
            outlined
            readonly
            dense
            label="rating"
            :value="info.rating"
            class="ml-1"
        />
      </v-col>
    </v-row>

<!--    departmentTm departmentRu   -->
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="6">
        <v-text-field
            outlined
            readonly
            dense
            label="departmentTm"
            :value="info.department.nameTm"
            class="mr-1"
        />
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <v-text-field
            outlined
            readonly
            dense
            label="departmentRu"
            :value="info.department.nameRu"
            class="ml-1"
        />
      </v-col>
    </v-row>

<!--    image   -->
    <v-row
        no-gutters
        class="d-flex justify-center"
    >
      <v-img
          :src="`${url}/${info.imagePath}`"
          max-width="500"
          max-height="250"
      />
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

<style scoped>


</style>