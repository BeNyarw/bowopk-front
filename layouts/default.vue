<template>
    <div class="page-container">
    <md-app md-mode="reveal" class="app-main justify-center">
        <md-app-toolbar class="md-accent ">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Pkdex</span>
        </md-app-toolbar>
        <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0"
            >Navigation</md-toolbar
        >
        <md-list>
            <md-list-item>
                <Navbar :menuVisible="menuVisible" @toggle="menuVisible = !menuVisible" />
            </md-list-item>
        </md-list>
        </md-app-drawer>
        <md-app-content class="max-h-full flex justify-center" >
            <nuxt class="max-w-6xl w-5/6"/>
        </md-app-content>
    </md-app>
</div>
  </template>
  
  <script setup>
    import "tw-elements/dist/css/tw-elements.min.css";
  </script>
  <script >
  import Navbar from '~/components/Navbar'

  export default {
    components: {
      Navbar
    },
    data() {
      return {
        menuVisible: false
      }
    },
  }
  </script>
  <!--TODO : Nasty tweak to remove asap-->
  <style>
  html,body, #__nuxt, #__layout,.page-container,.app-main{
    height:100%!important;
    width: 100%!important;
  }
  </style>