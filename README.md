# 🚀 Programming Languages & Frameworks GraphQL API

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-brightgreen)](https://nodejs.org/)
[![GraphQL](https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=white)](https://graphql.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Apollo Server](https://img.shields.io/badge/Apollo%20Server-311C87?logo=apollo-graphql&logoColor=white)](https://www.apollographql.com/docs/apollo-server/)

> A modern, full-featured GraphQL API for exploring programming languages, frameworks, and tools. Perfect for developers, educators, and anyone passionate about technology trends!

## ✨ Features

🔍 **Comprehensive Data Management**
- Query programming languages with detailed information
- Explore frameworks and tools associated with each language
- Access creator information and historical data
- Filter and search capabilities

🛠️ **Developer-Friendly**
- RESTful GraphQL interface with intuitive schema
- Built-in GraphQL Playground for testing
- Comprehensive mutation support for data management
- Real-time data persistence with MongoDB

📊 **Rich Data Model**
- Programming languages with creators, release years, and descriptions
- Frameworks/libraries/tools with relationships to languages
- Extensible schema for future enhancements
- Type-safe GraphQL implementation

## 🏗️ Technology Stack

- **Backend**: Node.js + Express.js
- **GraphQL**: Apollo Server Express
- **Database**: MongoDB with Mongoose ODM
- **Language**: JavaScript (CommonJS)
- **CORS**: Enabled for cross-origin requests

## 📋 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [🔧 Installation](#-installation)
- [📖 API Documentation](#-api-documentation)
- [🎯 Example Queries](#-example-queries)
- [🔄 Mutations](#-mutations)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

## 🚀 Quick Start

Get up and running in minutes!

```bash
# Clone the repository
git clone https://github.com/DaveSimoes/programming-languages-graphql-api.git

# Navigate to project directory
cd programming-languages-graphql-api

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB connection string

# Start the development server
npm run dev
```

🎉 **That's it!** Your GraphQL API will be running at `http://localhost:4000/graphql`

## 🔧 Installation

### Prerequisites

- **Node.js** 18+ 
- **MongoDB** (local installation or cloud service like MongoDB Atlas)
- **npm** or **yarn** package manager

### Step-by-Step Setup

1. **Clone and Setup**
   ```bash
   git clone https://github.com/DaveSimoes/programming-languages-graphql-api.git
   cd programming-languages-graphql-api
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your settings:
   ```env
   MONGO_URI=mongodb://localhost:27017/programming-languages
   PORT=4000
   ```

3. **Database Setup**
   - For local MongoDB: Ensure MongoDB is running
   - For MongoDB Atlas: Get your connection string from the Atlas dashboard

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Access GraphQL Playground**
   Open `http://localhost:4000/graphql` in your browser

## 📖 API Documentation

### Schema Overview

The API provides two main types:

#### 🏷️ Language Type
```graphql
type Language {
  id: ID!
  name: String!
  creator: String
  year: Int
  description: String
  website: String
  frameworks: [Framework]
}
```

#### 🔧 Framework Type
```graphql
type Framework {
  id: ID!
  name: String!
  language: Language
  type: String        # framework, library, tool, etc.
  description: String
  website: String
}
```

### Available Queries

| Query | Description | Returns |
|-------|-------------|---------|
| `languages` | Get all programming languages | `[Language]` |
| `language(id: ID!)` | Get specific language by ID | `Language` |
| `frameworks` | Get all frameworks/tools | `[Framework]` |
| `framework(id: ID!)` | Get specific framework by ID | `Framework` |

### Available Mutations

| Mutation | Description | Parameters |
|----------|-------------|------------|
| `addLanguage` | Create new language | `name!`, `creator`, `year`, `description`, `website` |
| `addFramework` | Create new framework | `name!`, `language!`, `type`, `description`, `website` |

## 🎯 Example Queries

### Get All Languages with Their Frameworks

```graphql
query GetAllLanguages {
  languages {
    id
    name
    creator
    year
    description
    website
    frameworks {
      name
      type
      description
      website
    }
  }
}
```

### Get Specific Language Details

```graphql
query GetLanguage($id: ID!) {
  language(id: $id) {
    name
    creator
    year
    description
    frameworks {
      name
      type
    }
  }
}
```

### Get All Frameworks with Language Info

```graphql
query GetFrameworks {
  frameworks {
    id
    name
    type
    description
    website
    language {
      name
      creator
      year
    }
  }
}
```

### Search for Specific Framework

```graphql
query GetFramework($id: ID!) {
  framework(id: $id) {
    name
    type
    description
    website
    language {
      name
      year
    }
  }
}
```

## 🔄 Mutations

### Add a New Programming Language

```graphql
mutation AddLanguage {
  addLanguage(
    name: "Rust"
    creator: "Mozilla Research"
    year: 2010
    description: "A systems programming language focused on safety, speed, and concurrency"
    website: "https://www.rust-lang.org/"
  ) {
    id
    name
    creator
    year
  }
}
```

### Add a Framework/Tool

```graphql
mutation AddFramework($languageId: ID!) {
  addFramework(
    name: "Actix Web"
    language: $languageId
    type: "web framework"
    description: "A powerful, pragmatic, and extremely fast web framework for Rust"
    website: "https://actix.rs/"
  ) {
    id
    name
    type
    language {
      name
    }
  }
}
```

### Variables Example
```json
{
  "languageId": "your-language-id-here"
}
```

## 🚀 Deployment

### Deploy to Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/setup)

1. Connect your GitHub repository
2. Add environment variables:
   - `MONGO_URI`: Your MongoDB connection string
   - `PORT`: 4000 (or let Railway assign automatically)
3. Deploy!

### Deploy to Render

1. Create a new Web Service
2. Connect your repository
3. Set build command: `npm install`
4. Set start command: `npm run dev`
5. Add environment variables

### Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

### Deploy to Heroku

```bash
# Create Heroku app
heroku create your-app-name

# Add MongoDB add-on or set MONGO_URI
heroku addons:create mongolab:sandbox

# Deploy
git push heroku main
```

### Environment Variables for Production

```env
MONGO_URI=your_production_mongodb_uri
PORT=4000
NODE_ENV=production
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started

1. 🍴 **Fork the repository**
2. 🔄 **Clone your fork**
   ```bash
   git clone https://github.com/your-username/programming-languages-graphql-api.git
   ```
3. 🌿 **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

### Development Workflow

1. **Setup Development Environment**
   ```bash
   npm install
   cp .env.example .env
   # Configure your .env file
   npm run dev
   ```

2. **Make Your Changes**
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed

3. **Submit Your Contribution**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   git push origin feature/amazing-feature
   ```
   
4. 🎯 **Create a Pull Request**

### Contribution Guidelines

- ✅ Write clear, descriptive commit messages
- ✅ Follow JavaScript/Node.js best practices
- ✅ Update documentation for new features
- ✅ Test your changes thoroughly
- ✅ Keep pull requests focused and atomic

### Ideas for Contributions

- 🆕 Add new query filters and sorting options
- 🔍 Implement search functionality
- 📊 Add data validation and error handling
- 🔒 Implement authentication/authorization
- 📱 Create a frontend demo application
- 🧪 Add comprehensive testing suite
- 📖 Improve documentation and examples

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License - feel free to use this project for learning, 
development, or commercial purposes!
```

## 👨‍💻 Author

**David Simoes**
- GitHub: [@DaveSimoes](https://github.com/DaveSimoes)
- Project: [Programming Languages GraphQL API](https://github.com/DaveSimoes/programming-languages-graphql-api)

---

## ⭐ Show Your Support

If this project helped you, please consider giving it a ⭐ star on GitHub! 

It helps the project gain visibility and encourages continued development.

[![GitHub stars](https://img.shields.io/github/stars/DaveSimoes/programming-languages-graphql-api?style=social)](https://github.com/DaveSimoes/programming-languages-graphql-api)

---

<div align="center">

**[⬆ Back to Top](#-programming-languages--frameworks-graphql-api)**

Made with ❤️ by [David Simoes](https://github.com/DaveSimoes)

*Happy coding! 🚀*

</div>
