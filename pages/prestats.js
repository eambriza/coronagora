import Link from "next/link";
import fetch from "node-fetch";

function PreactStars({ stars }) {
  return (
    <div>
      <p>Preact has {stars} ⭐</p>
      <Link href="/">
        <a>I bet Next.js has more stars (?)</a>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
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

  /*  console.log(json.response[0].cases[0]);
  console.log(json.response[0].cases[1]);
  console.log(json.response[0].cases[2]);
  console.log(json.response[0].cases[3]);
  console.log(json.response[0].cases[5]);

  console.log(json.response[0].deaths[2]);
  console.log(json.response[0].tests[1]);
  console.log(json.day); */

  return {
    props: {
      stars: 0,
    },
  };
}

export default PreactStars;

/* //RAPIDAPI
var unirest = require("unirest");

var req = unirest("GET", "https://covid-193.p.rapidapi.com/statistics");

req.headers({
	"x-rapidapi-host": "covid-193.p.rapidapi.com",
	"x-rapidapi-key": "9610555f09mshbb22dfc95a4e6bbp1e8df6jsn8741d10c18ec",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
}); */

/* 
export async function getStaticProps() {
    const res = await fetch("https://covid-193.p.rapidapi.com/statistics");
    const json = await res.json();
    console.log(json);
  
    return {
      props: {
        stars: 0,
      },
    };
  } */
