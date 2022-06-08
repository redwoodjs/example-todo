# Example Todo

Welcome to [RedwoodJS](https://redwoodjs.com)! This is an example Redwood app, implementing a very minimal todo application. Features you can see in action include:

- Redwood Cells (see `TodoListCell.js`)
- Optimistic GraphQL response with Apollo (see `AddTodo.js`)
- SVG loader (see `Check.js`)
- StyledComponents usage (and stylistic approach)

## Getting Started

> **Prerequisites**
>
> - Redwood requires [Node.js](https://nodejs.org/en/) (>=14.19.x <=16.x) and [Yarn](https://yarnpkg.com/) (>=1.15)
> - Are you on Windows? For best results, follow our [Windows development setup](https://redwoodjs.com/docs/how-to/windows-development-setup) guide

### Setup

We use Yarn as our package manager. To get the dependencies installed, run the following command in the project's root directory:

```terminal
yarn
```

Set up the database and generate the database client with Prisma Migrate:

```terminal
yarn redwood prisma migrate dev
```

### Fire it up

Start the development server with the following command:

```terminal
yarn redwood dev
```

Browse to `http://localhost:8910` (or run `yarn redwood open`) to see the web app.

* Lambda functions run on
`localhost:8911` but are proxied via `localhost:8910/api/functions/*`
* The API's GraphiQL interface can be accessed on `http://localhost:8911/graphql`

## Next Steps

The best way to learn Redwood is by going through the comprehensive [tutorial](https://redwoodjs.com/docs/tutorial/foreword) and joining the community (via the [Discourse forum](https://community.redwoodjs.com) or the [Discord server](https://discord.gg/redwoodjs)).

## Quick Links

Stay updated with the following links:
- Read the [Forum announcements](https://community.redwoodjs.com/c/announcements/5)
- Follow us on [Twitter](https://twitter.com/redwoodjs)
- Subscribe to the [newsletter](https://redwoodjs.com/newsletter)
- Learn how to [contribute to the Redwood framework](https://redwoodjs.com/docs/contributing)