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
        ADD_TODO: (state, payload) => {

            const newTask = {
                id: payload.newId,
                task: payload.task,
                completed: false
            }

            state.todos.push(newTask)
        },
        // Définit si une tâche est faite ou non
        TOGGLE_TODO: (state, payload) => {
            const item = state.todos.find(todo => todo.id === payload)
            item.completed = !item.completed
        },
        // Supprime une tâche
        DELETE_TODO: (state, payload) => {
            const index = state.todos.indexOf(payload)
            state.todos.splice(index, 1)
        },
        // Edite une tâche
        EDIT_TODO: (state, { payload, id = payload.id, task = payload.task, completed = payload.completed}) => {
            const index = state.todos.splice(index, 1, {
                ...payload,
                id,
                task,
                completed
            })
    }
    },
    // Fonctions qui activent les mutations
    actions: {
        addTodo: (context, payload) => {
            context.commit("ADD_TODO", payload)
        },
        toggleTodo: (context, payload) => {
            context.commit("TOGGLE_TODO", payload)
        },
        deleteTodo: (context, payload) => {
            context.commit("DELETE_TODO", payload)
        },
        editTodo: (context, payload) => {
            context.commit("EDIT_TODO", payload)
        }
    }
})