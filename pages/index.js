import { useEffect, useState } from "react";
import APPBAR from "../components/appbar";
import FOOTER from "../components/footer";
import Head from "../components/head";
import NAV from "../components/nav";
import STATS from "../components/stats";
import { ThemeProvider } from "@material-ui/core/styles";
import fetch from "node-fetch";
import theme from "../components/theme";

export default function Home() {
  const [country, setCountry] = useState(["Mozambique", "Moçambique"]);
  const [countryDetails, setCountryDetails] = useState({});

  const getCountryDetails = async (val) => {
    console.log(val);
    setCountry(val);
    const res = await fetch(
      `https://covid-193.p.rapidapi.com/statistics?country=${val[0]}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key":
            "9610555f09mshbb22dfc95a4e6bbp1e8df6jsn8741d10c18ec",
        },
      }
    );

    const json = await res.json();
    const activeT =
      Math.round(
        (json.response[0].cases.active / json.response[0].cases.total) *
          100 *
          10
      ) / 10;
    const recoveredT =
      Math.round(
        (json.response[0].cases.recovered / json.response[0].cases.total) *
          100 *
          10
      ) / 10;
    const deathsT =
      Math.round(
        (json.response[0].deaths.total / json.response[0].cases.total) *
          100 *
          10
      ) / 10;

    setCountryDetails({
      day: json.response[0].day,
      active: json.response[0].cases.active,
      activeT: activeT,
      recovered: json.response[0].cases.recovered,
      recoveredT: recoveredT,
      deaths: json.response[0].deaths.total,
      deathsT: deathsT,
      total: json.response[0].cases.total,
    });
  };

  useEffect(() => {
    getCountryDetails(["Mozambique", "Moçambique"]);
  }, []);

  return (
    <div>
      <Head title="Coronagora" description="coronagora" />
      <body>
        <APPBAR />
        <ThemeProvider theme={theme}>
          <NAV />
        </ThemeProvider>
        <STATS
          {...countryDetails}
          country={country}
          getCountryDetails={getCountryDetails}
        />
        <FOOTER />
      </body>
    </div>
  );
}
