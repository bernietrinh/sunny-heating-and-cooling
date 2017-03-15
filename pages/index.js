import React, {Component} from 'react';
import cxs from 'cxs'
import Header from '../components/header'
import Banner from '../components/banner'
import Services from '../components/services'
import Products from '../components/products'
import Footer from '../components/footer'
import Form from '../components/form'

// global styles
const styles = {
  main: cxs({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    a: {
      textDecoration: 'none',
      ':visited': {
        color: 'inherit'
      }
    },
    button: {
      cursor: 'pointer'
    }
  }),
  form: cxs({
  })
};

const buttonStyles = {
  background: 'none',
  border: '2px solid',
  padding: '1rem 2rem',
  fontWeight: 'bold',
  fontSize: '1.8rem',
  transition: 'color 0.5s ease',
  ':hover': {
    color: '#1f5264'
  }
};

const scrollActive = {
  overflowY: 'auto'
};

const scrollPrevented = {
  overflowY: 'hidden'
};

class Index extends Component {

  // for smooth scroll https://www.npmjs.com/package/react-scroll
  constructor(props) {
    super(props);
    this.state = {
      formDisplayed: false,
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.submitQuoteRequest = this.submitQuoteRequest.bind(this);
  }

  navigateToServices() {
    console.log('navigate to services');
  }

  navigateToAbout() {
    console.log('navigate to about');
  }

  submitQuoteRequest({ name, email, phoneNumber, helpWith }) {
    console.log('name', name);
    console.log('email', email);
    console.log('phoneNumber', phoneNumber);
    console.log('helpWith', helpWith);
  }

  toggleForm() {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  }

  render() {
    return <div className={styles.main} style={this.state.formDisplayed ? scrollPrevented : scrollActive}>
      <Header/>
      <Banner getQuote={this.toggleForm} gotoServices={this.navigateToServices} buttonStyles={buttonStyles} />
      <Services />
      <Products />
      <Footer />
      {
        this.state.formDisplayed ?
          <Form className={styles.form}
                submitQuoteRequest={this.submitQuoteRequest}
                cancelForm={this.toggleForm}
                buttonStyles={buttonStyles}
          />
          :
          ''
      }
      }
    </div>
  }
}

export default Index;