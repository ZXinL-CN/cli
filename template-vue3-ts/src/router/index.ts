
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { routerModules } from '@/cache/routerCache'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'default',
        component: () => import('../views/default/Index.vue')
    },
    ...routerModules
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((_to: any, _form: any, next: () => void) => {
    next()
})

export default router