import React from "react";
import Layout from "../components/Layout";
import {StaticImage} from "gatsby-plugin-image";
import AllRecipes from "../components/AllRecipes";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <Layout>
      <Seo title="Nasze Inspiracje"/>
      <main className="page">
        <header className="hero">
          <StaticImage src="../assets/images/weganskie-paczki2.jpg"
                       alt="eggs"
                       className="hero-img"
                       placeholder="traceSVG"
                       layout="fullWidth">
          </StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Wegańskie Inspiracje</h1>
              <h4>przepisy w zgodzie z naturą</h4>
            </div>
          </div>
        </header>
        <AllRecipes/>
      </main>
    </Layout>
  );
}
