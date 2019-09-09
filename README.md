# Todo

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

Generate a database:

```terminal
yarn db:up
```

### Fire it up

```terminal
yarn dev
```

This command will eventually move into the `hammer-cli`.

Run `yarn open` to open your browser on `http://localhost:8910`.

Browse to `http://localhost:8910` to see the web app. Lambda functions run on
`localhost:8911` but are proxied to `localhost:8910/api/functions/*`.

## Development

### Database

We use Prisma's Lift (Migrations) and PhotonJS (ORM).

To create a development database:

```terminal
yarn db:up
```

Will read the schema definition in `api/prisma/schema.prisma` and
generate a sqlite database in `api/prisma/dev.sqlite`
