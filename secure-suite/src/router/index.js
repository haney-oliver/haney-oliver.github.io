import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/components/HomeView'
import QuickstartView from '@/components/QuickstartView'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/quickstart',
        name: 'QuickstartView',
        component: QuickstartView
    }
]

const router = new VueRouter({
    routes
})

export default router
