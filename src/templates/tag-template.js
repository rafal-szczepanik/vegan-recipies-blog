import React from 'react';
import {graphql} from "gatsby";
import RecipesList from "../components/RecipesList";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const TagTemplate = ({data, pageContext}) => {
  const recipes = data.allContentfulVeganRecipe.nodes;
  return (
    <Layout>
      <Seo title={pageContext.tag}/>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes}/>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
query GetRecipeByTag($tag: String) {
  allContentfulVeganRecipe(
    sort: {fields: title, order: ASC}
    filter: {content: {tags: {eq: $tag}}}
  ) {
    nodes {
      prepTime
      cookTime
      id
      title
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
}
`;

export default TagTemplate;