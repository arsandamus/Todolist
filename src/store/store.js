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
                task: todoItem,
                completed: false
            });
            },
        // Définit si une tâche est faite ou non
        TOGGLE_TODO: (state, todoItem) => {
            const item = state.todos.find(todo => todo.id === todoItem)
            item.completed = !item.completed
        },
        // Supprime une tâche
        DELETE_TODO: (state, todoItem) => {
            let index = state.todos.indexOf(item => item.task === todoItem.task)
            state.todos.splice(index, 1)
        },
        // Edite une tâche
        EDIT_TODO: (state, { task = todoItem.task, completed = todoItem.completed}) => {
            const index = state.todos.splice(index, 1, {
                ...todoItem,
                task,
                completed
            })
    }
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
        editTodo: (context, payload) => {
            context.commit("EDIT_TODO", payload)
        }
    }
})