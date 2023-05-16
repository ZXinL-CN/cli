import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    entries: [
        './bin/index',
    ],
    rollup: {
        emitCJS: true,
    },
    clean: true,
    declaration: true,
})