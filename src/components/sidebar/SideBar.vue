<script>
export default {
    data: () => ({
        selectItem: null,
        drawer: null,
        items: [
            { icon: 'mdi-view-dashboard-outline', text: 'Dashboard', to: '/dashboard' },
            { icon: 'mdi-alpha-d-box-outline', text: 'Department', to: '/department' },
            { icon: 'mdi-alpha-p-box-outline', text: 'Position', to: '/position' },
            { icon: 'mdi-alpha-u-box-outline', text: 'User', to: '/user' },
            { icon: 'mdi-alpha-i-box-outline', text: 'Item', to: '/item' },
            { icon: 'mdi-alpha-r-box-outline', text: 'Requests', to: '/requests' },
        ]

    }),
    props: {},
    components: {
    },
}   
</script>

<template>
    <v-navigation-drawer v-model="drawer" app color="white" width="250" style="">
        <v-row 
            style="padding: 20px"
            class="d-flex align-center my-1"
        >
          <v-img 
            src="@/assets/warehouse.png"
            max-height="75"
            max-width="75"
            />
          <div
            style="font-weight: 700;font-size: large;"
          >𝕨𝕒𝕣𝕖𝕙𝕠𝕦𝕤𝕖</div>
        </v-row>
        <v-divider/>
        <v-list flat>
            <v-list-item-group v-model="selectItem" mandatory>
                <v-list-item 
                    v-for="(item, i) in items" 
                    :key="i"
                    v-slot="{active}"
                    :to="item.to"
                    active-class="active-class"
                    style="height: 20px !important;
                    margin: 0px 15px;
                    border-radius: 5px;
                    "
                >
                    <v-list-item-icon style="height: 15px !important;">
                        <!-- <div :class="active ? 'a' : ''"></div> -->
                        <v-icon
                            class=""
                            :color="active ? '' : ''"
                        >
                            {{ item.icon }}
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="ml-n4">
                        <v-list-item-title
                        >
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>

</template>



<style scoped>

.a {
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translate(-50%, -50%);
    height: 18px;
    width: 12px;
    border-radius: 0px 150px 150px 0px;
    background-color: #7FBA5E
}

.border_img {
    border: 1px solid #778290;
}

.border {
    text-decoration: none;
}

.v-list-item-group .v-list-item--active {
    color: white !important;
}

.theme-light.v-list-item--active .v-list-item__subtitle, .theme--light.v-list-item
.v-list-item_action-text {
    color: white !important;
}

.active-class {
    background-color: #ff141d;
}
</style>