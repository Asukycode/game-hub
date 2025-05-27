import './App.css'
import Navbar from './components/NavBar'
import { Grid, GridItem, Show} from '@chakra-ui/react'

function App() {


  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "main aside"`
    }}>
      <GridItem area='nav' bg='coral'>
        <Navbar />
      </GridItem>

      <GridItem area='main' bg='lightgreen'>main</GridItem>

      <Show above='lg'>
        <GridItem area='aside' bg='lightblue'>aside</GridItem>
      </Show>

    </Grid>
  )
}

export default App
