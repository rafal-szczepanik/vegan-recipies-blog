import React from 'react';
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";
import {graphql, useStaticQuery} from "gatsby";

const query = graphql`
  {
    allContentfulVeganRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const {allContentfulVeganRecipe: {nodes: recipes}} = useStaticQuery(query);

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes}/>
      <RecipesList recipes={recipes}/>
    </section>
  );
};

export default AllRecipes;