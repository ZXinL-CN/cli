import { ElNotification } from "element-plus";

export class Notify {
    static success(message: string) {
        return ElNotification({
            title: 'Success',
            message,
            type: 'success',
        })
    }
    static warning(message: string) {
        return ElNotification({
            title: 'Warning',
            message,
            type: 'warning',
        })
    }
    static error(message: string) {
        return ElNotification({
            title: 'Error',
            message,
            type: 'error',
        })
    }
}