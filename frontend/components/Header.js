import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { auth } from '../lib/firebase'
import { signOut } from 'firebase/auth'

export default function Header() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser)
    })
    return unsubscribe
  }, [])

  const handleLogout = async () => {
    await signOut(auth)
    router.push('/')
  }

  return (
    <header className="bg-bloxd-700 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">🎮 Bloxd Useful Codes</div>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/" className="hover:text-bloxd-100 transition">
              Home
            </Link>
            <Link href="/#codes" className="hover:text-bloxd-100 transition">
              Codes
            </Link>

            {user ? (
              <>
                <Link href="/admin" className="hover:text-bloxd-100 transition">
                  Admin
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="bg-bloxd-600 hover:bg-bloxd-500 px-4 py-2 rounded transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
