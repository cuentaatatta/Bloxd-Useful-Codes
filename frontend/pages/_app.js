import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { auth } from '../lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-2xl font-bold text-bloxd-600">Loading...</div>
        </div>
      ) : (
        <Component {...pageProps} user={user} />
      )}
    </div>
  )
}

export default MyApp