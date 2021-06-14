<template>
  <div class="col-8">
    <div class="row my-2">
      <div class="col-10 m-auto" v-for="sr in searchResults" :key="sr.name" :sr="sr">
        <router-link :to="{name: 'Profile', params:{id: sr._id}}" class="row py-3 border m-3 shadow rounded">
          <div class="col-2">
            <img :src="sr.picture" class="img-fluid" alt="">
            <div class="col-10">
              {{ sr.name }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      searchResults: computed(() => AppState.searchResults),
      search: computed(() => AppState.search)
    }
  }
}
</script>

<style>

</style>
