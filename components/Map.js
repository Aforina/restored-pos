import React, { useCallback } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const contanerStyle = {
  width: '400px',
  height: '400px'
}

const center = {
  lat: -3.745,
  ln: -38.523
}

function myComponent () {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCCTGNeJgjIaxnzy-3zwJdhC-BXTuBUsoA'
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback (map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback (map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(myComponent)
