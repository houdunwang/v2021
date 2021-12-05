import { ref, Ref } from 'vue'

export default <T>(url: RequestInfo, options?: RequestInit) => {
    const response = ref<T>()

    const request = async () => {
        const result = await fetch(url, options)
        response.value = await result.json()
    }

    return { response, request }
}
