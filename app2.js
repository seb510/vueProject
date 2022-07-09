Vue.createApp({
    data: () => ({
        myHtml: '<h1>Vue 3 App</h1>',
        title: 'Я есто Грут',
        person: {
            firstName: 'Nikolay',
            lastName: "Sebistian",
            age: 29
        },
        items: [1, 2]
    }),
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
        },
        remove(i) {
            this.items.splice(i, 1)
        },
        log(item) {
            console.log('item', item)
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }

}).mount('#app')