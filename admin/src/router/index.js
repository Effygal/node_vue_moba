import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import ItemEdit from '../views/ItemEdit.vue'
import HeroEdit from '../views/HeroEdit.vue'
import CategoryList from '../views/CategoryList.vue'
import ItemList from '../views/ItemList.vue'
import HeroList from '../views/HeroList.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      { path: 'categories/create' , component: CategoryEdit},
      { path: 'categories/list' , component: CategoryList},
      { path: 'categories/edit/:id' , component: CategoryEdit, props: true},
    
      { path: 'items/create' , component: ItemEdit},
      { path: 'items/list' , component: ItemList},
      { path: 'items/edit/:id' , component: ItemEdit, props: true},
    
      { path: 'heroes/create' , component: HeroEdit},
      { path: 'heroes/list' , component: HeroList},
      { path: 'heroes/edit/:id' , component: HeroEdit, props: true},
    
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
