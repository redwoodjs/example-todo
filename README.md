# Billable

This is an example Hammer app. In order to figure out what Hammer should be
like, we're first developing a simple app with the technology stack we want and
seeing how it feels. Eventually, the things we learn here will be codified in
the Hammer "architectural style" and a set of command line tools will help
generate various things you need during a Hammer development cycle.

## Getting Started

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do
this in the root directory:

```terminal
yarn install
```

### ORM: Prisma Photon

You can generate the JavaScript client with:

```terminal
yarn workspace api generate
```

The generated client will be placed in `api/node_modules/@generated/photon`

### Initial DB setup

Create and migrate a local SQLite database:

```terminal
cd api
yarn prisma2 lift up
cd ..
```

### Seeds

Prisma will offer a solution in the future, but in the meantime I've created
`api/seed.js` which creates some users and invoices.

```terminal
yarn babel-node api/seed.js
```

### Fire it up

```terminal
yarn dev
```

Browse to `localhost:8910` to see the web app. Lambda functions run on
`localhost:8911` but are proxied to `localhost:8910/.netlify/functions/*`.

## Development

Running prisma dev will watch for changes to your datamodel and will
automatically apply migrations to your database and update the generated Photon
(ORM) client.

```terminal
cd api
yarn prisma2 dev
```

## Migrations: Prisma Lift

The data model is defined in: `api/datamodel.prisma`. When you modify the data
model you generate a migaration with:

```terminal
cd api
yarn prisma2 lift save
cd ..
```

To apply the migration run:

```terminal
cd api
yarn prisma2 lift up
cd ..
```

This will create (or modify) a SQLite database in `api/db/dev.db`
