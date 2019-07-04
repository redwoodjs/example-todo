const fontSizes = [12, 14, 16, 20, 24, 32]

const colors = {
  white: '#fff',
  blues: [
    '#B4C0BD',
    '#2F5756',
    '#9DACA9',
    '#394353',
    '#537171',
    '#3D6362',
    '#718A8A',
    '#9EC0BB',
    '#657F7F',
    '#A0C1BC',
  ],
}

const radii = [3]

const space = [4, 8, 16, 24, 32, 48, 64]

const breakpoints = ['40em', '64em', '80em']
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]

export default {
  fontSizes,
  //fontWeights,
  colors,
  radii,
  space,
  breakpoints,
}
