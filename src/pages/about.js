import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Link, graphql} from "gatsby";
import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import Seo from "../components/Seo";

export const query = graphql`
  {
    allContentfulVeganRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;
const About = ({data: {allContentfulVeganRecipe: {nodes: recipes}}}) => {
  return (
    <Layout>
      <Seo title="O nas"/>
      <main className="page">
        <section className="about-page">
          <article>
            <h3>Wegańskie inspiracje z miłości do natury</h3>
            <p>adipisicing elit. Aliquam deserunt eius maiores maxime nam praesentium quibusdam. Aspernatur </p>
            <p>consequuntur cupiditate distinctio eveniet explicabo itaque nemo, officia omnis perspiciatis quis quod
              reprehenderit.</p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            layout="constrained"
            placeholder="blurred"/>
        </section>
        <section className="featured-recipes">
          <h4>Koniecznie sprawdż nasze przepisy!</h4>
          <RecipesList recipes={recipes}/>
        </section>
      </main>
    </Layout>
  );
};


export default About;