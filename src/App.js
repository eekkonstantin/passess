import { ThemeProvider, CssBaseline } from '@mui/material'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import { Home, Landing } from 'src/pages'

import theme from './theme'


library.add(fas)

function App() {
  let [accessGranted, setAccessGranted] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {accessGranted ?
        <Home />
        :
        <Landing onSuccess={() => setAccessGranted(true)}/>
      }
    </ThemeProvider>
  );
}

export default App;
