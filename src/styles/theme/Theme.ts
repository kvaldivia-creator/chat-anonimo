import { DefaultTheme } from 'styled-components'
import { Colors, Font } from '..'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    colors: Colors
    font: Font
  }
}
const theme: DefaultTheme = {
  name: 'default',
  colors: {
    darkGreen: '#075E54',
    semiDarkGreen: '#128C7E',
    lightGreen: '#25D366',
    white: '#FFFFFF',
    backgroundChat: '#ECE5DD',
    darkGrey: '#5E6668',
    lightGrey: '#EEEEEE',
    dark: '#212B32'
  },
  font: {
    heading: 'Raleway',
    body: 'Rubik'
  }
}
export default theme
