<template>
    <div>
<!--      nameTm nameRu   -->
      <v-row no-gutters class="mt-1">
        <v-col cols="12" md="6" sm="6">
          <v-text-field
              outlined
              dense
              label="nameTm"
              v-model="trainer.nameTm"
              class="mr-1"
          />
        </v-col>
        <v-col cols="12" md="6" sm="6">
          <v-text-field
              outlined
              dense
              label="nameRu"
              v-model="trainer.nameRu"
              class="ml-1"
          />
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="12" md="6" sm="6">
          <v-text-field
              outlined
              dense
              label="jobTm"
              v-model="trainer.jobTm"
              class="mr-1"
          />
        </v-col>
        <v-col cols="12" md="6" sm="6">
          <v-text-field
              outlined
              dense
              label="jobRu"
              v-model="trainer.jobRu"
              class="ml-1"
          />
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="12" md="6" sm="6">
          <v-text-field
              outlined
              dense
              label="birthPlaceTm"
              v-model="trainer.birthPlaceTm"
              class="mr-1"
          />
        </v-col>
        <v-col cols="12" md="6" sm="6">
          <v-text-field
              outlined
              dense
              label="birthPlaceRu"
              v-model="trainer.birthPlaceRU"
              class="ml-1"
          />
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="12" md="6" sm="6">
          <v-text-field
              outlined
              dense
              label="sportLevelTm"
              v-model="trainer.sportLevelTm"
              class="mr-1"
          />
        </v-col>
        <v-col cols="12" md="6" sm="6">
          <v-text-field
              outlined
              dense
              label="sportLevelRu"
              v-model="trainer.sportLevelRu"
              class="ml-1"
          />
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="12" md="6" sm="6">
          <v-text-field
              outlined
              dense
              label="madeTm"
              v-model="trainer.madeTm"
              class="mr-1"
          />
        </v-col>
        <v-col cols="12" md="6" sm="6">
          <v-text-field
              outlined
              dense
              label="madeRu"
              v-model="trainer.madeRu"
              class="ml-1"
          />
        </v-col>


      </v-row>
        <v-row no-gutters>
            <v-col cols="12" md="4" sm="4" xs="4">
                <v-text-field outlined dense label="age" v-model="trainer.age" class="mr-1"/>
            </v-col>
            <v-col cols="12" md="4" sm="4" xs="4">
                <v-text-field outlined dense label="experience" v-model="trainer.experience" class="mx-1"/>
            </v-col>
            <v-col cols="12" md="4" sm="4" xs="4">
                <v-text-field outlined dense label="rating" v-model="trainer.rating" class="mx-1"/>
            </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="12" md="6" sm="6">
            <div
                style="font-weight: 700;
                margin-bottom: 10px"
            >
              workedAtTm:
            </div>
          </v-col>
          <v-col cols="12" md="6" sm="6">
            <div
                style="font-weight: 700;
                margin-bottom: 10px"
            >
              workedAtRu:
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters
              v-for="(item, i) in workedAtTm"
              :key="i"
              class="mb-3"
        >
          <v-text-field
              v-model="workedAtTm[i].value"
              outlined
              dense
              hide-details
              style="width: 25px !important;"
              class="mr-1"
          />
          <v-text-field
              v-model="workedAtRu[i].value"
              outlined
              dense
              hide-details
              style="width: 25px !important;"
              class="ml-1"
          />
          <v-btn icon>
            <v-icon @click="removeItem('work', i)">mdi-close</v-icon>
          </v-btn>
        </v-row>
        <v-btn height="25" outlined @click="addItem('work')">add work</v-btn>

        <v-row no-gutters class="mt-5">
          <v-col cols="12" md="6" sm="6">
            <div
                style="font-weight: 700;
                  margin-bottom: 10px"
            >
              badgeTm:
            </div>
          </v-col>
          <v-col cols="12" md="6" sm="6">
            <div
                style="font-weight: 700;
                  margin-bottom: 10px"
            >
              badgeRu:
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters
               v-for="(item, i) in badgesTm"
               :key="i"
               class="mb-3"
        >
          <v-text-field
              v-model="badgesTm[i].value"
              outlined
              dense
              hide-details
              style="width: 25px !important;"
              class="mr-1"
          />
          <v-text-field
              v-model="badgesRu[i].value"
              outlined
              dense
              hide-details
              style="width: 25px !important;"
              class="ml-1"
          />
          <v-btn icon>
            <v-icon @click="removeItem('badge', i)">mdi-close</v-icon>
          </v-btn>
        </v-row>
        <v-btn height="25" outlined @click="addItem('badge')">add badge</v-btn>

            <v-combobox
                dense
                outlined
                label="federation"

                v-model="federation"
                :items="federations"
                item-text="nameTm"
                class="mt-5"
            />

            <v-file-input
                v-model="file"
                color="deep-purple accent-4"
                label="photo"
                prepend-icon="mdi-paperclip"
                outlined
                hide-details
                dense
                class="mb-3"
            /> 
            <v-btn outlined width="100%" class="mt-3" @click="saveInfo">Save</v-btn>

        </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    data: () => ({
        trainer: {},
        workedAtTm: [],
        workedAtRu: [],
        badgesTm: [],
        badgesRu: [],
        federations: [],
        federation: null,
        file: null,
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
        this.getFederations()
    },
    methods: {
        addItem(type) {
            if (type === 'work') {
                this.workedAtTm.push({ value: '' })
                this.workedAtRu.push({ value: '' })
            }
            if (type === 'badge') {
                this.badgesTm.push({ value: '' })
                this.badgesRu.push({ value: '' })
            }
        },
        removeItem(type, id) {
            if(type === 'work') {
                this.workedAtTm.splice(id, 1)
                this.workedAtRu.splice(id, 1)
            }
            if (type === 'badge') {
                this.badgesTm.splice(id, 1)
                this.badgesRu.splice(id, 1)
            }
        },

        async getFederations() {
            await axios.get('/federations/', { params: { take: 100 } })

            .then((res) => {
                this.federations = res.data.data
            })
            .catch((err) => {
                console.log(err)
            })
        },

        async saveInfo() {
            let formData = new FormData();

            formData.append('age', Number(this.trainer.age))
            formData.append('job', this.trainer.job)
            formData.append('name', this.trainer.name)
            formData.append('made', this.trainer.made)
            formData.append('rating', Number(this.trainer.rating))
            formData.append('experience', Number(this.trainer.experience))
            formData.append('birthPlace', this.trainer.birthPlace)
            formData.append('sportLevel', this.trainer.sportLevel)
            formData.append('links', {})
            formData.append('federationId', this.federation.id)
            formData.append('photo', this.file)
            
            let workedAt = []
            let badges = []
            for (let i = 0; i < this.workedAt.length;i++) {
                workedAt.push(this.workedAt[i].value)
            }
            for (let i = 0; i < this.badges.length;i++) {
                badges.push(this.badges[i].value)
            }

            formData.append('workedAt', workedAt)
            formData.append('badges', badges)


            await axios.post('/federation-trainers/', formData, {
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