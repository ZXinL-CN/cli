import Swal, { SweetAlertOptions } from 'sweetalert2';

export class Confirm {
    static async warning(title: string): Promise<any> {
        return await Swal.fire({
            title: title,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0e88e5",
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            reverseButtons: true,
        });
    }

    static async success(title: string): Promise<any> {
        return await Swal.fire({
            title: title,
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#0e88e5",
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            reverseButtons: true,
        });
    }

    static async html(title: string, htmlString: string = '', options:SweetAlertOptions = {}): Promise<any> {
        return await Swal.fire({
            title: title,
            icon: "warning",
            html: htmlString,
            showCancelButton: true,
            confirmButtonColor: "#0e88e5",
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            reverseButtons: true,
            ...options,
        });
    }
}