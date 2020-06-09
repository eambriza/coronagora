import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function Sintomas() {
  return (
    <>
      <Layout>
        <Head>
          <title>Sintomas</title>
        </Head>
        <h1>Sintomas</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
