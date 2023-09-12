<template>
  <section class="section">
    <div class="container flex items-center flex-col	">
      <div class="w-5/6" >
            <md-card class="md-layout-item p-8">
              <md-card-header>
                <div class="md-title">Recherche</div>
                <Search :queryParameters="queryParameters" />
                <md-field>
                  <label for="movie">Trier par : </label>
                  <md-select v-model="sortParamaters" >
                    <md-option value="height_m">Taille</md-option>
                    <md-option value="weight_kg">Poids</md-option>
                  </md-select>
              </md-field>
              </md-card-header>
              <md-card-content>
                <Cards :pokemon-list="queryResult"/>
              </md-card-content>
              <div>
                <Pagination       
                  :totalPages="maxPage"
                  :perPage="20"
                  :currentpage="currentpage"
                  @pagechanged="onPageChange" />
              </div>
            </md-card> 
          </div>
    </div>
  </section>
</template>
<script>
import Search from '~/components/Search'
import Cards from '~/components/Cards'
import Pagination from '~/components/Pagination.vue'

export default {
  name: 'IndexPage',
  data: () => ({
    queryParameters: [],
    sortParamaters:[],
    queryResult: [],
    maxPage : 0,
    currentpage: 1,
    offsetpage : null,
    previousPage : null
  }),
  async mounted (){
    this.fetchAllPokemon()
  },
  methods:{
    async fetchAllPokemon() {
       await this.$axios.$get('/api/pokemon/?limit=20').then( (res)=>{
        this.maxPage = (Math.ceil(res.count / 20))
        this.nextPage = res.next
        this.previousPage = res.previous
        this.queryResult = res.results
      })
    },
    async fetchPokemon() {
      await this.$axios.$get('/api/pokemon/?limit=20&search='+this.queryParameters.join(',')+'&ordering='+this.sortParamaters).then( (res)=>{
        this.maxPage = (Math.ceil(res.count / 20))
        this.nextPage = res.next
        this.previousPage = res.previous
        this.queryResult = res.results
      })
    },
    async onPageChange(changedPage) {
      this.currentpage = changedPage.page;
      if(changedPage.type){
        await this.$axios.$get(this[changedPage.type+'Page']).then( (res)=>{
          this.maxPage = (Math.ceil(res.count / 20))
          this.nextPage = res.next
          this.previousPage = res.previous
          this.queryResult = res.results
      })
      }
    }
  },
  watch: {
    queryParameters: function (newValue, oldValue) {
      this.fetchPokemon()
    },
    sortParamaters: function (newValue, oldValue) {
      this.fetchPokemon()
    }
  }
}
</script>
