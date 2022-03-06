<template>
    <div class="home">
        <h1>Home</h1>
        <input type="text" v-model="search">
        <p>search term - {{ search }}</p>
        <div v-for="name in matchingNames" :key="name">{{ name }}</div>
        <button @click="handleClick">Stop watch</button>
    </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
    name: 'Home2',
    setup() {
        const search = ref('')
        const names = ref(['Mel', 'John', 'Doe', 'David', 'Johnson', 'Sun'])

        const stopWatch = watch(search, () => {
            console.log('watch function run')
        })

        const stopEffect = watchEffect(() => {
            console.log('watch effect function running', search.value)
        })
        
        const matchingNames = computed(() => {
            return names.value.filter(name => name.includes(search.value))
        })

        const handleClick = () => {
            stopWatch()
            stopEffect()
        }

        return { names, search, matchingNames, handleClick }
    }
}
</script>