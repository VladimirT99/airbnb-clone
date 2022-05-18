import React from 'react'
import Map from 'react-map-gl'


function Mapa() {
  return (
    <Map
    mapStyle='mapbox://styles/vladimirt99/cl2uenhrt000z15ltgt8jq45m'
    mapboxAccessToken={process.env.mapbox_key}
    initialViewState={{
      latitude: 45.509,
      longitude: -0.11,
      zoom: 6,
    }}
    style={{width: "100%", height:"100%"}}
    />
  )
}

export default Mapa