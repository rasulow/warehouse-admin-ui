<template>
    <v-card
        elevation="0"
        color="white"
        width="100%"
        style="border-radius: 10px; margin-top: 20px"
    >   
        <v-simple-table
            dense
        >
            <template v-slot:default>
                <thead>
                    <tr>
                        <th
                            v-for="(item, i) in headers"
                            :key="i"
                        >
                            {{ item }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(item, i) in gyms"
                        :key="i"
                        :style="i % 2 == 0 ? 'background-color: #F2F2F7': ''"
                        class="table-row"
                        
                    >   
                        <td @click="$emit('show-full-info', item)">{{ i + 1 }}</td>
                        <td @click="$emit('show-full-info', item)">{{ item.nameTm }}</td>
                        <td @click="$emit('show-full-info', item)">{{ item.nameRu }}</td>
                        <td @click="$emit('show-full-info', item)">{{ item.locationTm }}</td>
                        <td @click="$emit('show-full-info', item)">{{ item.locationRu }}</td>
                        <td style="width: 100px">
                            <v-btn icon x-small>
                                <v-icon color="orange" size="20">mdi-pencil-outline</v-icon>
                            </v-btn>
                            <v-btn icon x-small>
                                <v-icon color="red" size="20">mdi-delete-outline</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-card>
</template>

<script>
export default {
    data: () => ({
    }),
    methods: {
    },
    props: {
        gyms: {
            type: Array,
            required: true
        },
        headers: {
            type: Array,
            required: true
        }
    }
}
</script>
    

<style scoped>
.table-row:hover {
    background-color: #0088FF !important;
    color: white;
    cursor: pointer;
}

</style>