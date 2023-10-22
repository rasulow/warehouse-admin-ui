<template>
  <v-app>

    <v-main>
      <side-bar
        v-if="$route.path != '/login'"
      />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
// import is_have from './utils/haveToken';
import SideBar from "@/components/sidebar/SideBar.vue";

export default {
  name: 'App',

  data: () => ({
  }),
  created() {
    // this.checkUser()
  },
  mounted() {
  },  
  beforeDestroy() {
  }, 
  methods: {
    // async checkUser() {
    //   if (!is_have()) {
    //       this.$router.push('/login');
    //   }
    // }
  },
  watch: {
  },
  components: {
    SideBar
  }
};
</script>

<style>
* {
    text-transform: unset !important;
    letter-spacing: normal;
}
</style>
