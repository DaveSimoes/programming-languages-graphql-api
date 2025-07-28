const Language = require('./models/Language');
const Framework = require('./models/Framework');

const resolvers = {
  Query: {
    languages: () => Language.find(),
    language: (_, { id }) => Language.findById(id),
    frameworks: () => Framework.find().populate('language'),
    framework: (_, { id }) => Framework.findById(id).populate('language'),
  },
  Mutation: {
    addLanguage: async (_, args) => {
      const language = new Language(args);
      return language.save();
    },
    addFramework: async (_, args) => {
      const framework = new Framework(args);
      return framework.save();
    },
  },
  Language: {
    frameworks: (parent) => Framework.find({ language: parent.id }),
  },
  Framework: {
    language: (parent) => Language.findById(parent.language),
  }
};

module.exports = resolvers;