<template>
  <!-- Modal -->
  <div class="modal fade" :id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div :class="`modal-dialog modal-sm modal-${modalSize}`" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <slot>
            <!-- Slots allow you to pass in html, or entire templates into another component -->
            <!-- <div>Edit Car</div> this content is being inject from another component
                  <CarForm/> -->
          </slot>
          <!-- <CarForm/> this works, but makes it so i need a new modal component for each and every form -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import CarForm from './CarForm.vue'
import HouseForm from './HouseForm.vue'
export default {
  props: { modalId: { type: String, required: true }, modalSize: { type: String, default: 'xl' } },
  setup() {
    return {}
  },
  components: { CarForm, HouseForm }
}
</script>


<style lang="scss" scoped></style>
