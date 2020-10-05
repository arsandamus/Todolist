<template>
    <div class="container mt-5">

        <h1>Que dois-je faire aujourd'hui ?</h1>
        
        <create-todo></create-todo>

        <list-todo></list-todo>

    </div>
</template>



<script>

    import CreateTodo from './CreateTodo/CreateTodo'
    import ListTodo from './ListTodo/ListTodo'
    
    export default {
        name: 'Container',
        components: {
            'create-todo': CreateTodo,
            'list-todo': ListTodo
        },
    }
    


</script>



<style>

    @import './Container.css';

</style>