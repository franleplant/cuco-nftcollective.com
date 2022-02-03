import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "assets/logo.jpg";
import Header from "components/Header";
import Layout from "components/Layout";
import HorsemenHero from "components/HorsemenHero";
import AboutUs from "components/AboutUs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cuco: NFT Collective</title>
        {/* TODO improve */}
        <meta
          name="description"
          content="We are Cuco! We are an NFT art house. Join us for the latest drops."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Header />
        <main className="min-h-full py-10 mx-auto">
          <HorsemenHero />
          <AboutUs />
          <div className="text-center space-y-4">
            <Image
              src={Logo}
              width="250"
              height="250"
              alt="Cuco: our pet ghost logo"
            />
            <h1>Cuco</h1>
            <h3>NFT Collective</h3>
            <div className="py-10 space-x-4">
              <a
                href="https://twitter.com/CuCo_NFTs"
                target="__blank"
                className="text-2xl"
              >
                <FontAwesomeIcon icon={["fab", "twitter"]} color="#FFFFFF" />
              </a>

              <a
                href="https://www.instagram.com/cuco_nftcollective"
                target="__blank"
                className="text-2xl"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} color="#FFFFFF" />
              </a>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
