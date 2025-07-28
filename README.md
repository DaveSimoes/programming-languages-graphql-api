# Programming Languages & Tools GraphQL API

A public GraphQL API with data about programming languages, their creators, frameworks, and tools.

## Features

- List programming languages and details
- List frameworks/tools and their associated languages
- Add new languages and frameworks (mutation)
- Playground for testing queries and mutations

## Documentation

Access the GraphQL playground at `/graphql` once deployed.

### Example Query

```graphql
query {
  languages {
    id
    name
    creator
    year
    frameworks {
      name
      type
    }
  }
}
mutation {
  addLanguage(
    name: "TypeScript"
    creator: "Anders Hejlsberg"
    year: 2012
    website: "https://www.typescriptlang.org/"
  ) {
    id
    name
  }
}
Quickstart
Clone the repo
Install dependencies: npm install
Create .env from .env.example
Run: npm run dev
Deploy
Free deploy on Railway, Render, or Vercel (Node.js).

License
MIT

Created by David De Paiva

Code
