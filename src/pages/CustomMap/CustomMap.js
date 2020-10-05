import React from 'react'
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api'

function CustomMap (props) {
  const [, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback (map) {
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback (map) {
    setMap(null)
  }, [])

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyAoWkoyvj8ev5iHj01aOw4VNVxmJ-ZP9tI'
    >
      <GoogleMap
        mapContainerStyle={{ width: '400px', height: '400px' }}
        center={{ lat: -38.416097, lng: -63.616672 }}
        onLoad={onLoad}
        zoom={3}
        onUnmount={onUnmount}
      >
        <MarkerClusterer>
          {
            (clusterer) => props.markers.slice(1, 5).map((item, index) => {
              return (
                <Marker
                  clusterer={clusterer}
                  options={{ icon: require('../../theme/maps/pin-1.png') }}
                  key={index}
                  position={{ lat: parseFloat(item.gpsLatitud), lng: parseFloat(item.gpsLongitud) }}
                />
              )
            }
            )
          }
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(CustomMap)
