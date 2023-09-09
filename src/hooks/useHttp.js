import { useState, useEffect } from 'react'

const useHttp = (url, method, body) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch(url, {
              method: method,
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            })

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }      
    
            const responseData = await response.json();
            setData(responseData)
            setIsLoading(false)
        } catch (err) {
            setError(err)
            setIsLoading(false)
        }
    }

    fetchData()
    }, [url, method, body])

    return { data, isLoading, error }
}

export default useHttp