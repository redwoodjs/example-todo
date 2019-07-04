import React from 'react'
import produce from 'immer'

import { Box } from 'src/lib/primitives'
import { TextInput } from 'src/components'

const InvoiceInfo = ({ value, onChange, ...rest }) => {
  const handleChange = (rowIndex, colIndex) => newValue =>
    onChange(
      produce(value, draft => {
        draft[rowIndex][colIndex].value = newValue
      })
    )

  return (
    <Box as="table" {...rest}>
      <Box as="tbody">
        {value.map((row, rowIndex) => (
          <Box as="tr" key={`invoice-info-${rowIndex}`}>
            <Box as="th" width={0.5}>
              <TextInput
                onChange={handleChange(rowIndex, 0)}
                width={1}
                {...row[0]}
              />
            </Box>
            <Box as="td">
              <TextInput
                onChange={handleChange(rowIndex, 1)}
                width={1}
                {...row[1]}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default InvoiceInfo
