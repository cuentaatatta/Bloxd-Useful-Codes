import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import AdminPanel from '../components/AdminPanel'

export default function Admin({ user }) {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (!user) {
      router.push('/login')
      return
    }

    setIsAdmin(true)
  }, [user, router])

  if (!isAdmin) {
    return (
      <div>
        <Header />
        <div className="flex items-center justify-center h-screen">
          <div className="text-2xl font-bold text-red-600">Access Denied</div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>Admin Panel - Bloxd Useful Codes</title>
      </Head>
      <Header />
      <AdminPanel user={user} />
    </div>
  )
}
