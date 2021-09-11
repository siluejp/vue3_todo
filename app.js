Vue.createApp({
    data: function(){
        return {
            todoTitle: '',
            todoDescrption: '',
            todoChategories: [],
            selectedCategory: '',
            hideDoneTodo: false,
            searchWord: '',
        }
    }
}).mount('#app')