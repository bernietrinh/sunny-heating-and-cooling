import cxs from 'cxs';

const services = [
  {
    title: 'Furnaces',
    description: `We install, service, and maintain your furnaces with expert care. If you\'re looking for a new furnace,
    a high efficiency natural-gas furnace can make a huge difference, being up to 96% more efficient. See the difference 
    in both in your home and on your bill.`
  },
  {
    title: 'Air Conditioning',
    description: `Stay cool in the summer with new high efficient air conditioners up to 16 SEERS. Let us help you in 
    choosing the one that is best suited for your home. We also offer repairs and tune ups for your existing AC unit.`
  },
  {
    title: 'Hot Water Tank',
    description: `We help you get the most out of your hot water tank or tankless water heater. Ensure your water heater 
    is installed properly and professionally as improper installation can greatly reduce the life of a water heater.`
  },
  {
    title: 'Gas lines',
    description: `Whether it's to warm up your home with a new fireplace, or serving delicious meals with the help of a 
    gas range and/or BBQ, we can help with any gas line needs you may have. At Sunny, our technicians are licenced 
    and will safely install all gas appliances.`
  },
  {
    title: 'Custom Duct Work/Sheet Metal Installation',
    description: `Poorly installed ducts can render any furnace's forced air completely useless if the ducts are sized 
    incorrectly or missing in some areas. We provide professional custom solutions in duct work and sheet metal 
    installation to make the most of your home.`
  },
  {
    title: 'Annual Maintenance',
    description: `Prevent costly issues before they occur: performing annual maintenance improves efficiency and operating 
    capacity. Not only can we help with lower your utility bills, but also extend the life of your equipment.`
  }

];

export default () => {
  return (
    <div className={styles.servicesWrapper}>
      <div className={styles.descWrapper}>
        <div className={styles.desc}>
          <h2 className={styles.descHeader}>We are here to serve you.</h2>
          <p className={styles.descBody}>
            We are a team of professionally licensed technicians offering friendly, reliable and timely service in the
            Greater Toronto Area, York, and Durham region. Whether it's installing your air conditioner or annual furnace
            maintenance, at Sunny, we provide top quality service at affordable rates. Contact us today to chat about our
            products or for a free quote!
          </p>
        </div>
      </div>
      <div className={styles.services}>
        {
          services.map((service, key) => {
            return (
              <section key={key} className={styles.service}>
                <h2 className={styles.descHeader}>{ service.title }</h2>
                <p className={styles.descBody}>{ service.description }</p>
              </section>
            )
          })
        }
        </div>
    </div>
  )
}

const bodyText = {
  fontSize: '1.8rem',
  lineHeight: '1.3'
};

const headerText = {
  fontSize: '3rem',
  fontFamily: `'Montserrat', sans-serif`,
  fontWeight: 'bold',
  lineHeight: '1.4',
  paddingBottom: '1.5rem'
};

const styles = {
  servicesWrapper: cxs({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }),
  descWrapper: cxs({
    background: '#012432',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }),
  desc: cxs({
    padding: '10rem',
    maxWidth: '100rem',
    h2: {
      color: '#FFFFFF'
    },
    p: {
      color: '#FFFFFF'
    }
  }),
  descHeader: cxs(headerText),
  descBody: cxs(bodyText),
  icons: cxs({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  }),
  icon: cxs({
    width: '30%',
    img: {
      width: '6rem'
    }
  }),
  services: cxs({
    maxWidth: '100rem',
    padding: '8rem 0',
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }),
  service: cxs({
    textAlign: 'left',
    width: '30%',
    marginBottom: '2.5rem',
    marginTop: '2.5rem',
  })
};