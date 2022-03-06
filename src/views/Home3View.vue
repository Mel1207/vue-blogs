<template>
    <div class="home">
        <h1>Home</h1>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="posts.length">
            <PostList :posts="posts"/>
        </div>
        <div v-else>Loading...</div>
        <!-- <button @click="showPost = !showPost">Toggle Post</button>
        <button @click="posts.pop()">Delete post</button> -->
    </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPost'
export default {
    name: 'Home3',
    components: { PostList },
    setup() {
        const { posts, error, load } = getPosts()

        load()

        return { posts, error }
    },
}
</script>