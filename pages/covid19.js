import Head from "../components/head";
import APPBAR from "../components/appbar";
import NAV from "../components/nav";
import FOOTER from "../components/footer";
import Codid19 from "../components/covid19";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/theme";

function Covid19() {
  return (
    <div>
      <Head title="Covid19" description="coronagora" />
      <body>
        <APPBAR />
        <ThemeProvider theme={theme}>
          <NAV />{" "}
        </ThemeProvider>
        <Codid19 />
      </body>
      <FOOTER />
    </div>
  );
}

export default Covid19;
