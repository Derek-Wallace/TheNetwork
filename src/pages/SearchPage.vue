<template>
  <div class="col-8 my-5">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="searchResults">
          <input type="text" v-model="state.searchResult" placeholder="Search" class="w-75">
          <button type="submit" class="btn btn-success">
            Search
          </button>
        </form>
      </div>
    </div>
    <div class="row my-4">
      <div class="col-8 m-auto">
        <h4>Profile Results:</h4>
      </div>
      <div class="row" v-if="search===true">
        <ProfileSearchResult />
      </div>
    </div>
    <div class="row my-4">
      <h4 class="col-8 m-auto">
        Post Results
      </h4>
    </div>
    <div class="row" v-if="search===true">
      <Thread />
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { postService } from '../services/PostService'
import { profileService } from '../services/ProfileService'
export default {
  setup() {
    const state = reactive({
      searchResult: null
    })
    return {
      state,
      search: computed(() => AppState.search),
      searchResults() {
        postService.getPosts(`https://bcw-sandbox.herokuapp.com/api/posts?query=${state.searchResult}`)
        profileService.findProfile(`https://bcw-sandbox.herokuapp.com/api/profiles?query=${state.searchResult}`)
      }
    }
  }
}
</script>
