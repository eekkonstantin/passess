import {
  Box,
  Card,
  Container,
  Drawer,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useMemo, createRef } from 'react'

import { values, kind } from 'src/assets/constants'
import { Question } from '.'

function Quiz() {
  const [answers, setAnswers] = useState(new Array(values.length))
  const [active, setActive] = useState(1)
  const [nextReady, setNextReady] = useState(false)

  const refs = values.reduce((acc, v, vi) => {
    acc[vi] = createRef();
    return acc;
  }, {});


  const isComplete = (index) => answers[index]
    && answers[index].length == 2
    && !answers[index].includes(undefined)
    && !(answers[index].filter(a => isNaN(a) || a < 0).length)

  const allAnswered = useMemo(() => {
    return answers.filter((a, ai) => isComplete(ai)).length === values.length
  }, [answers])

  const handleAnswer = (qi, val, k) => {
    let old = answers[qi] || new Array(2)
    old[k] = val
    let copy = [...answers]
    copy[qi] = old
    setAnswers(copy)
  }

  const handleNext = () => {
    let cur = active + 1, looped = false
    if (cur >= values.length && !looped) {
      cur = 0
      looped = true
    }
    while (isComplete(cur)) {
      cur++
      if (cur >= values.length && !looped) {
        cur = 0
        looped = true
      }
    }
    if (cur >= values.length && active < values.length - 1)
      setActive(active+1)
    else if (cur === values.length)
      setActive(0)
    else
      setActive(cur)
  }

  const handleTabulate = () => {
    console.log(answers)
  }

  useEffect(() => {
    refs[active].current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }, [active])

  return (<Box display='flex' overflow='hidden'>
    <Drawer variant='permanent'>
      <List disablePadding sx={{
        overflow: 'auto',
        direction: 'rtl'
      }}>
        {values.map((v, i) => (
          <ListItem key={i} ref={refs[i]}
            disablePadding
            secondaryAction={isComplete(i) ?
              <Box ml={-6.5} color='success.main'>
                <FontAwesomeIcon icon='fa-check-circle' size='lg' />
              </Box>
            : false}
            sx={{
              pr: 4
            }}
          >
            <ListItemButton
              variant='drawer'
              selected={i === active}
              onClick={() => setActive(i)}
            >
              <ListItemText primary={`Q${i+1}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
    <Container maxWidth='sm' variant='holder'>
      <Stack spacing={2} width={1} alignItems='center'>
        <Typography textAlign='center'>
          Select the adjectives that
          <Typography color='success.main' component='b' fontWeight='fontWeightMedium'> MOST </Typography>
          and
          <Typography color='error' component='b' fontWeight='fontWeightMedium'> LEAST </Typography>
          describe you.
        </Typography>
        <Card sx={{width: 1}}>
          <Typography
            display='flex'
            justifyContent='space-between'
            px={4.5} pt={2}
            color='text.secondary'
            fontStyle='italic'
            variant='caption'
          >
            <span>Least</span>
            <span>Most</span>
          </Typography>
          <Question
            index={active}
            onAnswer={handleAnswer}
            answers={answers[active]}
          />
        </Card>
        <Stack direction='row' spacing={2}>
          {allAnswered && <Tooltip title='Tabulate'>
            <Fab
              color='success'
              aria-label='tabulate'
              onClick={handleTabulate}
            >
              <FontAwesomeIcon icon='fa-check' />
            </Fab>
          </Tooltip>}
          <Fab
            color='primary'
            disabled={!isComplete(active)}
            aria-label='next'
            onClick={handleNext}
          >
            <FontAwesomeIcon icon='fa-chevron-right' />
          </Fab>

        </Stack>
      </Stack>
    </Container>
  </Box>)
}

export default Quiz
