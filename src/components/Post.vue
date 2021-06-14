<template>
  <div class="col-10 m-auto">
    <div class="row py-3 border my-3 shadow rounded">
      <router-link class="col-1" :to="{name: 'Profile', params:{id: post.creator.id}}" @click="getProfile">
        <img class="img-fluid rounded-circle" :src="post.creator.picture" alt="">
      </router-link>
      <div class="col-11">
        <div class="row justify-content-between">
          <div class="col-8">
            <p> <b>{{ post.creator.name }}</b></p>
          </div>
          <div class="col-4 text-right">
            <p>{{ post.createdAt }}</p>
          </div>
        </div>
      </div>
      <div class="col-10 m-auto">
        <p>{{ post.body }}</p>
      </div>
      <div class="col-6 m-auto" v-if="post.imgUrl">
        <img :src="post.imgUrl" class="img-fluid" alt="">
      </div>
      <div class="col-12">
        <div class="row" v-if="post.creator.id === account.id">
          <div class="col-6 d-flex">
            <h4 @click="deletePost" role="button" class="mdi mdi-trash-can-outline ml-2"></h4>
            <h4 data-toggle="modal"
                data-target="#edit"
                role="button"
                class="mdi mdi-comment-edit-outline ml-2"
            ></h4>
          </div>
          <div class="col-6 text-right">
            <p>{{ post.likes.length }}</p>
          </div>
        </div>
        <div class="row" v-if="post.creator.id !== account.id">
          <div class="col-12 justify-content-end d-flex">
            <h4 v-if="!user.isAuthenticated" class="mdi mdi-heart-outline text-danger mr-2"></h4>
            <h4 v-if="user.isAuthenticated" @click="like" role="button" class="mdi mdi-heart-outline text-danger mr-2"></h4>
            <p>{{ post.likes.length }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import Notification from '../utils/Notification'
import { AppState } from '../AppState'
import { postService } from '../services/PostService'
import { profileService } from '../services/ProfileService'
export default {
  props: { post: { type: Object, required: true } },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      getProfile() {
        profileService.getProfile(props.post.creator.id)
      },
      async like() {
        try {
          await postService.like(props.post.id)
        } catch (error) {
          Notification.toast(error, 'error')
        }
      },
      async editPost(newData) {
        try {
          await postService.editPost(props.post.id, newData)
        } catch (error) {
          Notification.toast(error, 'error')
        }
      },
      async deletePost() {
        try {
          if (await Notification.confirmAction()) {
            await postService.deletePost(props.post.id)
          }
        } catch (error) {
          Notification.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style>

</style>
