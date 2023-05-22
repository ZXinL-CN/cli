/**
 * 全局方法类基类
 */

import Cookie from './Cookie';
import _ from "lodash-es"
const IS_DEV = process.env.NODE_ENV == 'development'

export default class Base {

    static IS_DEV = IS_DEV;

    static Cookie = Cookie
    static Storage = Storage

    /** 通用常量 **/
    static cookie = "Authorization";
    static default_exp_value = 86400; //! 秒

    /** 复制对象或数组 */
    static cloneObjOrArr(obj: object) {
        const a = JSON.stringify(obj);
        const b = JSON.parse(a);
        return b;
    }
    /** deep clone 深度克隆引用变量 **/
    static deepClone(obj: any) {
        return _.cloneDeep(obj)
    }
    /** Cookie相关 */
    static setCookie(cvalue: string | number, cname: string = Base.cookie, time: number = 1000000000, domain = "") {
        Cookie.set(cname, cvalue, time, domain)
    }
    static getCookie(cname: string) {
        return Cookie.get(cname)
    }
    static clearCookie(cname: string) {
        Cookie.clear(cname)
    }
}
