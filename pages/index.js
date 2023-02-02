import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Stack Underflow</title>
        <meta
          name="description"
          content="Stack Underflow is a lite version of Stack Overflow"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={`${inter.className} ${styles.mainnav}`}>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
          <li>Support</li>
        </ul>
      </nav>
      <main className={`${inter.className} ${styles.main}`}>
        <div className={styles.main__heading}>
          <h1>Stack Underflow</h1>
          <code className={styles.code}>By a dev for devs</code>
        </div>

        <div className={styles.blogs}>
          <h2 className={styles.pop__blog_head}>Popular blogs</h2>
          <div className={styles.blogItem}>
            <h3>A popular blog by author</h3>
            <p>This is a popluar blog of 2023. Do check it out</p>
          </div>
          <div className={styles.blogItem}>
            <h3>A popular blog by author</h3>
            <p>This is a popluar blog of 2023. Do check it out</p>
          </div>
          <div className={styles.blogItem}>
            <h3>A popular blog by author</h3>
            <p>This is a popluar blog of 2023. Do check it out</p>
          </div>
        </div>
      </main>
    </>
  );
}
