import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Container,
  FormControlLabel,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Typography
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

function Intro(props) {
  const [focus, setFocus] = useState('')

  return (
    <Container component="main" maxWidth='md' variant='holder'>
      <Stack spacing={2} px={{md: 10}} py={3}>
        <Typography variant='h2'>DiSC Profile Assessment</Typography>
        <Alert
          severity='error'
          variant='outlined'
          sx={{
            textAlign: 'start'
          }}
        >
          <AlertTitle>DiSClaimer</AlertTitle>
          This is a virtual version of the test administered to me, and is <b>NOT</b> intended for distribution.<br/>
          I am <b>NOT</b> licensed to provide this test and do <b>NOT</b> own any part of it.<br/><br/>
          <b>Please do not distribute this link and/or the access password.</b>
        </Alert>
        <Typography>
          In the following pages, you will be shown a set of four (4) adjectives. For each set, select <b>ONE (1)</b> value that
          <Typography color='success.main' component='b' fontWeight='fontWeightMedium'> MOST </Typography>
          represents you, and one that
          <Typography color='error' component='b' fontWeight='fontWeightMedium'> LEAST </Typography>
          represents you. Don't think too hard; just choose the items that most stand out to you.
        </Typography>
        <Typography>
          For more information on the DiSC profile, please visit the official website&nbsp;
          <Link href='https://www.discprofile.com/what-is-disc' target='_blank'>
            here&nbsp;
            <FontAwesomeIcon icon='fa-arrow-up-right-from-square' size='xs' />
          </Link>.
        </Typography>
        <Typography>
          Keep in mind the context you selected when considering the options.
        </Typography>
        <Box display='flex' justifyContent='center'>
          <RadioGroup
            aria-label='Response focus'
            row
            onChange={e => setFocus(e.target.value)}
          >
            <FormControlLabel value='work' control={<Radio />} label='Work&emsp;' />
            <FormControlLabel value='school' control={<Radio />} label='School&emsp;' />
            <FormControlLabel value='home' control={<Radio />} label='Home&emsp;' />
          </RadioGroup>
        </Box>
        <Button
          size='large'
          variant='contained'
          disabled={focus === ''}
          onClick={() => props.onStart && props.onStart(focus)}
        >
          Let's go!
        </Button>
      </Stack>
    </Container>
  )
}

export default Intro
