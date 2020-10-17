<template>
    <div>
        <form>

            <div class="form-group">
                <label for="task">Tâche</label>
                <input v-model="task" type="text" id="task" class="form-control" placeholder="Ce que je dois faire ...">
            </div>
            <button @click.prevent="addTodo" class="btn btn-primary mb-3">Créer une tâche</button>


        </form>
    </div>
</template>

<script>
    
    export default {
        data(){
            return {
                task: '',
                id: 0
                }
        },
        methods: {
            addTodo() {
                this.$store.dispatch("addTodo", this.task)
            }
        }
    }
</script>

<style>

</style>