# Test Project (React, GraphQL & Relay)

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

#### Basic Queries

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

#### Advanced Queries

```
mutation AddAddress{
  insertAddress(input: {address_1: "1010 Zoom Street", address_2: "", city: "Toronto", postal_code: "M3M1G9"}) {
    address {
      address_1
      address_2
      city
      postal_code
      id
    }
  }
},
query QueryAll{
  viewer {
    addresses {
      pageInfo {
        hasNextPage,
        hasPreviousPage,
        startCursor,
        endCursor
      },
      edges {
        cursor,
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
},
query FirstPageQuery{
  viewer {
    addresses(after:"YXJyYXljb25uZWN0aW9uOjA=", first: 1) {
      pageInfo {
        hasNextPage,
        hasPreviousPage,
        startCursor,
        endCursor
      },
      edges {
        cursor,
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
},
query SecondPageQuery{
  viewer {
    addresses(after:"YXJyYXljb25uZWN0aW9uOjI=", first: 1) {
      pageInfo {
        hasNextPage,
        hasPreviousPage,
        startCursor,
        endCursor
      },
      edges {
        cursor,
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
},
```

## References:

- For a walkthrough, see the [Relay tutorial](https://facebook.github.io/relay/docs/tutorial.html).
- [ES6 Quick Guide](http://es6-features.org).
- [Graphql](http://graphql.org/learn/).
- [Relay](https://facebook.github.io/relay/docs/tutorial.html)
- [React Tutorial](https://scotch.io/tutorials/learning-react-getting-started-and-concepts)
- [Babel Try it out](https://babeljs.io/repl/).
