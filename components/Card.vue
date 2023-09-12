<template>
    <div v-if="pokeinfo">
      <md-dialog :md-active.sync="pokeid" :md-click-outside-to-close=false>
        <md-dialog-title>{{pokeinfo.name}}</md-dialog-title>
  
        <md-tabs md-dynamic-height>
          <md-tab md-label="General">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">{{pokeinfo.name}}</div>
                    <div class="md-subhead">{{  pokeinfo.japanese_name}} </div>
                    <div class="md-subhead">{{  pokeinfo.pokedex_number}} </div>
                </md-card-header-text>

                <md-card-media>
                    
                    <img :src="`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${('000' +  pokeinfo.pokedex_number).substr(-3)}.png`">
                </md-card-media>
            </md-card-header>
          </md-tab>
  
          <md-tab md-label="Stats">
            <md-card-header>
                <md-list>
                    <md-list-item>
                        <span class="md-list-item-text">Points de vie  : {{ pokeinfo.hp }}</span>
                    </md-list-item>
                    <md-list-item>
                        <span class="md-list-item-text">Attaque : {{ pokeinfo.attack }}</span>
                    </md-list-item>
                    <md-list-item>
                        <span class="md-list-item-text">Défense : {{  pokeinfo.defense }}</span>
                    </md-list-item>
                    <md-list-item>
                        <span class="md-list-item-text">Vitesse : {{  pokeinfo.speed }}</span>
                    </md-list-item>
                </md-list>
            </md-card-header>
          </md-tab>
        </md-tabs>
        <div class="flex flex-left ml-3">
            <md-chip class="md-accent" v-if="pokeinfo.type1" md-clickable>{{ pokeinfo.type1 }}</md-chip>
            <md-chip class="md-accent" v-if="pokeinfo.type2" md-clickable>{{ pokeinfo.type2 }}</md-chip>
        </div>
        <md-dialog-actions>
          <md-button class="md-primary" @click="$emit('togglePokeCard')">Close</md-button>
        </md-dialog-actions>
      </md-dialog>  
    </div>
  </template>
  
  <script>
    export default {
      name: 'DialogCustom',
      props: {
      pokeid: {
        type: Boolean,
        required: false,
        default: null
      },    
      pokeinfo: {
        type: Object,
        required: false,
        default: null
      }
    }  
    }
  </script>