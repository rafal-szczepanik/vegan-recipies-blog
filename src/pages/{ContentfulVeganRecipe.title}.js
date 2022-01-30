import React from 'react';
import {graphql, Link} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {BsClockHistory, BsClock, BsPeople} from "react-icons/bs";
import slugify from "slugify";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const RecipeTemplate = ({data: {contentfulVeganRecipe}}) => {
  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    description: {description},
    image
  } = contentfulVeganRecipe;
  const pathToImage = getImage(image);
  const {tags, instructions, ingredients, tools} = content;
  console.log(tags, instructions, ingredients, tools);
  return (
    <Layout>
      <Seo title={title} description={description}/>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"/>
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
            <div className="recipe-icons">
              <article>
                <BsClock/>
                <h5>przygotowanie</h5>
                <p>{prepTime} min.</p>
              </article>
              <article>
                <BsClockHistory/>
                <h5>pieczenie</h5>
                <p>{cookTime} min.</p>
              </article>
              <article>
                <BsPeople/>
                <h5>porcje</h5>
                <p>{servings} min.</p>
              </article>
            </div>
            <p className="recipe-tags">
              Tags: {tags.map((tag, index) => {
              const slug = slugify(tag, {lower: true});

              return <Link to={`/tags/${slug}`} key={index}>
                {tag}
              </Link>;
            })}
            </p>
          </section>
          <section className="recipe-content">
            <article>
              <h4>przygotowanie krok po kroku</h4>
              {instructions.map((item, index) => {
                return <div key={index} className="single-instruction">
                  <header>
                    <p>krok {index + 1}</p>
                    {/*<div></div>*/}
                  </header>
                  <p>{item}</p>
                </div>;
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>składniki</h4>
                {ingredients.map((item, index) => {
                  return <p className="single-ingredient" key={index}>
                    {item}
                  </p>;
                })}
              </div>
              <div>
                <h4>kuchenne przybory</h4>
                {tools.map((item, index) => {
                  return <p className="single-tool" key={index}>
                    {item}
                  </p>;
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
query getSingleRecipe($title: String) {
  contentfulVeganRecipe(title: {eq: $title}) {
    title
    cookTime
    content {
      ingredients
      instructions
      tags
      tools
    }
    description {
      description
    }
    prepTime
    servings
    image {
      gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
    }
  }
}
`;

export default RecipeTemplate;