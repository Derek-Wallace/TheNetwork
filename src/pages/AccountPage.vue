<template>
  <EditAccount />
  <div class="col-8">
    <h4 data-toggle="modal"
        data-target="#edit"
        role="button"
        class="mdi mdi-comment-edit-outline ml-2 mt-2"
    ></h4>
    <div class="row my-5">
      <div class="col-12 text-center">
        <img height="200" class="rounded-circle" :src="account.picture" alt="">
      </div>
      <div class="col-4 my-5">
        <h5 class="d-flex justify-content-center">
          Name:  <p class="ml-2">
            <b>
              {{ account.name }}
            </b>
          </p>
        </h5>
      </div>
      <div class="col-4 my-5">
        <h5 class="d-flex justify-content-center">
          Email: <p class="ml-2">
            <b>{{ account.email }}</b>
          </p>
        </h5>
      </div>
      <div class="col-4 my-5">
        <h5 class="d-flex justify-content-center">
          Class: <p class="ml-2">
            <b>{{ account.class }}</b>
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
import { postService } from '../services/PostService'
export default {
  setup() {
    onMounted(async() => {
      await postService.getPosts('https://bcw-sandbox.herokuapp.com/api/posts?creatorId=' + AppState.account.id)
    })
    return {
      activeProfile: computed(() => AppState.activeProfile),
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style>

</style>
