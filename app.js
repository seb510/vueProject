const App = {
    data() {
        return {
            placeholderString: 'Введите название',
            title: 'Список моих заметок',
            inputValue: '',
            notes: ["Заметка 1", "Заметка 2", 'My notes 3']
        }
    },
    methods: {
        /*inputChangeHeandler(event) {
            this.inputValue = event.target.value
        },*/
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(idx) {
            this.notes.splice(idx, 1)
        }

    },
    computed: {
        doubleCountComp() {
            return this.notes.length * 2;
        },
    },
    watch: {
        inputValue(value) {
            if (value.length > 40) {
                this.inputValue = ''
            }
            console.log(value);
        }
    }
}

const app = Vue.createApp(App);
app.mount('#app')