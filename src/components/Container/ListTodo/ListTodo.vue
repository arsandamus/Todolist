<template>
    <div>
        <div v-if="todos.length === 0">
            <h3>Reposes-toi !</h3>
            <i class="fas fa-battery-empty"></i>
        </div>
        <ul>
            <li :key="index"
                v-for="(todo, index) in todos"
                :class="{completed: todo.completed}">
                <item :todo="todo"></item>
            </li>
        </ul>
    </div>
</template>

<script>

    import Item from './Item/Item'

    export default {
        name:'ListTodo',
        components: {
            'item': Item
        },
        computed: {
            todos() {
                return this.$store.getters.getTodos
            }
        },
    }
</script>

<style>

</style>