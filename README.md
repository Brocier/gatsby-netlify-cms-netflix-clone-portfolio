# Welcome to my Portfolio's github page!

## TODO: Write out a readme for this repo.

Figured out how to get the data I want from github.com/api v4 graphql

Now I need to figure out how to convert that data into Netlify-CMS approved markdown file format.

After that it will be key to have the actual github data change when it is edited in the corresponding CMS markdown files.

```graphql
{
  viewer {
    name
    repositories(
      privacy: PUBLIC
      orderBy: { field: CREATED_AT, direction: DESC }
      first: 100
      isFork: false
    ) {
      totalCount
      edges {
        node {
          id
          createdAt
          name
          url
          homepageUrl
          description
          repositoryTopics(first: 100) {
            edges {
              node {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
```
