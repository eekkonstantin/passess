import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useMemo, useEffect } from 'react'
import * as hash from 'object-hash'

const password = '339e00830bdb337c2c830bc33307300c703bd0b6'

function Landing(props) {
  const [showPassword, setShowPassword] = useState(false)
  const [value, setValue] = useState('')
  const success = useMemo(() => hash(value) === password, [value])

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (success && props.onSuccess)
      props.onSuccess()
  }, [success])

  return (
    <Container component="main" maxWidth="xs" variant='holder'>
      <Stack alignItems='center' spacing={2} width='1'>
        <Typography variant='h2'>Password?</Typography>
        <Box component='form' width={1}>
          <TextField
            label='Password'
            fullWidth
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={e => setValue(e.target.value)}
            InputProps={{
              endAdornment: <InputAdornment position='end'>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  <FontAwesomeIcon
                    icon={showPassword ? 'eye' : 'eye-slash'}
                    size='xs'
                  />
                </IconButton>
              </InputAdornment>,
            }}
            color={success ? 'success' : 'error'}
          />
        </Box>
      </Stack>
    </Container>
  )
}

export default Landing
