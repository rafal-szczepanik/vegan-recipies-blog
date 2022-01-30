import React from 'react';
import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";
import Seo from "../components/Seo";


const Recipes = () => {
  return (
    <Layout>
      <Seo title="Nasze Przepisy"/>
      <main className="page">
        <AllRecipes/>
      </main>
    </Layout>
  );
};


export default Recipes;