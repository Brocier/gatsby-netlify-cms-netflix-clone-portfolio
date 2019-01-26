# Welcome to my Portfolio's github page!

Based On:

[Yuchiu's NetflixClone](https://github.com/yuchiu/netflix-clone)

[The Gatsby + Netlify CMS Starter]("https://github.com/netlify-templates/gatsby-starter-netlify-cms")

## TODO: Write out more of an introduction for this idea.

# Next Steps:

- Switch out to getting repo data from Github.
- Use Netlify CMS to build out a blog that displays within the list of repos.
- Move wholly into Graphql from Redux.

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
