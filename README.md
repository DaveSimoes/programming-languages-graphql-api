# 🚀 Programming Languages & Tools GraphQL API

A public GraphQL API providing structured data on programming languages, their creators, and related frameworks and tools. Perfect for developers, educators, and anyone exploring modern technology stacks!

[![Stars](https://img.shields.io/github/stars/DaveSimoes/programming-languages-graphql-api?style=social)](https://github.com/DaveSimoes/programming-languages-graphql-api/stargazers)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## ✨ Features

- 🔎 Query programming languages, creators, release dates, and related frameworks
- 🛠️ Add new languages and frameworks (mutations)
- ⚡ Interactive GraphQL Playground for queries and mutations
- 📚 Easily extensible and ready for integration with modern projects

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/DaveSimoes/programming-languages-graphql-api.git
   cd programming-languages-graphql-api
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Configure environment variables**
   - Copy `.env.example` to `.env` and adjust variables if needed.

4. **Start the project**
   ```bash
   npm run dev
   ```

5. **Access the GraphQL playground**
   - Open your browser at `/graphql` after starting the server to explore and test queries.

---

## 📝 Example Query

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
```

### Example Mutation

```graphql
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
```

---

## 🌍 Deploy in One Click

Deploy easily to platforms like [Railway](https://railway.app/), [Render](https://render.com/), or [Vercel](https://vercel.com/) (Node.js supported).

---

## 🤝 Contributing

Pull requests are welcome! Feel free to open issues, suggest improvements, or add new data to the API.

---

## 📄 License

Distributed under the MIT License.

---

> Built by **David De Paiva**  
> [LinkedIn](https://www.linkedin.com/in/dspaivadev/) 
> _Passionate about technology and building solutions that connect people and knowledge._

---
If you find this project useful, please consider giving it a ⭐ star to support the repository and help others discover it!
