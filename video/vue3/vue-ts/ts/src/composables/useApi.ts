import { ref } from 'vue'

export default async (url: RequestInfo, options: RequestInit) => {
    const response = ref<{ title?: string; id?: number }>()

    const request = async () => {
        response.value = await fetch(url, options).then(r => r.json())
    }

    return { response, request }
}
