<template>
  <div class="home">
    <h1>HOME</h1>
    <h2>REFS</h2>
    <p>{{ personOne.name }} - {{ personOne.age}}</p>
    <button @click="updatePersonOne">update person 1</button>
    <h2>REACTIVE</h2>
    <p>{{ personTwo.name }} - {{ personTwo.age }}</p>
    <button @click="updatePersonTwo">update person 2</button>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity'

export default {
  name: 'HomeView',
  components: {},
  setup() {
    const personOne = ref({ name: 'Mel', age: 26})
    const personTwo = reactive({ name: 'John', age: 22})

    const updatePersonOne = () => {
      personOne.value.age = 27
    }

     const updatePersonTwo = () => {
      personTwo.age = 45
    }

    return {
      personOne, updatePersonOne, personTwo, updatePersonTwo
    }
  }
}
</script>
