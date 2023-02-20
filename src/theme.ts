// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig, ComponentStyleConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const Container = {
  baseStyle: {
    maxW: '1500px'
  }
}

const ComponentStyle = {
  components: {
    Container
  }
}

// 3. extend the theme
const theme = extendTheme({ config }, ComponentStyle)

export default theme