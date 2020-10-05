import React from 'react'
import CustomMap from '../CustomMap/CustomMap'
import data from './data.json'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Typography, Grid } from '@material-ui/core'
// import useStyles from './styles'
const Map = (props) => {
  const [markers, setMarkers] = React.useState([])
  const [showMarkers, setShowMarker] = React.useState(false)
  // const classes = useStyles()
  React.useEffect(() => {
    window.setTimeout(() => {
      setMarkers(data.data)
      setShowMarker(true)
    }, 3000)
  }, [])

  return (
    !showMarkers ? <CircularProgress /> : (
      <Grid container>
        <Grid xs={false} item md={3}>
          <Typography>
            TEST
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <CustomMap markers={markers} />
        </Grid>
      </Grid>

    )
  )
}

export default Map
