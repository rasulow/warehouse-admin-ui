<template>
    <v-row no-gutters>
        <v-col cols="12" md="12" sm="12" xs="12">
            <!-- nameTm nameRu -->
            <v-row no-gutters>
                <v-col cols="12" md="6" sm="6" xs="6">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="nameTm"
                        :value="info.nameTm"
                        class="mr-1"
                    />
                </v-col>
                <v-col cols="12" md="6" sm="6" xs="6">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="nameRu"
                        :value="info.nameRu"
                        class="ml-1"
                    />
                </v-col>
            </v-row>


            <!-- jobTm jobRu -->
            <v-row no-gutters>
              <v-col cols="12" md="6" sm="6" xs="6">
                <v-text-field
                    outlined
                    dense
                    readonly
                    label="jobTm"
                    :value="info.jobTm"
                    class="mr-1"
                />
              </v-col>
              <v-col cols="12" md="6" sm="6" xs="6">
                <v-text-field
                    outlined
                    dense
                    readonly
                    label="jobRu"
                    :value="info.jobRu"
                    class="ml-1"
                />
              </v-col>
            </v-row>


            <!-- madeTm madeRu -->
            <v-row no-gutters>
                <v-col cols="12" md="6" sm="6" xs="6">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="madeTm"
                        :value="info.madeTm"
                        class="mr-1"
                    />
                </v-col>
                <v-col cols="12" md="6" sm="6" xs="6">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="madeRu"
                        :value="info.madeRu"
                        class="ml-1"
                    />
                </v-col>
                
            </v-row>

            <!-- birthPlaceTm birthPlaceRu -->
            <v-row no-gutters>
                <v-col cols="12" md="6" sm="6">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="birthPlaceTm"
                        :value="info.birthPlaceTm"
                        class="mr-1"
                    />
                </v-col>
                <v-col cols="12" md="6" sm="6">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="birthPlaceRu"
                        :value="info.birthPlaceRu"
                        class="mx-1"
                    />
                </v-col>
            </v-row>

            <!-- sportLevelTm sportLevelRu -->
            <v-row no-gutters>
              <v-col cols="12" md="6" sm="6">
                <v-text-field
                    outlined
                    dense
                    readonly
                    label="sportLevelTm"
                    :value="info.sportLevelTm"
                    class="mr-1"
                />
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-text-field
                    outlined
                    dense
                    readonly
                    label="sportLevelRu"
                    :value="info.sportLevelRu"
                    class="mx-1"
                />
              </v-col>
            </v-row>

            <!-- age experience rating views -->
            <v-row no-gutters>
              <v-col cols="12" md="3" sm="3">
                <v-text-field
                    outlined
                    dense
                    readonly
                    label="age"
                    :value="info.age"
                    class="mr-1"
                />
              </v-col>
              <v-col cols="12" md="3" sm="3">
                <v-text-field
                    outlined
                    dense
                    readonly
                    label="experience"
                    :value="info.experience"
                    class="mx-1"
                />
              </v-col>
              <v-col cols="12" md="3" sm="3">
                <v-text-field
                    outlined
                    dense
                    readonly
                    label="rating"
                    :value="info.rating"
                    class="mx-1"
                />
              </v-col>
              <v-col cols="12" md="3" sm="3">
                <v-text-field
                    outlined
                    dense
                    readonly
                    label="views"
                    :value="info.views"
                    class="ml-1"
                />
              </v-col>
            </v-row>

            <!-- workedAtTm workedAtRu -->
            <v-row no-gutters>
                <v-col cols="12" md="6" sm="6" xs="6">
                    <div
                        style="font-weight: 700;
                        margin-bottom: 10px"
                        class="mr-1"
                    >workedAtTm:</div>
                    <v-text-field
                        outlined
                        dense
                        readonly
                        v-for="(item, i) in info.workedAtTm"
                        :key="i"
                        :value="item"
                        hide-details
                        class="mb-3 mr-1"    
                    />
                </v-col>
                <v-col cols="12" md="6" sm="6" xs="6">
                    <div
                        style="font-weight: 700;
                        margin-bottom: 10px"
                        class="ml-1"
                    >workedAtRu:</div>
                    <v-text-field
                        outlined
                        dense
                        readonly
                        v-for="(item, i) in info.workedAtRu"
                        :key="i"
                        :value="item"
                        class="mb-3 ml-1"
                        hide-details
                    />
                </v-col>
            </v-row>

            <!-- badgesTm badgesRu -->
            <v-row no-gutters>
              <v-col cols="12" md="6" sm="6" xs="6">
                <div
                    style="font-weight: 700;
                    margin-bottom: 10px"
                    class="mr-1"
                >badgesTm:</div>
                <v-text-field
                    outlined
                    dense
                    readonly
                    v-for="(item, i) in info.badgesTm"
                    :key="i"
                    :value="item"
                    hide-details
                    class="mb-3 mr-1"
                />
              </v-col>
              <v-col cols="12" md="6" sm="6" xs="6">
                <div
                    style="font-weight: 700;
                    margin-bottom: 10px"
                    class="ml-1"
                >badgesRu:</div>
                <v-text-field
                    outlined
                    dense
                    readonly
                    v-for="(item, i) in info.badgesRu"
                    :key="i"
                    :value="item"
                    class="mb-3 ml-1"
                    hide-details
                />
              </v-col>
            </v-row>




            <!-- federation -->
            <v-row no-gutters class="mt-3">
                <v-col cols="12" md="6" sm="6" xs="6">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="federation nameTm"
                        :value="info.federation.nameTm"
                        class="mr-1"
                    />
                </v-col>
                <v-col cols="12" md="6" sm="6" xs="6">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        label="federation nameRu"
                        :value="info.federation.nameRu"
                        class="ml-1"
                    />
                </v-col>
            </v-row>
            <v-row
                no-gutters
                class="d-flex justify-center"
            >
              <v-img :src="url + '/' + info.imagePath" max-height="250" max-width="500"/>
            </v-row>

        </v-col>
    </v-row>
</template>


<script>
import BASE_URL from '@/utils/url'

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