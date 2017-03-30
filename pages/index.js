import React, {Component} from 'react';
import cxs from 'cxs'
import Banner from '../components/banner'
import Services from '../components/services'
import Products from '../components/products'
import Contact from '../components/contact'
import FormHoC from '../components/formHoC'

// global styles
const styles = {
  main: cxs({
    a: {
      textDecoration: 'none',
      ':visited': {
        color: 'inherit'
      }
    },
    button: {
      cursor: 'pointer'
    }
  })
};

const buttonStyles = {
  background: 'none',
  border: '2px solid',
  padding: '1rem 2rem',
  fontSize: '1.8rem',
  transition: 'color 0.5s ease',
  ':hover': {
    color: '#1f5264'
  }
};

class Index extends Component {

  // for smooth scroll https://www.npmjs.com/package/react-scroll
  constructor(props) {
    super(props);
    this.state = {
      formDisplayed: false,
    };

  }

  navigateToServices() {
    console.log('navigate to services');
  }

  navigateToAbout() {
    console.log('navigate to about');
  }

  render() {
    return <div className={styles.main}>
      <Banner getQuote={() => {}} />
      <Services />
      <Contact />
      <FormHoC />
      <Products />
    </div>
  }
}

export default Index;