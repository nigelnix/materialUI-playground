import React from 'react'
import { CssBaseline, ThemeProvider, createTheme, Button } from '@mui/material'
import Card from './Card'
const theme = createTheme({})

function App() {
  return (
<ThemeProvider theme={theme} ><CssBaseline />
    <div>
      <Card />
    </div>
</ThemeProvider>
    
    )
}

export default App