import { useState, useEffect } from 'react'

const useFetch = url => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortControl = new AbortController()

    fetch(url, { signal: abortControl.signal })
      .then(res => {
        if (!res.ok) {
          throw Error('-could not fetch the data for that resource-')
        }
        return res.json()
      })
      .then(data => {
        setError(null)
        setData(data)
        setIsPending(false)
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setIsPending(false)
          setData(null)
          setError(err.message)
        }
      })

    return () => abortControl.abort()
  }, [url])

  return { data, isPending, error }
}

export default useFetch
