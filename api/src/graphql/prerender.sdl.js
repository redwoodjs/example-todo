export const schema = gql`
  type KeyVal {
    key: String!
    val: String!
  }

  type Query {
    todoPrerender: [[KeyVal!]!]!
  }
`
