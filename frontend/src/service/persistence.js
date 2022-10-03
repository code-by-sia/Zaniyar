export default {
    async load(key, defaultValue = {}) {
        if (localStorage.getItem(key)==null) {
            this.save(key, defaultValue)
        }
        const contents = localStorage.getItem(key)
        return JSON.parse(contents)
    },

    async save(key, contents) {
        localStorage.setItem(key, JSON.stringify(contents))
    }
}