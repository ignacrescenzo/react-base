import React from 'react'
import useStyles from './styles'

function Home () {
  const classes = useStyles()
  return <h2 className={classes.title}>Home</h2>
}

export default Home
