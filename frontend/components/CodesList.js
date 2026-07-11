import { useEffect, useState } from 'react'
import axios from 'axios'

export default function CodesList() {
  const [codes, setCodes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCodes()
  }, [])

  const fetchCodes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/codes')
      setCodes(response.data)
    } catch (error) {
      console.error('Error fetching codes:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="text-center py-20">Loading codes...</div>
  }

  return (
    <section id="codes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Active Codes</h2>

        {codes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No codes available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codes.map((code) => (
              <div key={code._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{code.code}</h3>
                  <p className="text-sm text-gray-500 mt-1">{code.reward}</p>
                </div>

                <p className="text-gray-700 mb-4">{code.description}</p>

                <div className="flex justify-between items-center text-sm mb-4">
                  <span className={`px-3 py-1 rounded ${
                    code.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {code.active ? 'Active' : 'Expired'}
                  </span>
                  {code.expiryDate && (
                    <span className="text-gray-600">
                      Expires: {new Date(code.expiryDate).toLocaleDateString()}
                    </span>
                  )}
                </div>

                <button className="w-full bg-bloxd-600 hover:bg-bloxd-700 text-white font-bold py-2 rounded transition">
                  Copy Code
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
