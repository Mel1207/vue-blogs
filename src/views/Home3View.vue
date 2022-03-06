<template>
    <div class="home">
        <h1>Home</h1>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="posts.length">
            <PostList v-if="showPost" :posts="posts"/>
        </div>
        <div v-else>Loading...</div>
        <!-- <button @click="showPost = !showPost">Toggle Post</button>
        <button @click="posts.pop()">Delete post</button> -->
    </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from '@vue/reactivity'
export default {
    name: 'Home3',
    components: { PostList },
    setup() {
        const posts = ref([])
        const error = ref(null)

        const load = async () => {
            try {
                let data = await fetch('http://localhost:3000/posts')
                if(!data.ok) {
                    throw Error('Something went wrong, no data available')
                }

                posts.value = await data.json()
            }
            catch(err) {
                error.value = err.message
                console.log(err.message)
                console.log(error.value)
            }
        }

        load()

        const showPost = ref(true)


        return { posts, showPost, error }
    },
}
</script>