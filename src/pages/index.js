import Head from "next/head";

import styles from "@/styles/index.module.css";
import Navbar from "@/components/navbar/navbar";
import Subtitle from "@/components/tipography/subtitle/subtitle";
import Container from "@/components/conteiner/container";
import SaleCard from "@/components/cards/saleCard/saleCard";
import GameCard from "@/components/cards/gameCard/gameCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta
          name="description"
          content="DevSteam: A sua loja online de games"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard 
              image={"league-of-legends.jpg"} 
              discount={"30%"} 
              fullPrice={'50,00'}
              discountPrice={'45,00'} />
              <SaleCard 
              image={"dota-2.jpg"}
              discount={"40%"} 
              fullPrice={'25,90'}
              discountPrice={'10,36'}  />
              <SaleCard 
              image={"valorant.jpg"} 
              discount={"50%"} 
              fullPrice={'89,90'}
              discountPrice={'44,95'} />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
