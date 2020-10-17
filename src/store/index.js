import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // notre state de base
    state: {

        todos: []

    },
    // récupère l'état actuel de notre state
    getters: {

        getTodos: state => state.todos

    },
    // Permet le changement de données dans notre state
    mutations: {

        // Ajoute une nouvelle tâche
        ADD_TODO: (state, todoItem) => {

            state.todos.push({
                id: state.todos.length + 1,
                task: todoItem,
                completed: false
            });
            },
        // Définit si une tâche est faite ou non
        TOGGLE_TODO: (state, todoItem) => {

            const toggle = state.todos.find(todo => todo.id === todoItem.id).completed
            state.todos.find(todo => todo.id === todoItem.id).completed = !toggle
            
        },
        // Supprime une tâche
        DELETE_TODO: (state, todoItem) => {
            let index = state.todos.indexOf(item => item.id === todoItem.id)
            state.todos.splice(index, 1)
        },
        // Edite une tâche
    //     EDIT_TODO: (state, id) => {
    //         state.todos.find(todo => todo.id === id) = 
    //         const index = state.todos.splice(index, 1, {
    //             ...,
    //             task,
    //             completed
    //         })
    // }
    },
    // Fonctions qui activent les mutations
    actions: {
        addTodo: ({commit}, todoItem) => {
            commit('ADD_TODO', todoItem)
        },
        toggleTodo: ({commit}, todoItem) => {
            commit("TOGGLE_TODO", todoItem)
        },
        deleteTodo: ({commit}, todoItem) => {
            commit("DELETE_TODO", todoItem)
        },
        editTodo: ({commit}, todoItem) => {
            commit("EDIT_TODO", todoItem)
        }
    }
})