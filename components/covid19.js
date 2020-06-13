import React from "react";
import styles from "./layout.module.css";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: "Segoe UI Symbol",
  },
  card: {
    display: "flex",
  },
});

export default function COVID19(props) {
  const classes = useStyles(props);
  return (
    <div>
      <Paper elevation={5}>
        <div className={styles.test1}>
          <div className={styles.test2}>
            <Typography variant="h4">O que é COVID-19</Typography>

            <Typography className={classes.root} variant="h6">
              <br />
              <b>A COVID-19</b> é uma doença causada pelo coronavírus
              SARS-CoV-2, que apresenta um quadro <br /> clínico que varia de
              infecções assintomáticas a quadros respiratórios graves. De acordo
              com a <br />
              Organização Mundial de Saúde (OMS), a maioria dos pacientes com
              COVID-19 (cerca de 80%) <br /> podem ser assintomáticos e cerca de
              20% dos casos podem requerer atendimento hospitalar <br /> por
              apresentarem dificuldade respiratória e desses casos
              aproximadamente 5% podem <br />
              necessitar de suporte para o tratamento de insuficiência
              respiratória (suporte ventilatório).
            </Typography>
          </div>
        </div>

        <div className={styles.test1}>
          <div className={styles.test2}>
            <Typography variant="h4">O que é o coronavírus?</Typography>

            <Typography className={classes.root} variant="h6">
              <br />
              Coronavírus é uma família de vírus que causam infecções
              respiratórias. O novo agente do
              <br />
              coronavírus foi descoberto em 31/12/19 após casos registrados na
              China. Provoca a<br />
              doença chamada de coronavírus (COVID-19). Os primeiros coronavírus
              humanos foram
              <br />
              isolados pela primeira vez em 1937. No entanto, foi em 1965 que o
              vírus foi descrito como
              <br />
              coronavírus, em decorrência do perfil na microscopia, parecendo
              uma coroa. A maioria das
              <br />
              pessoas se infecta com os coronavírus comuns ao longo da vida,
              sendo as crianças
              <br />
              pequenas mais propensas a se infectarem com o tipo mais comum do
              vírus. Os
              <br />
              coronavírus mais comuns que infectam humanos são o alpha
              coronavírus 229E e NL63 e<br />
              beta coronavírus OC43, HKU1.
            </Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
}
