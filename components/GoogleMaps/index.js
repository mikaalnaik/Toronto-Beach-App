import GoogleMapReact from 'google-map-react';
import styles from './BeachMap.module.scss'

const Marker = ({ title }) => <div className={styles.marker}> {title} </div>

const BeachMap = ({ positionData, beachName }) => {
  return (
    <div className={styles.map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API }}
        defaultCenter={ {
          lat: positionData.coordinates.latitude,
          lng: positionData.coordinates.longitude,
        }}
        defaultZoom={15}
      >
        <Marker
          title={beachName}
          lat={positionData.coordinates.latitude}
          lng={positionData.coordinates.longitude}
        />
      </GoogleMapReact>
    </div>
  )
}

export default BeachMap;
