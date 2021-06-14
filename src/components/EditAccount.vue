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
          <h1>Edit your Account</h1>
        </div>
        <div class="modal-header border-bottom-0">
          <form @submit.prevent="editAccount" class="d-flex flex-column w-100">
            <input type="text" v-model="state.editAccount.name" class="border-right-0 border-top-0 border-left-0 my-3" placeholder="Account Name">
            <input type="text" v-model="state.editAccount.class" class="border-right-0 border-top-0 border-left-0 mb-3" placeholder="Class">
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
import { accountService } from '../services/AccountService'
export default {
  setup() {
    const state = reactive({
      editAccount: {}
    })
    return {
      state,
      editAccount() {
        accountService.editAccount(state.editAccount)
      }
    }
  }
}
</script>

<style>

</style>
