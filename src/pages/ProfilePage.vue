<template>
  <div class="col-8" v-if="activeProfile !== null">
    <div class="row my-5">
      <div class="col-12 text-center">
        <img height="200" class="rounded-circle" :src="activeProfile.picture" alt="">
      </div>
      <div class="col-4 my-5">
        <h5 class="d-flex justify-content-center">
          Name:  <p class="ml-2">
            <b>
              {{ activeProfile.name }}
            </b>
          </p>
        </h5>
      </div>
      <div class="col-4 my-5">
        <h5 class="d-flex justify-content-center">
          Email: <p class="ml-2">
            <b>{{ activeProfile.email }}</b>
          </p>
        </h5>
      </div>
      <div class="col-4 my-5">
        <h5 class="d-flex justify-content-center">
          Class: <p class="ml-2">
            <b>{{ activeProfile.class }}</b>
          </p>
        </h5>
      </div>
    </div>
    <Thread />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { profileService } from '../services/ProfileService'
import Notification from '../utils/Notification'
import { postService } from '../services/PostService'
export default {
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await profileService.getProfile(route.params.id)
        await postService.getPosts('https://bcw-sandbox.herokuapp.com/api/posts?creatorId=' + route.params.id)
      } catch (error) {
        Notification.toast(error, 'error')
      }
    })
    return {
      activeProfile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style>

</style>
