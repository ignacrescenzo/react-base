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
  const [center, setCenter] = React.useState({ lat: -38.416097, lng: -63.616672 })
  const [showMarkers, setShowMarker] = React.useState(false)

  React.useEffect(() => {
    window.setTimeout(() => {
      setMarkers(data.data)
      setShowMarker(true)
    }, 3000)
  }, [])

  const handleClickItem = React.useCallback((item) => {
    if (!map) return
    map.panTo({ lat: parseFloat(item.gpsLatitud), lng: parseFloat(item.gpsLongitud) })
    setZoom(16)
    setCenter({ lat: parseFloat(item.gpsLatitud), lng: parseFloat(item.gpsLongitud) })
  }, [map])

  return (
    !showMarkers ? <CircularProgress /> : (
      <Grid container>
        <Grid className={classes.gridItem} xs={false} item md={3}>
          <Lista markers={markers} onListClicked={handleClickItem} />
        </Grid>
        <Grid item xs={12} md={9}>
          <CustomMap map={map} center={center} setZoom={setZoom} zoom={zoom} setMap={setMap} markers={markers} />
        </Grid>
      </Grid>

    )
  )
}

const Lista = React.memo(({ markers, onListClicked }) => {
  const classes = useStyles()

  const handleClickItem = (item) => {
    onListClicked(item)
  }

  return (
    <div className={classes.listContainer}>
      <List>
        {
          markers.map((item, index) => {
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
  )
})

export default Map
