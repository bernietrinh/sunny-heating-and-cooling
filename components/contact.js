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
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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
    },
    '@media (max-width: 39.9em)': {
      left: 0,
      width: '100%',
      height: '100%'
    },
    '@media (min-width: 40em)': {
      top: 0,
      width: '50%'
    }
  }),
  map: cxs({
    width: '100%',
    height: '40rem'
  })
};

const markerPosition = {
  lat: 43.806940,
  lng: -79.290915
};

const mapCenterPosition = {
  lat: 43.806152,
  lng: -79.273481
};

const mapOptions = {
  streetViewControl: false,
  zoomControl: false,
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
          <p>63 Silver Star Blvd. Unit C18</p>
          <p>Toronto, ON</p>
          <h4>Contact Information</h4>
          <p>Office: 416-567-7548</p>
          <p>sunny-heating@hotmail.com</p>
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