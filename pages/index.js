import Head from "next/head";

export default function Home({ data }) {
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

      <div>Tut.by page: {data.length} bytes</div>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await fetch("https://tut.by").then(x => x.text());

  return {
    props: { data },
    unstable_revalidate: 15,
  };
};
