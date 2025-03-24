import { extendTheme } from '@chakra-ui/react'
import type { ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: '#1a1a1a',
        color: 'white',
      },
    },
  },
  colors: {
    blue: {
      50: '#f0f4f8',
      100: '#d9e2ec',
      200: '#bcccdc',
      300: '#9fb3c8',
      400: '#4a6fa1',  // steel blue for accents
      500: '#334e75',  // darker steel blue for hover states
      600: '#243b5c',
      700: '#1d2d3e',
      800: '#0f172a',
      900: '#0a0f1a',
    }
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'lg',
      },
    },
  },
})

export default theme 