import './App.css'
import { Grid, GridItem, Show, HStack, Image, Text } from '@chakra-ui/react'
import logo from './assets/logo.webp'
function App() {


  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "main aside"`
    }}>
      <GridItem area='nav' bg='coral'>
        <HStack>
          <Image src={logo} boxSize={'60px'}></Image>
          <Text fontSize='2xl' fontWeight='bold'>Chakra UI</Text>
        </HStack>
      </GridItem>

      <GridItem area='main' bg='lightgreen'>main</GridItem>

      <Show above='lg'>
        <GridItem area='aside' bg='lightblue'>aside</GridItem>
      </Show>

    </Grid>
  )
}

export default App
