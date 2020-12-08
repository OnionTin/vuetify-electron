<template>
  <VApp>
    <!--  上边部分  -->
    <VAppBar
      app
      color="primary"
      dark
    >
      <!--   logo   -->
      <div class="d-flex align-center">
        <VImg
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <!--    Vuetify    -->
        <VImg
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <!--   空格   -->
      <v-spacer></v-spacer>
      <!--   分享按钮   -->
      <VBtn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </VBtn>
    </VAppBar>
    <!--  主要部分  -->
    <v-main>
      <!-- <HelloWorld/> -->
      <div id="app" class="flexCol">
        <router-view></router-view>
      </div>
    </v-main>
  </VApp>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
