<template>
  <div class="modal fade"
       id="edit"
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
          <h1>Edit your post</h1>
        </div>
        <div class="modal-header border-bottom-0">
          <form @submit.prevent="editPost" class="d-flex flex-column w-100">
            <input type="text" v-model="state.editPost.body" class="border-right-0 border-top-0 border-left-0 my-3" placeholder="Post Content">
            <input type="text" v-model="state.editPost.imgUrl" class="border-right-0 border-top-0 border-left-0 mb-3" placeholder="Image Url">
            <button type="submit" class="btn btn-success w-25">
              Confirm Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import Notification from '../utils/Notification'
export default {
  setup() {
    const state = reactive({
      editPost: {}
    })
    return {
      state,
      editPost() {
        Notification.toast('You successfully did nothing', 'success')
      }
    }
  }
}
</script>

<style>

</style>
