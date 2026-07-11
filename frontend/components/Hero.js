export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-bloxd-600 to-bloxd-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Bloxd Useful Codes</h1>
        <p className="text-xl mb-8 text-bloxd-100">
          Discover and redeem the latest active game codes for Bloxd.io
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-bloxd-700 hover:bg-bloxd-50 px-8 py-3 rounded-lg font-bold transition">
            Browse Codes
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-bloxd-700 px-8 py-3 rounded-lg font-bold transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
