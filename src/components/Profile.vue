<template>
  <div class="col-2 bg-dark">
    <div class="row justify-content-center">
      <div class="col-12">
        <router-link class="navbar-brand d-inline-flex" :to="{ name: 'Home' }">
          <h3 class="mdi mdi-account-group text-primary"></h3>
          <h1>
            The Network
          </h1>
        </router-link>
      </div>
      <router-link class="col-12" @click="getProfile" :to="{name: 'Account'}">
        <img class="img-fluid rounded-circle" :src="account.picture" alt="">
      </router-link>
      <div class="col-12">
        <h5 class="text-light text-center">
          {{ account.name }}
        </h5>
      </div>
      <div class="col-12 my-3">
        <router-link :to="{ name: 'Home' }" class="nav-link">
          Home
        </router-link>
      </div>
      <div class="col-12">
        <router-link @click="getProfile" :to="{name: 'Account'}" class="nav-link">
          Account
        </router-link>
      </div>
      <div class="col-12 my-3">
        <router-link :to="{ name: 'Search' }" class="nav-link">
          Search
        </router-link>
      </div>
      <div class="col-12 my-5 py-5">
        <button
          class="btn btn-outline-primary text-uppercase my-5"
          @click="login"
          v-if="!user.isAuthenticated"
        >
          Login
        </button>
        <button
          class="btn btn-outline-primary text-uppercase my-5"
          @click="logout"
          v-if="user.isAuthenticated"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      getProfile() {
        AppState.activeProfile = null
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style>

</style>
