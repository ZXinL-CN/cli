export function importAll(modules: any) {
    const cache: any = Object.create(null);
    for (const path in modules) {
        cache[path] = modules[path].default;
    }
    return cache;
}