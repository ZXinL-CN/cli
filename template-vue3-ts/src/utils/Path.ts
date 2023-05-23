export class Path {

    static baseApiPath() {
        return (import.meta.env.VITE_BASE_URL || 'http://localhost:3000/')
    }

    static baseFilePath():string {
        return 'http://localhost:3000/';
    }

    static getFilepath(fileName:string, routePath: string = 'images'):string {
        return `${Path.baseFilePath()}${routePath}/${fileName}`;
    }
}