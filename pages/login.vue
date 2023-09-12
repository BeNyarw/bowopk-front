<template>
  <section class="section">
    <div class="container flex items-center flex-col	">
          <Notification :message="error" v-if="error"/>
          <form method="post" @submit.prevent="login" class="w-5/6" >
            <md-card class="md-layout-item p-8">
              <md-card-header>
                <div class="md-title">Connexion</div>
              </md-card-header>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  type="email"
                  class="input"
                  name="email"
                  v-model="email"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="password"
                />
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Log In</button>
            </div>
            </md-card> 
          </form>
          <div class="text-right w-5/6 mt-8 px-6 ">
            <p>
              Vous n'avez pas de compte? <nuxt-link to="/register">Register</nuxt-link>
            </p>
          </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification'

export default {
  components: {
    Notification,
  },

  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
          email: this.email,
          password: this.password
          }
        })
        this.$toasted.global.defaultSuccess({
            msg: 'Authenficiation réussiz'
          })

        this.$router.push('/')
      } catch (e) {
        this.$toasted.global.defaultError({
            msg: 'Username ou password incorrect'
          })
        this.error = e.response.data.message
      }
    }
  }
}
</script>