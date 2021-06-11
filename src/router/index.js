import { createRouter, createWebHistory } from 'vue-router'

import About from '@/components/middle/About'
import Property  from '/views/PropertyManagement'
import Liasing from '/views/LiasingServices'
import Areas from '/views/AreasWeServices'
import Blog from '/views/Blog'
import Contact from '/views/Contact'
import Middle from "@/components/Middle";

const routes = [
    {path:'/about' ,component: About },
    {path:'/' ,component: Middle },
    {path:'/propertymanagement' ,component: Property },
    {path:'/liasingservices' ,component: Liasing },
    {path:'/areasweservices' ,component: Areas },
    {path:'/blog' ,component: Blog },
    {path:'/contact' ,component: Contact },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
