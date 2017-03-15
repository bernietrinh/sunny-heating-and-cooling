import React from 'react';
import cxs from 'cxs';

const styles = {
  banner: cxs({
    minHeight: '48rem',
    background: `url('/static/images/background.jpg') no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'top left',
    backgroundColor: 'rgba(69, 145, 175, 1)',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '2rem 4rem 2rem 4rem'
  }),
  image: cxs({
    width: '40%',
    height: '35rem',
    border: '1px solid green'
  }),
  title: cxs({
    fontFamily: `'Montserrat', sans-serif`,
    fontSize: '4.8em',
    lineHeight: '1.3',
    fontWeight: 'bold',
    color: '#032531',
  }),
  subtitle: cxs({
    fontSize: '1.8em',
    marginTop: '1.5rem',
    marginBottom: '1.5rem'
  }),
  content: cxs({
    paddingLeft: '3rem',
    maxWidth: '46rem',
    width: '40%'
  })
};

class Banner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      servicesButtonStyles: cxs(Object.assign({ marginLeft: '1rem' }, this.props.buttonStyles))
    };
  }
  render() {
    return (
    <div className={styles.banner}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Heating and Cooling Solutions</h1>
        <h3 className={styles.subtitle}>Your trusted source for affordable solutions to your home comfort needs.</h3>
        <button className={cxs(this.props.buttonStyles)} onClick={this.props.getQuote}>Get a Quote</button>
        <button className={this.state.servicesButtonStyles} onClick={this.props.gotoServices}>Services</button>
      </div>

    </div>
    )
  }
}

export default Banner;