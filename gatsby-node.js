const {resolve} = require('path');
const slugify = require('slugify')

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const result = await graphql(`
  query GetRecipes {
  allContentfulVeganRecipe {
    nodes {
      content {
        tags
      }
    }
  }
}
  `);
  const {data: {allContentfulVeganRecipe: {nodes: recipes}}} = result;
  recipes.forEach(recipe => {
    const {content: {tags}} = recipe;
    tags.forEach(tag => {
      const tagSlug = slugify(tag,{lower:true})
      createPage({
        path: `/tags/${tagSlug}`,
        component: resolve(`src/templates/tag-template.js`),
        context: {
          tag
        }
      });
    });
  });
};