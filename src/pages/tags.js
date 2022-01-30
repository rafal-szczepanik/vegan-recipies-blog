import React from 'react';
import {graphql, Link} from "gatsby";
import slugify from 'slugify';
import Layout from "../components/Layout";
import setupTags from "../utils/setupTags";
import Seo from "../components/Seo";


const Tags = ({data: {allContentfulVeganRecipe: {nodes: recipes}}}) => {
  const newTags = setupTags(recipes);
  return (
    <Layout>
      <Seo title="Tagi"/>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            const slug = slugify(text, {lower: true});
            return <Link
              to={`/tags/${slug}`}
              key={index}
              className="tag">
              <h5>{text}</h5>
              <p>{value} {value === 0 || value > 4 ? "przepisów" : value > 1 ? "przepisy" : "przepis"}</p>
            </Link>;
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulVeganRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;