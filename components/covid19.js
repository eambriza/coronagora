import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    fontFamily: "Raleway",
    marginTop: 20,
    textIndent: "25px",
    maxWidth: 800,
    border: 50,
  },
  card: {
    display: "flex",
    maxWidth: 900,
    marginLeft: 500,
  },
  media: {
    maxWidth: 800,
    height: 300,
  },
  test1: {
    textAlign: "center",
  },
  test2: {
    padding: "50px",
    display: "inline-block",
    textAlign: "justify",
  },
});

export default function COVID19(props) {
  const classes = useStyles(props);
  return (
    <div>
      <Paper elevation={5}>
        <div className={classes.test1}>
          <div className={classes.test2}>
            <Card className={classes.root} elevation={18}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="./covid.jpg"
                  title="covid"
                />
                <CardContent>
                  <Typography variant="h4">O que é COVID-19?</Typography>
                  <Typography
                    className={classes.root}
                    color="textSecondary"
                    variant="h6"
                  >
                    A COVID-19 é uma doença causada pelo coronavírus SARS-CoV-2,
                    que apresenta um quadro clínico que varia de infecções
                    assintomáticas a quadros respiratórios graves. De acordo com
                    a Organização Mundial de Saúde (OMS), a maioria dos
                    pacientes com COVID-19 (cerca de 80%) podem ser
                    assintomáticos e cerca de 20% dos casos podem requerer
                    atendimento hospitalar por apresentarem dificuldade
                    respiratória e desses casos aproximadamente 5% podem
                    necessitar de suporte para o tratamento de insuficiência
                    respiratória (suporte ventilatório).
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
        <div className={classes.test1}>
          <div className={classes.test2}>
            <Card className={classes.root} elevation={18}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="./coronavirus.jpg"
                  title="coronavirus"
                />
                <CardContent>
                  <Typography variant="h4">O que é o coronavírus?</Typography>
                  <Typography
                    className={classes.root}
                    color="textSecondary"
                    variant="h6"
                  >
                    Coronavírus é uma família de vírus que causam infecções
                    respiratórias. O novo agente do coronavírus foi descoberto
                    em 31/12/19 após casos registrados na China. Provoca a
                    doença chamada de coronavírus (COVID-19). Os primeiros
                    coronavírus humanos foram isolados pela primeira vez em
                    1937. No entanto, foi em 1965 que o vírus foi descrito como
                    coronavírus, em decorrência do perfil na microscopia,
                    parecendo uma coroa. A maioria das pessoas se infecta com os
                    coronavírus comuns ao longo da vida, sendo as crianças
                    pequenas mais propensas a se infectarem com o tipo mais
                    comum do vírus. Os coronavírus mais comuns que infectam
                    humanos são o alpha coronavírus 229E e NL63 e beta
                    coronavírus OC43, HKU1.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </Paper>
    </div>
  );
}
