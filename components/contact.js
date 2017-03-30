import cxs from 'cxs';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

const styles = {
  contact: cxs({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',

  }),
  info: cxs({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '50%',
    zIndex: '5',
    background: 'rgba(1, 36, 50, .8)',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    h4: {
      fontWeight: '500',
      fontSize: '2rem',
      marginBottom: '1rem',
      marginTop: '1rem',
      ':nth-of-type(2)': {
        marginTop: '3rem'
      }
    },
    'p, a': {
      lineHeight: '1.2',
      fontSize: '1.8rem',
      fontWeight: '300'
    }
  }),
  map: cxs({
    width: '100%',
    height: '35rem'
  })
};

const markerPosition = {
  lat: 43.68,
  lng: -79.33
};

const mapCenterPosition = {
  lat: 43.68,
  lng: -79.33
};

const mapOptions = {
  scrollwheel: false,
  mapTypeControl: false,
  disableDoubleClickZoom: true,
  draggable: false
};

export default () => {
  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <div>
          <h4>Address</h4>
          <p>123 Worth St.</p>
          <p>Toronto, On</p>
          <h4>Contact Information</h4>
          <p>416-567-7548</p>
          <p>sunny@email.com</p>
        </div>
      </div>

      <GoogleMapLoader
        containerElement={<div className={styles.map}></div>}
        googleMapElement={
          <GoogleMap className={styles.map}
                     defaultZoom={15}
                     defaultCenter={mapCenterPosition}
                     disableDoubleClickZoom={true}
                     defaultOptions={mapOptions}
          >
            <Marker position={markerPosition} defaultAnimation={2} />
          </GoogleMap>
        }
      />
    </div>

  )
}