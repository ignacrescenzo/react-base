import React from 'react'
import { GoogleMap, LoadScript, Marker, MarkerClusterer, InfoWindow } from '@react-google-maps/api' // eslint-disable-line

const CustomMap = ({ markers, setMap, zoom, setZoom, map, selected, setSelected, center }) => {
  // console.log(map)
  const onLoad = React.useCallback(function callback (map) {
    setMap(map)
  }, [setMap])

  const onUnmount = React.useCallback(function callback (map) {
    setMap(null)
  }, [setMap])

  const handleClickMarker = React.useCallback((e, marker) => {
    map.panTo(e.latLng)
    setSelected(marker)
  }, [map, setSelected])

  const handleZoomChanged = React.useCallback(() => {
    if (!map) return
    setZoom(map.getZoom())
  }, [map, setZoom])

  const handleCloseWindow = React.useCallback(() => {
    setSelected(null)
  }, [setSelected])

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyAWyl7AXuvIRVvvp221YR9UxiTJmoxP8bk'
    >
      <GoogleMap
        mapContainerStyle={{ width: 600, height: 500 }}
        center={center}
        onLoad={onLoad}
        zoom={zoom}
        onZoomChanged={handleZoomChanged}
        onUnmount={onUnmount}
      >
        <MarkerClusterer>
          {
            clusterer => <Marcadores onCloseWindow={handleCloseWindow} selected={selected} clusterer={clusterer} onClickMarker={handleClickMarker} markers={markers} />
          }
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>
  )
}

const Marcadores = React.memo(({ markers, onClickMarker, clusterer, selected, onCloseWindow }) => {
  return (
    markers.map((item, index) => {
      return (
        <Marker
          onClick={(e) => onClickMarker(e, item)}
          clusterer={clusterer}
          options={{ icon: require('../../theme/maps/pin-1.png') }}
          key={index}
          position={{ lat: parseFloat(item.gpsLatitud), lng: parseFloat(item.gpsLongitud) }}
        >
          {
            (selected && selected.id === item.id) && (
              <InfoWindow onCloseClick={onCloseWindow}>
                <div>
              test
                </div>
              </InfoWindow>
            )
          }
        </Marker>
      )
    }
    )
  )
})

export default React.memo(CustomMap)
