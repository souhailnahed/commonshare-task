<template>
    <div class="container">
    <CarCard v-for="car in cars"
             :key="car.id" 
             :car="car.type" />
    </div>
</template>
<script>

export default {
    async fetch() {
        this.cars = await fetch(
            'https://dm-assignment-commonshare.koyeb.app/api/cars'
            ).then((res) => res.json())
    },
    data() {
        return {
            cars:[]
    }
    }
}
</script>