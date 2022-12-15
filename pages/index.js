import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Navbar />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero incidunt, commodi qui nihil tempore aliquid error explicabo. Maxime, quidem eius!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero incidunt, commodi qui nihil tempore aliquid error explicabo. Maxime, quidem eius!</p>

      <Link href="/ninjas">See Ninja Listing</Link>
    </div>
  )
}
