<template>
    <div class="house-card border border-primary rounded shadow">
        <img :src="house.imgUrl" alt="picture of house" class="img-fluid rounded-top">
        <p class="fw-bold text-center">{{ house.bedrooms }} {{ house.bathrooms }}</p>
        <p>{{ house.description }}</p>
        <div class="text-success text-end"><b>{{ house.price }}</b></div>
        <button @click="deleteHouse(house.id)" v-if="account.id == house.creatorId" class="btn btn-danger"
            title="delete house"><i class="mdi mdi-delete"></i></button>
        <button @click="setActiveHouse()" v-if="account.id == house.creatorId" data-bs-toggle="modal"
            data-bs-target="#edit-house-modal" class="btn btn-warning"><i class="mdi mdi-pen"></i></button>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { House } from '../models/House';
import Pop from '../utils/Pop';
import { housesService } from '../services/HousesService';
export default {
    props: { house: { type: House, required: true } },
    setup(props) {
        return {
            account: computed(() => AppState.account),
            async deleteHouse(houseId) {
                try {
                    if (await Pop.confirm('reallllllyyyyYY?')) {
                        await housesService.deleteHouse(houseId)
                        Pop.success('You did IT')
                    }
                } catch (error) {
                    Pop.error(error)
                }
            },
            setActiveHouse() {
                housesService.setActiveHouse(props.house.id)
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.house-card {
    position: relative;

    img {
        width: 100%;
        height: 25vh;
        object-fit: cover;
        object-position: center;
    }
}
</style>