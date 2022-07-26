import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState, useMemo } from 'react'

import { kind, values } from 'src/assets/constants'

function Question({index, onAnswer, answers}) {
  const qn = useMemo(() => values[index], [index])
  const [high, setHigh] = useState(-1)
  const [low, setLow] = useState(-1)

  useEffect(() => {
    // reset on question change
    setHigh(answers ? answers[kind.HIGH] : -1)
    setLow(answers ? answers[kind.LOW] : -1)
  }, [index])

  const handleClick = (val, k) => {
    val = parseInt(val)
    if (k === kind.LOW) {
      if (val === low)
        val = -1
      setLow(val)
    } else {
      if (val === high)
        val = -1
      setHigh(val)
    }
    onAnswer(index, val, k)
  }

  return (<List sx={{pt: 0}}>
    {qn.map((v, vi) => <ListItem key={vi} sx={{py: 0}}>
      <ListItemButton sx={{py: 0}}>
          <Radio
            name={`item-${index}-low`}
            value={vi}
            onClick={e => handleClick(e.target.value, kind.LOW)}
            checked={vi === low}
            size='small'
            disabled={vi === high}
            checkedIcon={<Box color='error.main' textAlign='center'>
              <FontAwesomeIcon icon='fa-xmark' fixedWidth size='lg' />
            </Box>}
          />
        <ListItemText
          primary={v.adjective}
          secondary={v.description}
          sx={{
            mx: 1, my: .5,
            px: 1, py: 1,
            borderRadius: 1,
            ...(vi === high && {
              backgroundColor: 'success.main',
              color: 'success.contrastText',
              '& > .MuiTypography-root': {
                fontWeight: 'fontWeightBold',
              },
              '& > .MuiTypography-body2': {
                color: 'success.contrastText',
                fontWeight: 'fontWeightMedium',
              }
            }),
            ...(vi === low && {
              backgroundColor: 'error.main',
              color: 'error.contrastText',
              '& > .MuiTypography-root': {
                fontWeight: 'fontWeightBold',
              },
              '& > .MuiTypography-body2': {
                color: 'error.contrastText',
                fontWeight: 'fontWeightMedium',
              }
            }),
          }}
        />
        <Radio
          name={`item-${index}-high`}
          value={vi}
          onClick={e => handleClick(e.target.value, kind.HIGH)}
          checked={vi === high}
          size='small'
          disabled={vi === low}
          checkedIcon={<Box color='success.main' textAlign='center'>
            <FontAwesomeIcon icon='fa-check' fixedWidth size='lg' />
          </Box>}
        />
      </ListItemButton>
    </ListItem>)}
  </List>)
}

export default Question
