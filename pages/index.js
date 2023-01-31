import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Stack Underflow</title>
        <meta name="description" content="Stack Underflow is a lite version of Stack Overflow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={inter.className}>Welcome to Stack Underflow!</h1>
        <code className={styles.code}>By a dev for devs</code>
      </main>
      <footer className={inter.className}>
        Made with love & thunder by Sajawal Fareedi
      </footer>
    </>
  );
}
