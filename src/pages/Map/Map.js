import React from 'react'
import CustomMap from '../CustomMap/CustomMap'
import data from './data.json'
import CircularProgress from '@material-ui/core/CircularProgress'
import { List, ListItem, ListItemText, Grid } from '@material-ui/core'
import useStyles from './styles'

const Map = (props) => {
  const classes = useStyles()
  const [markers, setMarkers] = React.useState([])
  // const [selected, setSelected] = React.useState(null)
  const [map, setMap] = React.useState(null)
  const [zoom, setZoom] = React.useState(3)
  const [showMarkers, setShowMarker] = React.useState(false)

  React.useEffect(() => {
    window.setTimeout(() => {
      setMarkers(data.data)
      setShowMarker(true)
    }, 3000)
  }, [])

  const handleClickItem = (item) => {
    if (!map) return
    map.panTo({ lat: parseFloat(item.gpsLatitud), lng: parseFloat(item.gpsLongitud) })
    // setSelected(item)
    setZoom(15)
  }

  return (
    !showMarkers ? <CircularProgress /> : (
      <Grid container>
        <Grid className={classes.gridItem} xs={false} item md={3}>
          <div className={classes.listContainer}>
            <List>
              {
                markers.slice(1, 20).map((item, index) => {
                  return (
                    <ListItem onClick={() => handleClickItem(item)} key={index} button>
                      <div>
                        <ListItemText primary={item.nombre} />
                      </div>
                    </ListItem>
                  )
                })
              }
            </List>
          </div>
        </Grid>
        <Grid item xs={12} md={9}>
          <CustomMap map={map} zoom={zoom} setMap={setMap} markers={markers} />
        </Grid>
      </Grid>

    )
  )
}

export default Map
