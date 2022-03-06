import { ref } from 'vue'

const getSinglePost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/posts/' + id)
            if(!data.ok) {
                throw Error('Something went wrong, post does not exist')
            }

            post.value = await data.json()
        }
        catch(err) {
            error.value = err.message
            console.log(err.message)
            console.log(error.value)
        }
    }


    return { post, error, load}
}

export default getSinglePost