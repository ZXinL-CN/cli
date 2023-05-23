import Base from "./Base";

export class Is {
    static admin() {
        const user = JSON.parse(Base.getCookie('user'));
        return user && Array.isArray(user.roles) && user.roles.includes('admin');
    }

    static user() {
        const user = JSON.parse(Base.getCookie('user'));
        return user && Array.isArray(user.roles) && user.roles.includes('user');
    }
}