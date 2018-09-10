const contentful = require('contentful');
const chalk = require('chalk');

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.ACCESS_TOKEN
});

function getDataById(productId) {
  return client.getEntry(productId)
    .then(({fields}) => fields)
    .catch((error) => {
      console.error(error)
    });
}

module.exports = {
  getDataById,
};