import React from 'react';
import cxs from 'cxs';

class Banner extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.banner}>
        <header className={styles.header}>
          <img className={styles.logo} src="/static/images/logo.svg" alt=""/>
          <div className={styles.contact}><p>For immediate services call: <b>416-566-1820</b></p></div>
          <div></div>
        </header>
        <div className={styles.callout}>
          <div className={styles.content}>
            <h1 className={styles.title}>Heating and Cooling Solutions</h1>
            <h3 className={styles.subtitle}>Your trusted source for affordable solutions to your home comfort needs.</h3>
            {/*<button className={cxs(this.props.buttonStyles)} onClick={this.props.getQuote}>Get a Quote</button>*/}
            {/*<button className={this.state.servicesButtonStyles} onClick={this.props.gotoServices}>Services</button>*/}
          </div>
        </div>

      </div>
    )
  }
}

const styles = {
  header: cxs({
    display: 'flex',
    background: 'none',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    marginTop: '1rem',
    marginLeft: '1rem',
    marginRight: '1rem',
    flexDirection: 'column',
    alignItems: 'left',
    '@media (min-width: 40em)': {
      alignItems: 'center',
      flexDirection: 'row'
    }
  }),
  contact: cxs({
    padding: '.5rem',
    fontSize: '1.6rem',
    color: '#FFFFFF',
    fontFamily: `'Montserrat', sans-serif`,
    b: {
      fontWeight: '700'
    }
  }),
  logo: cxs({
    width: '11rem',
    height: '100%'
  }),
  banner: cxs({
    minHeight: '46rem',
    background: `url('/static/images/banner.jpg') no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    backgroundColor: 'rgba(69, 145, 175, 1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media (min-width: 40em)': {
      backgroundPosition: 'top left'
    }
  }),
  callout: cxs({
    display: 'flex',
    '@media (min-width: 40em)': {
      flexDirection: 'row-reverse',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }
  }),
  title: cxs({
    fontFamily: `'Montserrat', sans-serif`,
    fontSize: '4.0em',
    lineHeight: '1.3',
    fontWeight: 'bold',
    color: '#FFFFFF',
  }),
  subtitle: cxs({
    fontSize: '1.8em',
    marginTop: '1.5rem',
    color: '#FFFFFF',
    marginBottom: '1.5rem'
  }),
  content: cxs({
    paddingLeft: '3rem',
    '@media (max-width: 39.9em)': {
      paddingRight: '3rem',
      width: '80%'
    },
    '@media (min-width: 40em)': {
      maxWidth: '46rem',
      width: '40%',
      paddingRight: '15rem'
    }
  }),
};

export default Banner;