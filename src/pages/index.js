import { useState } from "react";
import Head from "next/head";

import styles from "@/styles/index.module.css";
import Navbar from "@/components/navbar/navbar";
import Subtitle from "@/components/tipography/subtitle/subtitle";
import Container from "@/components/conteiner/container";
import SaleCard from "@/components/cards/saleCard/saleCard";
import GameCard from "@/components/cards/gameCard/gameCard";

export default function Home() {
  const [cart, setCart] = useState([]);

  const handleAddProduct = (info) => {
    setCart([...cart, info]);
  };

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos));
  };
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
        <Navbar cart={cart} onRemove={handleRemoveProduct} />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard
                image={"league-of-legends.jpg"}
                discount={"30%"}
                fullPrice={"50.00"}
                discountPrice={"45.00"}
                onAdd={() =>
                  handleAddProduct({
                    name: "League Of Legends",
                    price: 45.00,
                    image: "league-of-legends.jpg",
                  })
                }
              />
              <SaleCard
                image={"dota-2.jpg"}
                discount={"40%"}
                fullPrice={"25.90"}
                discountPrice={"10.36"}
                onAdd={() =>
                  handleAddProduct({
                    name: "Dota 2",
                    price: 25.90,
                    image: "dota-2.jpg",
                  })
                }
              />
              <SaleCard
                image={"valorant.jpg"}
                discount={"50%"}
                fullPrice={"89.90"}
                discountPrice={"44.95"}
                onAdd={() =>
                  handleAddProduct({
                    name: "Valorant",
                    price: 44.95,
                    image: "valorant.jpg",
                  })
                }
              />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard
                onAdd={() =>
                  handleAddProduct({
                    name: "Counter Strike: Global Offensive",
                    price: 99.90,
                    image: "counter-strike.jpg",
                  })
                }
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
