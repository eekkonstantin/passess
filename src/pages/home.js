import {
  Alert,
  Drawer,
  Stack
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'

import { Intro, Quiz } from '.'

function Home() {
  const [showAlert, setShowAlert] = useState(true)
  const [focus, setFocus] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (focus !== '')
      setStarted(true)
  }, [focus])

  return (<Stack height='100vh'>
    {showAlert && <Alert
      severity='warning'
      variant='filled'
      onClose={() => setShowAlert(false)}
      sx={{
        zIndex: 1250,
        position: 'relative'
      }}
    >
      Please note you will lose all progress if you use the Refresh or Back buttons.
    </Alert>}
    {!started ?
      <Intro onStart={f => {console.log(f); setFocus(f)}} />
      : <Quiz />
    }
  </Stack>)
}

export default Home
