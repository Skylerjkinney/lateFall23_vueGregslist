<template>
    <form @submit.prevent="handleSubmit()" class="row p-3 bg-white rounded shadow">
        <div class="mb-3 col-3">
            <label for="house-bedrooms">bedrooms</label>
            <input v-model="houseData.bedrooms" class="form-control" type="text" minlength="3" maxlength="20" required
                name="house-bedrooms" id="house-bedrooms">
        </div>
        <div class="mb-3 col-3">
            <label for="house-bathrooms">bathrooms</label>
            <input v-model="houseData.bathrooms" class="form-control" type="text" minlength="3" maxlength="20" required
                name="house-bathrooms" id="house-bathrooms">
        </div>
        <div class="mb-3 col-3">
            <label for="house-year">year</label>
            <input v-model="houseData.year" class="form-control" type="text" minlength="3" maxlength="20" required
                name="house-year" id="house-year">
        </div>
        <div class="mb-3 col-3">
            <label for="house-price">Price {{ houseData.price }}</label>
            <input v-model="houseData.price" class="form-range" value="5000" type="range" min="1" max="1000000" required
                name="house-price" id="house-price">
        </div>
        <div class="mb-3 col-8">
            <label for="house-picture">Picture of house</label>
            <input v-model="houseData.imgUrl" class="form-control" type="url" required name="house-picture"
                id="house-picture">
        </div>
        <div class="col-4 p-3">
            <img v-if="houseData.imgUrl" :src="houseData.imgUrl" class="img-fluid" alt="">
            <div v-else class="place-holder"> preview of house image</div>
        </div>
        <div class="col-12 mb-3">
            <label for="house-description">Description of house</label>
            <textarea v-model="houseData.description" name="house-description" id="house-description" class="form-control"
                rows="3"></textarea>
        </div>
        <div class="col-6 mb-3">
            <label for="house-levels">Number of Levels</label>
            <input v-model="houseData.levels" name="house-levels" id="house-levels" class="form-control" required>
        </div>
        <div class="mb-2 d-flex justify-content-end">
            <button class="btn" type="button" @click="resetForm">cancel</button>
            <button v-if="!editHouseData" class="btn btn-primary">Create house <i class="mdi mdi-plus"></i></button>
            <button v-else class="btn btn-success">Edit house <i class="mdi mdi-pencil"></i></button>
        </div>
    </form>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted, watch } from 'vue';
import { House } from '../models/House';
import Pop from '../utils/Pop';
import { housesService } from '../services/HousesService';
export default {
    props: { editHouseData: { type: House } },
    setup(props) {
        const houseData = ref({ levels: '' })
        function resetForm() {
            houseData.value = { levels: '' }
        }
        watch(props, () => {
            setEditData()
        })
        function setEditData() {
            houseData.value = props.editHouseData
        }
        return {
            houseData,
            resetForm,
            async handleSubmit() {
                if (props.editHouseData) {
                    this.updateHouse()
                } else {
                    this.createHouse()
                }
            },
            async createHouse() {
                try {
                    console.log('new house in form', houseData.value)
                    await housesService.createHouse(houseData.value)
                    Pop.success('created house')
                } catch (error) {
                    Pop.error(error)
                }
            },
            async updateHouse() {
                try {
                    await housesService.updateHouse(houseData.value)
                    Pop.success('updated house!')
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.place-holder {
    height: 10vh;
    border: 2px var(--bs-info) dashed;
}
</style>