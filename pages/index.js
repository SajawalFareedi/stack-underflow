import Head from "next/head";
import Link from "next/link";
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
          <Link href='/' scroll={false}><li>Home</li></Link>
          <Link href='/questions' scroll={false}><li>Questions</li></Link>
          <Link href='/about' scroll={false}><li>About</li></Link>
          <Link href='/support' scroll={false}><li>Support</li></Link>
        </ul>
      </nav>
      <main className={`${inter.className} ${styles.main}`}>
        <div className={styles.main__heading}>
          <h1>Stack Underflow</h1>
          <code className={styles.code}>One problem, multiple solutions</code>
        </div>

        <div className={styles.blogs}>
          <h2 className={styles.pop__blog_head}>Top Questions</h2>
          <div className={styles.blogItem}>
            <h3>
              Why is processing a sorted array faster than processing an
              unsorted array?
            </h3>
            <p>
              Here is a piece of C++ code that shows some very peculiar
              behavior. For some reason, sorting the data (before the timed
              region) miraculously makes the primary loop almost six times
              faster: #include &...
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>Which JSON content type do I use?</h3>
            <p>
              There are many &quot;standards&quot; for the JSON content type:
              application/json application/x-javascript text/javascript
              text/x-javascript text/x-json Which one do I use, and where? I
              assume ...
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>How do I undo the most recent local commits in Git?</h3>
            <p>
              I accidentally committed the wrong files to Git, but didn&apos;t push
              the commit to the server yet. How do I undo those commits from the
              local repository?
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
