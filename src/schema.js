const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Language {
    id: ID!
    name: String!
    creator: String
    year: Int
    description: String
    website: String
    frameworks: [Framework]
  }

  type Framework {
    id: ID!
    name: String!
    language: Language
    type: String
    description: String
    website: String
  }

  type Query {
    languages: [Language]
    language(id: ID!): Language
    frameworks: [Framework]
    framework(id: ID!): Framework
  }

  type Mutation {
    addLanguage(
      name: String!
      creator: String
      year: Int
      description: String
      website: String
    ): Language
    addFramework(
      name: String!
      language: ID!
      type: String
      description: String
      website: String
    ): Framework
  }
`;

module.exports = typeDefs;