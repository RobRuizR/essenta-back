const contentful: any = require('contentful');

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.ACCESS_TOKEN
});

export function getDataById (dataId: string) : any {
  return client.getEntry(dataId)
    .then(({fields}: any) => fields)
    .catch((error: any) => {
      console.error(error)
    });
}
