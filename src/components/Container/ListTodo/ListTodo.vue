<template>
    <div>
        <ul>
            <li :key="index" 
                v-for="(todo, index) in todos" 
                :class="{ checked: todo.completed }">
                <item v-bind:id="index" :todo="todo"></item>
            </li>
        </ul>

    </div>
</template>

<script>

    import Item from '../../Item/Item'

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