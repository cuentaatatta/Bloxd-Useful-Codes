import { useState } from 'react'
import axios from 'axios'

export default function AdminPanel({ user }) {
  const [code, setCode] = useState('')
  const [reward, setReward] = useState('')
  const [description, setDescription] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const token = await user.getIdToken()
      await axios.post(
        'http://localhost:5000/api/codes',
        {
          code,
          reward,
          description,
          expiryDate,
          active: true,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )

      setMessage('Code added successfully!')
      setCode('')
      setReward('')
      setDescription('')
      setExpiryDate('')
    } catch (error) {
      setMessage('Error adding code: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Admin Panel</h2>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Game Code
              </label>
              <input
                type="text"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bloxd-500 focus:border-transparent"
                placeholder="e.g., BLOXD2024"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reward
              </label>
              <input
                type="text"
                required
                value={reward}
                onChange={(e) => setReward(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bloxd-500 focus:border-transparent"
                placeholder="e.g., 500 coins"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bloxd-500 focus:border-transparent"
                placeholder="Code description..."
                rows="4"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date
              </label>
              <input
                type="date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bloxd-500 focus:border-transparent"
              />
            </div>

            {message && (
              <div className={`p-4 rounded-lg ${
                message.includes('success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-bloxd-600 hover:bg-bloxd-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-50"
            >
              {loading ? 'Adding Code...' : 'Add Code'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
