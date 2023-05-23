import { importAll } from '../utils/importAll'
import { RouteRecordRaw } from 'vue-router'

const routerCache = importAll(import.meta.globEager('@/router/modules/*.ts'))
const routerModules: Array<RouteRecordRaw> = Object.values(routerCache)
const routerNames: Array<string> = Object.keys(routerCache)
export {
    routerCache,
    routerModules,
    routerNames
}