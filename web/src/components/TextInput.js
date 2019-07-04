import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'

import { Box } from 'src/lib/primitives'

const Textarea = ({ value, onChange, rows, type, ...rest }) => {
  return (
    <Box {...rest}>
      <TextareaAutosize
        value={value}
        onChange={e => onChange(e.target.value)}
        type={type}
        style={{
          width: '100%',
          display: 'block',
          textAlign: 'inherit',
        }}
      />
    </Box>
  )
}

const Input = ({ value, onChange, type = 'text', ...rest }) => {
  return (
    <Box
      as="input"
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      {...rest}
    />
  )
}

const TextInput = ({ multiline, ...rest }) => {
  const InputComponent = multiline ? Textarea : Input
  return <InputComponent {...rest} />
}

TextInput.defaultProps = {
  rows: 3,
}

export default TextInput
