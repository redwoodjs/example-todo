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

### Fire it up

```terminal
yarn dev
```

This command will eventually move into the `hammer-cli`.

Run `yarn open` to open your browser on `http://localhost:8910`.

Browse to `http://localhost:8910` to see the web app. Lambda functions run on
`localhost:8911` but are proxied to `localhost:8910/.netlify/functions/*`.

## Development

### Generate a component

`yarn hammer generate component MyShinyComponent` will create a component
and place it under `web/src/components/MyShinyComponent`

### .ENV

Auth0 requires a few environmental variables, none of those are private,
so just go ahead and use these:

```
AUTH0_DOMAIN=p4p8.eu.auth0.com
AUTH0_CLIENT_ID=b7vN4sVz6yjGrq82ctXJW9NRTvlWzkFU
AUTH0_AUDIENCE=BILLABLE_API
```

### Transpiling packages

There are a bunch of packages in this repository that will eventually be published
under `@hammerframework`:

- `@hammerframework/hammer-api`
- `@hammerframework/hammer-web`
- `@hammerframework/hammer-dev-server`

Keeping them in this repository facilitates rapid development. The packages are
transpiled, so if you've changed something you need to run `yarn build:hammer:watch`
in a seperate terminal.
