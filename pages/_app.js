import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/nunito'
import { customTheme } from '../styles/themes'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps}/>
    </ChakraProvider>
  )
}

export default MyApp
