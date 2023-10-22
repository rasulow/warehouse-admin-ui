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
                        v-for="(item, i) in trainers"
                        :key="i"
                        :style="i % 2 == 0 ? 'background-color: #F2F2F7': ''"
                        class="table-row"
                        
                    >   
                        <td @click="$emit('show-full-info', item)">{{ i + 1 }}</td>

                        <td @click="$emit('show-full-info', item)">{{ item.federation.nameTm }}</td>
                        <td @click="$emit('show-full-info', item)">{{ item.nameTm }}</td>
                        <td @click="$emit('show-full-info', item)">{{ item.nameRu }}</td>
                        <td @click="$emit('show-full-info', item)">{{ item.experience }}</td>
                        <td style="width: 100px">
                            <v-btn icon x-small>
                                <v-icon color="orange" size="20">mdi-pencil-outline</v-icon>
                            </v-btn>
                            <v-btn icon x-small @click="deleteTrainer(item.id)">
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

import Swal from 'sweetalert2';
import axios from 'axios';

export default {
    data: () => ({
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
    methods: {
        async deleteTrainer(id) {
            Swal.fire({
                title: 'Are you sure?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#7FBA5E',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })
            .then((res) => {
                if (res.isConfirmed) {
                    axios.delete('/federation-trainers/' + id + '/')
                    .then(() => {
                        this.Toast.fire({
                            icon:'success',
                            title: 'Successfully deleted'
                        })
                        this.$emit('delete-success')
                    })
                    .catch((err) => {
                        console.log(err)
                        this.Toast.fire({
                            icon:'error',
                            title: 'Something went wrong'
                        })
                    })
                }
            })
        }
    },
    props: {
        headers: {
            type: Array,
            required: true
        },
        trainers: {
            type: Array,
            rqeuired: true
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