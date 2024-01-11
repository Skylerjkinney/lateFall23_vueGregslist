<template>
  <div class="container-fluid">

    <ModalWrapper modalId="create-house-modal" modalSize="fullscreen">

      <div>Create A house</div>
      <HouseForm v-if="account.id" />

    </ModalWrapper>

    <section class="row">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create-house-modal">Create a House</button>
    </section>

    <section class="row my-2">
      <div v-for="house in houses" class="col-4 mb-3">

        <HouseCard :house="house" />

      </div>
    </section>


    <ModalWrapper modalId="edit-house-modal">
      <div>Edit House</div>
      <HouseForm :editHouseData="activeHouse" />
    </ModalWrapper>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { housesService } from '../services/HousesService.js'
import HouseCard from '../components/HouseCard.vue';
import Pop from '../utils/Pop';
import ModalWrapper from '../components/ModalWrapper.vue';
import HouseForm from '../components/HouseForm.vue';
export default {
  setup() {
    onMounted(() => {
      getHouses()
    })
    async function getHouses() {
      try {
        await housesService.getHouses()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      houses: computed(() => AppState.houses),
      account: computed(() => AppState.account),
      activeHouse: computed(() => AppState.activeHouse)
    }
  },
  components: { HouseCard, ModalWrapper, HouseForm }
};
</script>


<style lang="scss" scoped></style>
