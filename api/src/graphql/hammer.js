import { objectType, queryField } from 'nexus';

export const HammerPackages = objectType({
  name: 'HammerPackages',
  definition(t) {
    // TODO:
    // - web installed packages
    //  - bundle size
    // - api installed packages
    //  - bundle size
    t.list.string('api');
    t.string('apiSize');
    t.list.string('web');
    t.string('webSize');
  },
});

export const Hammer = objectType({
  name: 'Hammer',
  definition(t) {
    // TODO: Grab these from somewhere.
    t.list.string('authors');
    t.string('version');
    t.list.string('serverlessFunctions');
    t.field('packages', { type: HammerPackages });
    // TODO: Expose the list of serverless functions, the provider, configuration,
    // memory, etc
    //  - Usage stats?
    //  - Logs?
    //  - curl execution command
  },
});

export default queryField('hammer', {
  type: Hammer,
  resolve() {
    return {
      authors: ['Tom Preston-Werner', 'Peter Pistorius'],
      version: 'v0.0.1',
      serverlessFunctions: ['graphql.js', 'hello.js'],
      packages: {
        api: ['nexus', 'apollo-server'],
        apiSize: '3000',
        web: ['react', 'react-dom'],
        webSize: '4500',
      },
    };
  },
});
