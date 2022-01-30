import React from 'react';
import Layout from "../components/Layout";
import {graphql} from "gatsby";
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

const Contact = ({data: {allContentfulVeganRecipe: {nodes: recipes}}}) => {
  return (
    <Layout>
      <Seo title="Kontakt"/>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Masz pytania? Chętnie na nie odpowiemy</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolore ea earum explicabo illum in
              inventore iusto laudantium, modi obcaecati odit pariatur, quis quos rem sed, sequi tempore ut veniam?</p>
            <p>Lorem ipsum quis quos rem sed, sequi tempore ut veniam?</p>
            <p> modi obcaecati odit pariatur, quis quos rem sed, sequi tempore ut veniam?</p>
          </article>
          <article>
            <form
              action="https://formspree.io/f/xgedavgo"
              method="POST"
              className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Twoje imię</label>
                <input type="text" name="name" id="name" placeholder="imię"/>
              </div>
              <div className="form-row">
                <label htmlFor="email">Twój email</label>
                <input type="email" name="email" id="email" placeholder="nazwa@email.com" required/>
              </div>
              <div className="form-row">
                <label htmlFor="message">Wiadomość</label>
                <textarea name="message" id="message" placeholder="miejsce na wiadomość"/>
                <button type="submit" className="btn block">Submit</button>
              </div>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Koniecznie sprawdż nasze przepisy!</h5>
          <RecipesList recipes={recipes}/>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;