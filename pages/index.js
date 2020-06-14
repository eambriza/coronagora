import { useEffect } from "react";

import Head from "../components/head";
import NAV from "../components/nav";
import FOOTER from "../components/footer";
import STATS from "../components/stats";
import APPBAR from "../components/appbar";
//
import fetch from "node-fetch";
//

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/theme";

function Home({
  day,
  active,
  activeT,
  recovered,
  recoveredT,
  deaths,
  deathsT,
  total,
}) {
  useEffect(() => {
    //getStaticProps();
    //console.log("window.innerWidth", window.innerWidth);
  });

  return (
    // <p>Next.js has {stars} ⭐️</p>

    <div>
      <Head title="Coronagora" description="coronagora" />

      <body>
        <APPBAR />
        <ThemeProvider theme={theme}>
          <NAV />
        </ThemeProvider>
        <STATS
          day={day}
          active={active}
          activeT={activeT}
          recovered={recovered}
          recoveredT={recoveredT}
          deaths={deaths}
          deathsT={deathsT}
          total={total}
        />
      </body>
      <FOOTER />
    </div>
  );
}

/* export async function getServerSideProps(country = "Mozambique") {
  const res = await fetch(
    `https://covid-193.p.rapidapi.com/statistics?country=` + { country } + ``,
 */
export async function getServerSideProps() {
  const res = await fetch(
    `https://covid-193.p.rapidapi.com/statistics?country=Mozambique`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "9610555f09mshbb22dfc95a4e6bbp1e8df6jsn8741d10c18ec",
      },
    }
  );
  const json = await res.json();
  const activeT =
    Math.round(
      (json.response[0].cases.active / json.response[0].cases.total) * 100 * 10
    ) / 10;
  const recoveredT =
    Math.round(
      (json.response[0].cases.recovered / json.response[0].cases.total) *
        100 *
        10
    ) / 10;
  const deathsT =
    Math.round(
      (json.response[0].deaths.total / json.response[0].cases.total) * 100 * 10
    ) / 10;
  const total = json.response[0].cases.total;

  console.log(json.response[0]);
  ////////////////////

  /*   console.log("NEW CASES=   " + json.response[0].cases.new);
  console.log("active CASES=  " + json.response[0].cases.active);
  console.log("critical CASES=  " + json.response[0].cases.critical);
  console.log("recovered CASES=  " + json.response[0].cases.recovered);
  console.log("total CASES=  " + json.response[0].cases.total);
  console.log("deaths.total CASES=  " + json.response[0].deaths.total);
  console.log("tests.total CASES=  " + json.response[0].tests.total);
  console.log("day CASES=  " + json.response[0].day); */

  return {
    props: {
      day: json.response[0].day,
      active: json.response[0].cases.active,
      activeT: activeT,
      recovered: json.response[0].cases.recovered,
      recoveredT: recoveredT,
      deaths: json.response[0].deaths.total,
      deathsT: deathsT,
      total: json.response[0].cases.total,
    },
  };
}

export default Home;
