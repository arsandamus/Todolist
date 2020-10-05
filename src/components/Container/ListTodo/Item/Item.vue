<template>

    <div class="item-todo">
        <checkbox @click="toggleTodo(todo.id)"></checkbox>
        <p>{{ todo.task }}</p>
        <div class="buttons">
            <button-edit @click="editTodo"></button-edit>
            <button-delete @click="deleteTodo(todo.id)"></button-delete>
        </div>
    </div>

</template>

<script>

    import ButtonDelete from './Button-delete/ButtonDelete'
    import ButtonEdit from './Button-edit/ButtonEdit'
    import Checkbox from './Checkbox/Checkbox'

    export default {
        name: 'Item',
        props: ['todo'],
        components: {
            'button-delete': ButtonDelete,
            'button-edit': ButtonEdit,
            'checkbox': Checkbox
        },
        methods: {
            deleteTodo: function(id) {
                this.$store.dispatch("deleteTodo", id)
            },
            toggleTodo: function(id) {
                this.$store.dispatch("toggleTodo", id)
            },
            editTodo: function(id) {
                this.$store.dispatch("editTodo", id)
            }
        }
    }

</script>



<style>

    @import './Item.css';

</style>