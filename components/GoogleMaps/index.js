import GoogleMapReact from 'google-map-react';
import styles from './BeachMap.module.scss'

const BeachMap = ({ positionData }) => {
  return (
    <div className={styles.map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API }}
        defaultCenter={ {
          lat: positionData.coordinates.latitude,
          lng: positionData.coordinates.longitude,
        }}
        defaultZoom={15}
      />
    </div>
  )
}

export default BeachMap;
