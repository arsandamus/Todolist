<template>

    <div class="item-todo">
        <checkbox @click.native="toggleTodo"></checkbox>
        <p v-if="!showInput">{{ todo.task }}</p>
        <div v-if="showInput">
            <input v-model="editTask" type="text" id="editTask">
        </div>
        <div class="buttons">
            <button-edit @click.native="editTodo"></button-edit>
            <button-delete @click.native="deleteTodo"></button-delete>
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
        data() {
            return{
                showInput: false,
            }
        },
        components: {
            'button-delete': ButtonDelete,
            'button-edit': ButtonEdit,
            'checkbox': Checkbox
        },
        methods: {
            deleteTodo() {
                this.$store.dispatch("deleteTodo", this.todo)
            },
            toggleTodo() {
                this.$store.dispatch("toggleTodo", this.todo)
            },
            editTodo() {
                this.showInput = !this.showInput
                this.$store.dispatch("editTodo", this.todo)
            }
        }
    }

</script>



<style>

    @import './Item.css';

</style>