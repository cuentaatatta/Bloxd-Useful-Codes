import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CodesList from '../components/CodesList'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bloxd Useful Codes - Game Codes Hub</title>
        <meta name="description" content="Find and redeem the latest Bloxd.io game codes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <CodesList />
      <Footer />
    </div>
  )
}
