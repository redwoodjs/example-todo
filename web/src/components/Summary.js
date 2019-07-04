import React from 'react'
import produce from 'immer'

import { Box } from 'src/lib/primitives'
import { TextInput } from 'src/components'

const calculateSubtotal = lineItems => {
  return lineItems
    .slice(1) // remove heading items
    .map(([_, { value: quantity }, { value: price }]) => [
      Number(quantity),
      Number(price),
    ])
    .reduce((subtotal, [quantity, price]) => (subtotal += quantity * price), 0)
}

const calculatePercentage = (subtotal, row) => {
  const percentage = Number(row[1].value)
  return subtotal * (percentage / 100)
}

const calculateTotal = (subtotal, rows) => {
  // we only have 1 value at the moment
  const percentage = Number(rows[0][1].value)
  return subtotal + subtotal * (percentage / 100)
}

const Summary = ({ value, onChange, lineItems, ...rest }) => {
  calculateSubtotal(lineItems)

  const handleChange = (rowIndex, colIndex) => newValue =>
    onChange(
      produce(value, draft => {
        draft[rowIndex][colIndex].value = newValue
      })
    )

  const subtotalRow = value.slice(0, 1)[0]
  const subtotal = calculateSubtotal(lineItems)
  const rows = value.slice(1, -1)
  const totalRow = value.slice(-1)[0]

  return (
    <Box
      as="table"
      {...rest}
      width={0.5}
      css={`
        td:nth-child(3) {
          padding-left: 8px;
        }
      `}
    >
      <Box as="tbody">
        <Box as="tr">
          <Box as="th" width="199px">
            <TextInput
              onChange={handleChange(0, 0)}
              width={1}
              {...subtotalRow[0]}
            />
          </Box>
          <Box as="td" width="100px">
            &nbsp;
          </Box>
          <Box as="td">{subtotal.toFixed(2)}</Box>
        </Box>

        {rows.map((row, rowIndex) => (
          <Box as="tr" key={`invoice-info-${rowIndex}`}>
            <Box as="th">
              <TextInput
                onChange={handleChange(rowIndex + 1, 0)}
                width={1}
                {...row[0]}
              />
            </Box>
            <Box as="td">
              {row[1] && (
                <TextInput
                  onChange={handleChange(rowIndex + 1, 1)}
                  width={1}
                  type="number"
                  {...row[1]}
                />
              )}
            </Box>
            <Box as="td">{calculatePercentage(subtotal, row).toFixed(2)}</Box>
          </Box>
        ))}

        <Box as="tr">
          <Box as="th">
            <TextInput
              onChange={handleChange(value.length - 1, 0)}
              width={1}
              {...totalRow[0]}
            />
          </Box>
          <Box as="td">
            <TextInput
              onChange={handleChange(value.length - 1, 1)}
              width={1}
              {...totalRow[1]}
            />
          </Box>
          <Box as="td">{calculateTotal(subtotal, rows).toFixed(2)}</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Summary
