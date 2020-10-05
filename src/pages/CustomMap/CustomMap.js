import React from 'react'
import { GoogleMap, LoadScript, Marker, MarkerClusterer, InfoWindow } from '@react-google-maps/api' // eslint-disable-line

const CustomMap = ({ markers, setMap, zoom, map, selected, setSelected }) => {
  const onLoad = React.useCallback(function callback (map) {
    setMap(map)
  }, [setMap])

  const onUnmount = React.useCallback(function callback (map) {
    setMap(null)
  }, [setMap])

  const handleClickMarker = (e, marker) => {
    map.panTo(e.latLng)
    // setSelected(marker)
  }

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyAoWkoyvj8ev5iHj01aOw4VNVxmJ-ZP9tI'
    >
      <GoogleMap
        mapContainerStyle={{ width: 600, height: 500 }}
        center={{ lat: -38.416097, lng: -63.616672 }}
        onLoad={onLoad}
        zoom={zoom}
        onUnmount={onUnmount}
      >
        <MarkerClusterer>
          {
            (clusterer) => markers.slice(1, 20).map((item, index) => {
              return (
                <Marker
                  onClick={(e) => handleClickMarker(e, item)}
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
        {/* {
          selected && (
            <InfoWindow>
              <div>
                <h1>InfoWindow</h1>
              </div>
            </InfoWindow>
          )
        } */}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(CustomMap)
