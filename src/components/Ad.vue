<template>
  <div class="col-2">
    <div class="row flex-column">
      <div class="col-12 m-3 p-5" v-for="ad in ads" :key="ad.title">
        <img class="img-fluid" :src="ad.tall" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { adsService } from '../services/AdsService'
export default {
  setup() {
    onMounted(() => adsService.getAds())
    return {
      ads: computed(() => AppState.ads)
    }
  }
}
</script>

<style>

</style>
