<template>
  <Thread />
  <CreatePost />
  <EditPost />
  <button v-if="user.isAuthenticated"
          type="button"
          data-toggle="modal"
          data-target="#create"
          class="fab btn btn-primary rounded-pill py-3 px-5"
  >
    Create Post
  </button>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { postService } from '../services/PostService'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    watchEffect(() => postService.getPosts())
    return {
      user: computed(() => AppState.user)
    }
  }

}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}

</style>
