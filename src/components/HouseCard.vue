<template>
    <div class="house-card border border-primary rounded shadow">
        <img :src="house.imgUrl" alt="picture of house" class="img-fluid rounded-top">
        <p class="fw-bold text-center">{{ house.bedrooms }} {{ house.bathrooms }}</p>
        <p>{{ house.description }}</p>


    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { House } from '../models/House';
export default {
    props: { house: { type: House, required: true } },
    setup(props) {
        return {}
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