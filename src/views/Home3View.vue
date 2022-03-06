<template>
    <div class="home">
        <h1>Home</h1>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name: 'Home3',
    setup() {
        const posts = ref([
            {title: 'Welcome to my first blog', body: 'Lorem ipsum', id: 1},
            {title: 'Best css practices', body: 'Lorem ipsum dolor', id: 2},
        ])


        return { posts }
    },
}
</script>