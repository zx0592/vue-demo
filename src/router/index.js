import Vue from 'vue'
import Router from 'vue-router'

import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Increase from '../components/Increase.vue'

import List from '../page/List.vue'
import Add from '../page/Add.vue'

Vue.use(Router)


const routes = [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
		{
			path:'/register',
			name:'register',
			component:Register
		},
		{
			path:'/list',
			name:'list',
			component:List
		},
		{
			path:'/add',
			name:'add',
			component:Add
		},
		{
			path:'/increase',
			name:'increase',
			component:Increase
		}
    ]

    const router = new Router({
        routes
    })

    export default router

