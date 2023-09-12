<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3-500 mb-3">
        <md-list>
            <md-divider class="md-inset w-full"></md-divider>
            <md-list-item>
                <nuxt-link class="navbar-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/register">
                    <a @click="clickHandler">Register</a></nuxt-link>
            </md-list-item>
            <md-list-item>
                <nuxt-link class="navbar-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/login">
                    <a @click="clickHandler">Log In</a>
                </nuxt-link>
            </md-list-item>
        </md-list>
    </nav>
  </template>
  
  <script>
  export default {
    name: "navbar",
    methods: {
    clickHandler(e) {
      this.$emit("toggle");
    }
  }
  }
  </script>