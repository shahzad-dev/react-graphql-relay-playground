# React, GraphQL & Relay Test Project

This project includes GraphQL server, relay and a transpiler that you can use to test Graphql, Relay and React components.

## Installation

```
npm install
```

## Running

Start a local server:

```
npm start
```

GraphQL server path will be running on [http://localhost:8000](http://localhost:8000)

App path will be running on [http://localhost:3000](http://localhost:3000)


## Developing

Any changes you make to files in the `js/` directory will cause the server to
automatically rebuild the app and refresh your browser.

If at any time you make changes to `data/schema.js`, stop the server,
regenerate `data/schema.json`, and restart the server:

```
npm run update-schema
npm start
```
## GraphQL Test Code
```
mutation {
  insertAddress(input: {address_1: "333 Blah Street", address_2: "", city: "Montreal", postal_code: "M3M1G9"}) {
    address {
      address_1
      address_2
      city
      postal_code
      id
    }
  }
}


query {
  viewer {
    addresses {
      edges {
        node {
          address_1,
          address_2,
          postal_code,
          city,
          id
        }
      }
    }
  }
}
```

## References:

- For a walkthrough, see the [Relay tutorial](https://facebook.github.io/relay/docs/tutorial.html).
- [ES6 Quick Guide](http://es6-features.org).
- [Graphql](http://graphql.org/learn/).
- [Relay](https://facebook.github.io/relay/docs/tutorial.html)
- [React Tutorial](https://scotch.io/tutorials/learning-react-getting-started-and-concepts)
- [Babel Try it out](https://babeljs.io/repl/).
