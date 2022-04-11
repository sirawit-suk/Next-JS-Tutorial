import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Alert from "../components/alert";
import utilStyles from "../styles/utils.module.css";

import { getSortedPostsData } from "../lib/posts";

import Date from "../components/date";

// for static rendering (update once at build time)
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// for server side rendering (update every request)
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      xxx
      <section className={utilStyles.headingMd}>
        <h1>This is home Page</h1>
        <Link href={"/posts/first-post"}>
          <a>Go to First Post</a>
        </Link>
        <Alert type={"error"}>Wtf</Alert>
        <p>
          Hello! I'm Pop. A boy who really wanna sleep all the day and night
        </p>
      </section>
      xxx
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
