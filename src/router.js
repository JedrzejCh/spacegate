import Vue from "vue"
import Router from "vue-router"
import Search from "@/views/Search";
import About from "@/views/About";


Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/about',
            name: 'about',
            component: About
        },{
            path: '/search',
            name: 'search',
            component: Search
        },
    ]
})