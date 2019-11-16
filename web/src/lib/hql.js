const data = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Todo',
        loc: {
          start: 7,
          end: 11,
        },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
            loc: {
              start: 18,
              end: 20,
            },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: {
                  start: 22,
                  end: 25,
                },
              },
              loc: {
                start: 22,
                end: 25,
              },
            },
            loc: {
              start: 22,
              end: 26,
            },
          },
          directives: [],
          loc: {
            start: 18,
            end: 26,
          },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'body',
            loc: {
              start: 31,
              end: 35,
            },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: {
                  start: 37,
                  end: 43,
                },
              },
              loc: {
                start: 37,
                end: 43,
              },
            },
            loc: {
              start: 37,
              end: 44,
            },
          },
          directives: [],
          loc: {
            start: 31,
            end: 44,
          },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'status',
            loc: {
              start: 49,
              end: 55,
            },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: {
                  start: 57,
                  end: 63,
                },
              },
              loc: {
                start: 57,
                end: 63,
              },
            },
            loc: {
              start: 57,
              end: 64,
            },
          },
          directives: [],
          loc: {
            start: 49,
            end: 64,
          },
        },
      ],
      loc: {
        start: 2,
        end: 68,
      },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Query',
        loc: {
          start: 77,
          end: 82,
        },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'todos',
            loc: {
              start: 89,
              end: 94,
            },
          },
          arguments: [],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Todo',
                loc: {
                  start: 97,
                  end: 101,
                },
              },
              loc: {
                start: 97,
                end: 101,
              },
            },
            loc: {
              start: 96,
              end: 102,
            },
          },
          directives: [],
          loc: {
            start: 89,
            end: 102,
          },
        },
      ],
      loc: {
        start: 72,
        end: 106,
      },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Mutation',
        loc: {
          start: 115,
          end: 123,
        },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createTodo',
            loc: {
              start: 130,
              end: 140,
            },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'body',
                loc: {
                  start: 141,
                  end: 145,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: {
                      start: 147,
                      end: 153,
                    },
                  },
                  loc: {
                    start: 147,
                    end: 153,
                  },
                },
                loc: {
                  start: 147,
                  end: 154,
                },
              },
              directives: [],
              loc: {
                start: 141,
                end: 154,
              },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Todo',
              loc: {
                start: 157,
                end: 161,
              },
            },
            loc: {
              start: 157,
              end: 161,
            },
          },
          directives: [],
          loc: {
            start: 130,
            end: 161,
          },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'updateTodoStatus',
            loc: {
              start: 166,
              end: 182,
            },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: {
                  start: 183,
                  end: 185,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Int',
                    loc: {
                      start: 187,
                      end: 190,
                    },
                  },
                  loc: {
                    start: 187,
                    end: 190,
                  },
                },
                loc: {
                  start: 187,
                  end: 191,
                },
              },
              directives: [],
              loc: {
                start: 183,
                end: 191,
              },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'status',
                loc: {
                  start: 193,
                  end: 199,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: {
                      start: 201,
                      end: 207,
                    },
                  },
                  loc: {
                    start: 201,
                    end: 207,
                  },
                },
                loc: {
                  start: 201,
                  end: 208,
                },
              },
              directives: [],
              loc: {
                start: 193,
                end: 208,
              },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Todo',
              loc: {
                start: 211,
                end: 215,
              },
            },
            loc: {
              start: 211,
              end: 215,
            },
          },
          directives: [],
          loc: {
            start: 166,
            end: 215,
          },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'renameTodo',
            loc: {
              start: 220,
              end: 230,
            },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: {
                  start: 231,
                  end: 233,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Int',
                    loc: {
                      start: 235,
                      end: 238,
                    },
                  },
                  loc: {
                    start: 235,
                    end: 238,
                  },
                },
                loc: {
                  start: 235,
                  end: 239,
                },
              },
              directives: [],
              loc: {
                start: 231,
                end: 239,
              },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'body',
                loc: {
                  start: 241,
                  end: 245,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: {
                      start: 247,
                      end: 253,
                    },
                  },
                  loc: {
                    start: 247,
                    end: 253,
                  },
                },
                loc: {
                  start: 247,
                  end: 254,
                },
              },
              directives: [],
              loc: {
                start: 241,
                end: 254,
              },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Todo',
              loc: {
                start: 257,
                end: 261,
              },
            },
            loc: {
              start: 257,
              end: 261,
            },
          },
          directives: [],
          loc: {
            start: 220,
            end: 261,
          },
        },
      ],
      loc: {
        start: 110,
        end: 265,
      },
    },
  ],
  loc: {
    start: 0,
    end: 265,
  },
}

const extract = (arg) => {
  return {
    kind: 'VariableDefinition',
    directives: arg.directives,
    type: arg.type,
    variable: {
      kind: 'Variable',
      name: {
        kind: 'Name',
        value: arg.name.value,
      },
    },
  }
}

const mapMutations = () => {
  let map = {}
  const mutations = data.definitions.filter((x) => x.name.value === 'Mutation')
  mutations[0].fields.forEach((x) => {
    map[x.name.value] = x.arguments.map((x) => extract(x))
  })
  return map
}

export const hql = (statement) => {
  let ast = gql(statement)

  const map = mapMutations()
  const mutationName = ast.definitions[0].selectionSet.selections[0].name.value

  ast.definitions[0].name = {
    kind: 'Name',
    value: 'Blah',
  }
  ast.definitions[0].variableDefinitions = map[mutationName]

  return ast
}
