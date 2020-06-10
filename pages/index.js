import Head from "next/head";
//import Link from "next/link";

/* .banner {
  border-top: 8px solid #32c8de;
  background: #fff url("banner.jpg") repeat-x center center;
} */

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CoronAgora</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <h1>A nossa pagina esta em fase de construção!</h1>
      </main>

      <footer>
        <h3>CoronAgora</h3>
      </footer>
    </div>
  );
}
