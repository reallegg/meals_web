<template>
       <div
            class="bg-white shadow rounded-x1"
        >
            <router-link :to="{name: 'mealDetails', params: {id:meal.idMeal} }">
                <img 
                :src="meal.strMealThumb" 
                :alt="meal.strMeal" 
                class="rounded-t-x1 w-full h-48 object-cover"
                > 
            </router-link>           
            <div class="p-3">
                <h3 class="font-bold">{{ meal.strMeal }}</h3>
                <p class="md-4">
                    descriptiontest
                </p>
                <div class="flex items-center justify-between">
                    <YoutubeButton :href="meal.strYoutube">
                    YouTube
                    </YoutubeButton>
                </div>
            </div>
        </div>
</template>

<script setup>
import YoutubeButton from '../components/YoutubeButton.vue';
const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
})

</script>