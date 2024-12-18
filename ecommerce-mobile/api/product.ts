const API_URl = process.env.EXPO_PUBLIC_API_URL

export async function listProducts() {

    try {
        const res = await fetch(`${API_URl}/products`)
        const data = await res.json();

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);  // Throw an error for non-2xx status codes.  // Throw an error for non-2xx status codes.  // Throw an error for non-2xx status codes.   // Throw an error for non-2xx status codes.   // Throw an error for non-2xx status codes.   // Throw an error for non-2xx status codes.   // Throw an error for non-2xx status codes.   // Throw an error for non-2xx status codes.   // Throw an error for non-2xx status codes.   // Throw an error for non-2xx status codes.   // Throw an error for non-2xx status codes.   // Throw an error for non-2xx status codes.   // Throw an error for non-2xx status codes.   // Throw an error for non-2xx status codes.   // Throw
        }
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

export async function fetchProductById(id: number) {
    const res = await fetch(`${API_URl}/products/${id}`)
    const data = await res.json();

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    return data;
}
