
<template>
    <div class="relative flex flex-wrap items-center justify-center px-2 py-3-500 mb-3 " >
        <md-card v-if="pokemonList.length" class="md-primary flex-1 w-3/6 m-7 mb-4 cursor-pointer" md-theme="green-card" v-for="(pokemon) in pokemonList" :key="pokemon.pokedex_number">
            <div @click="selectedPokemon(pokemon)">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">{{pokemon.name}}</div>
                    <div class="md-subhead">Pokemon {{  pokemon.type2? pokemon.type1 +'/'+pokemon.type2 : pokemon.type2}} </div>
                </md-card-header-text>

                <md-card-media>
                    
                    <img :src="`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${('000' +  pokemon.pokedex_number).substr(-3)}.png`">
                </md-card-media>
            </md-card-header>
            </div>
        </md-card>

        <Card :pokeid="pokeId" :pokeinfo="currentPokemon" @togglePokeCard="handleClickPoke"/>
    </div>
  </template>
  
  <script>
  export default {
    name: "navbar",
    data: () => ({
        pokeId: false,
        currentPokemon : null
    }),
    props: [
    'pokemonList'
    ],
    methods: {
        selectedPokemon(pokemon) {
            this.pokeId = true
            this.currentPokemon = pokemon
        },
        handleClickPoke(){
            this.pokeId = !this.pokeId
        }
    }
  }
  </script>


