<template>
    <div>
        <md-chips class="md-accent" v-model="queryParameters" md-placeholder="Ajouter type ou le nom d'un pokémon" ></md-chips>
        <!-- <md-chip class="md-accent" v-for="chip in queryParameters" :key="chip" md-clickable>{{ chip }}</md-chip> -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Search',
    props: ['queryParameters',"sortParameters"]

  }
  </script>