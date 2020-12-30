import React from 'react'
import CustomMap from '../CustomMap/CustomMap'
import data from './data.json'
import CircularProgress from '@material-ui/core/CircularProgress'
import { List, ListItem, ListItemText, Grid } from '@material-ui/core'
import useStyles from './styles'

const Map = (props) => {
  const classes = useStyles()
  const [markers, setMarkers] = React.useState([])
  const [selected, setSelected] = React.useState(null)
  const [map, setMap] = React.useState(null)
  const [zoom, setZoom] = React.useState(3)
  const [center, setCenter] = React.useState({ lat: -38.416097, lng: -63.616672 })
  const [showMarkers, setShowMarker] = React.useState(false)

  React.useEffect(() => {
    // window.setTimeout(() => {
    setMarkers(data.data)
    setShowMarker(true)
    // }, 3000)
  }, [])

  const handleClickItem = React.useCallback((item) => {
    if (!map) return
    // map.panTo({ lat: parseFloat(item.gpsLatitud), lng: parseFloat(item.gpsLongitud) })
    // setZoom(16)
    setSelected(item)
    // setCenter({ lat: parseFloat(item.gpsLatitud), lng: parseFloat(item.gpsLongitud) })
  }, [map])

  React.useEffect(() => {
    if (!selected) return
    map.panTo({ lat: parseFloat(selected.gpsLatitud), lng: parseFloat(selected.gpsLongitud) })
    setZoom(18)
    setCenter({ lat: parseFloat(selected.gpsLatitud), lng: parseFloat(selected.gpsLongitud) })
  }, [selected]) // eslint-disable-line

  return (
    !showMarkers ? <CircularProgress /> : (
      <Grid container>
        <Grid className={classes.gridItem} xs={false} item md={3}>
          <Lista markers={markers} onListClicked={handleClickItem} />
        </Grid>
        <Grid item xs={12} md={9}>
          <CustomMap selected={selected} setSelected={setSelected} map={map} center={center} setZoom={setZoom} zoom={zoom} setMap={setMap} markers={markers} />
        </Grid>
      </Grid>

    )
  )
}

const Lista = React.memo(({ markers, onListClicked }) => {
  const classes = useStyles()
  console.log('aa')
  return (
    <div className={classes.listContainer}>
      <List>
        {
          markers.map((item, index) => {
            return (
              <ItemList item={item} index={index} onListClicked={onListClicked} key={index} />
            )
          })
        }
      </List>
    </div>
  )
})

const ItemList = React.memo(({ item, onListClicked }) => {
  // console.log('aa')
  return (
    <ListItem onClick={() => onListClicked(item)} button>
      <div>
        <ListItemText primary={item.nombre} />
      </div>
    </ListItem>
  )
})

export default Map
