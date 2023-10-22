<template>
  <div>
    <v-text-field
        outlined
        dense
        label="nameTm"
        v-model="employee.nameTm"
        class="mt-1"
    />
    <v-text-field
        outlined
        dense
        label="nameRu"
        v-model="employee.nameRu"
    />
    <v-text-field
        outlined
        dense
        label="jobTm"
        v-model="employee.jobTm"
    />
    <v-text-field
        outlined
        dense
        label="jobRu"
        v-model="employee.jobRu"
    />
    <v-text-field
        outlined
        dense
        label="workAtTm"
        v-model="employee.workAtTm"
    />
    <v-text-field
        outlined
        dense
        label="workAtRu"
        v-model="employee.workAtRu"
    />

    <v-row no-gutters>
      <v-col cols="12" md="6" sm="6">
        <v-text-field
            outlined
            dense
            label="age"
            v-model="employee.age"
            class="mr-1"
        />
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <v-text-field
            outlined
            dense
            label="experience"
            v-model="employee.experience"
            class="ml-1"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    employee: {}
  }),
  props: {

  }
}
</script>

<style scoped>


</style>