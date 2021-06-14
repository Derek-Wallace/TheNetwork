<template>
  <div class="col-8">
    <div class="row my-2">
      <div class="col-4 m-auto d-flex justify-content-around">
        <h5 v-if="previousPage !== null" @click="getNewerPosts" role="button">
          Previous
        </h5>
        <h5 v-if="nextPage !== null" @click="getOlderPosts" role="button">
          Next
        </h5>
      </div>
    </div>
    <div class="row my-2">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div class="row my-2">
      <div class="col-4 m-auto d-flex justify-content-around">
        <h5 v-if="previousPage !== null" @click="getNewerPosts" role="button">
          Previous
        </h5>
        <h5 v-if="nextPage !== null" @click="getOlderPosts" role="button">
          Next
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { postService } from '../services/PostService'
export default {
  setup() {
    return {
      posts: computed(() => AppState.posts),
      previousPage: computed(() => AppState.previousPage),
      nextPage: computed(() => AppState.nextPage),
      async getOlderPosts() {
        await postService.getPosts(this.nextPage)
      },
      async getNewerPosts() {
        await postService.getPosts(this.previousPage)
      }
    }
  }
}
</script>

<style>

</style>
