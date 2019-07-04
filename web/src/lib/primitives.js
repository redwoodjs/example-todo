import { extend } from 'rebass-extend'
import {
  display,
  height,
  maxWidth,
  textAlign,
  fontStyle,
  borders,
} from 'styled-system'
import styled from 'styled-components'

const {
  Box,
  Flex,
  Text,
  Heading,
  Button: RealButton,
  Link,
  Image,
  Card,
} = extend({
  Box: [display, textAlign, maxWidth, height, borders],
  Text: [fontStyle],
})

const Button = styled(RealButton)`
  padding: 0 4px;
  border-radius: 3px;
  line-height: 22px;
  height: 24px;
  background: #88898b;
`

export { Box, Flex, Text, Heading, Button, Link, Image, Card }
