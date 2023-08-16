import { createRouter, createWebHashHistory} from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import Home from '../view/Home.vue'
import MealList from '../view/MealList.vue'
import MealsByIngredient from '../view/MealsByIngredient.vue'
import MealsByLetter from '../view/MealsByLetter.vue'
import MealsByName from '../view/MealsByName.vue'
import MealDetails from '../view/MealDetails.vue'
import Ingredients from '../view/Ingredients.vue'

const routes = [
    {
        path:'/',
        component: DefaultLayout,
        children:[
            {
                path:'/',
                name:'home',
                component: Home,
            },
            {
                path:'/letter/:letter',
                name:'byLetter',
                component: MealList,
            },
            {
                path:'/by-name/:name?',
                name:'byName',
                component:MealsByName,
            },
            {
                path:'/by-letter/:letter?',
                name:'byLetter',
                component:MealsByLetter,
            },
            {
                path:'/by-ingredient/:ingredient?',
                name:'byIngredient',
                component:MealsByIngredient,
            },
            {
                path:'/ingredients',
                name:'ingredients',
                component: Ingredients,
            },
            {
                path:'/meal/:id',
                name:'mealDetails',
                component: MealDetails,
            },
        ]
    },
    {
        path:'/guest',
        component: GuestLayout,
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;