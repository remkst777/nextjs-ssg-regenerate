import Head from "next/head";
import fs from "fs";

export default function Home({ exampleJson }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <div>{exampleJson}</div>
    </div>
  );
}

export const getStaticProps = async () => {
  const exampleJson = fs.readFileSync("public/db.json", "utf-8");

  return {
    props: { exampleJson },
    unstable_revalidate: 15,
  };
};
