import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h2 className={styles.title}>Homepage</h2>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero incidunt, commodi qui nihil tempore aliquid error explicabo. Maxime, quidem eius!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero incidunt, commodi qui nihil tempore aliquid error explicabo. Maxime, quidem eius!</p>

        <Link className={styles.btn} href="/ninjas">See Ninja Listing</Link>
      </div>
    </>
  )
}
