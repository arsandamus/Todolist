<template>

    <div class="item-todo">
        <checkbox @click="toggleTodo()"></checkbox>
        <p>{{ todo.task }}</p>
        <div class="buttons">
            <button-edit @click="editTodo()"></button-edit>
            <button-delete @click="deleteTodo()"></button-delete>
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
            deleteTodo: () => {
                this.$store.dispatch("deleteTodo", this.todo)
            },
            toggleTodo: () => {
                this.$store.dispatch("toggleTodo", this.todo)
            },
            editTodo: () => {
                this.$store.dispatch("editTodo", this.todo)
            }
        }
    }

</script>



<style>

    @import './Item.css';

</style>