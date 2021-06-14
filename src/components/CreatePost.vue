,<template>
  <div class="modal fade"
       id="create"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content p-3">
        <div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h1>Create a Post</h1>
        </div>
        <div class="modal-header border-bottom-0">
          <form @submit.prevent="createPost" class="d-flex flex-column w-100">
            <input type="text" v-model="state.newPost.body" class="border-right-0 border-top-0 border-left-0 my-3" placeholder="Post Content">
            <input type="text" v-model="state.newPost.imgUrl" class="border-right-0 border-top-0 border-left-0 mb-3" placeholder="Image Url">
            <button type="submit" class="btn btn-success w-25">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { postService } from '../services/PostService'
import Notification from '../utils/Notification'
export default {
  setup() {
    const state = reactive({
      newPost: {}
    })
    return {
      state,
      async createPost() {
        try {
          await postService.createPost(state.newPost)
        } catch (error) {
          Notification.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style>
.fab {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 9
}
</style>
