import React from 'react';
import validator from 'validator';
import cxs from 'cxs';
import fetch from 'isomorphic-fetch';
import TextInput from './textInput';

const locale = 'en-CA';
const INPUTS = {
  name: {
    title: 'Name',
    id: 'name'
  },
  email: {
    title: 'E-mail Address',
    id: 'email'
  },
  phoneNumber: {
    title: 'Phone Number',
    id: 'phoneNumber'
  },
  service: {
    title: 'What can we help you with?',
    id: 'service'
  },
  comments: {
    title: 'Comments',
    id: 'comments'
  }
};

const defaultState = {
  name: { },
  email: { },
  phoneNumber: { },
  service: { value: 'default' }
};

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._hasInputError = this._hasInputError.bind(this);
    this.state = defaultState;

    console.log('process.env', process.env.NODE_ENV);
  }


  handleInputChange(event) {
    const value = validator.trim(event.target.value);
    this.setState({[event.target.name]: { value }})

  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this._hasInputError()) {
      this.props.setLoading(true);
      this._submitQuoteRequest(this.state);
    }
  }

  _submitQuoteRequest({ name, email, phoneNumber, service, comments }) {
    const url = process.env.NODE_ENV === 'development' ?
      'http://localhost:8080/api/inquiry' :
      'https://sunny-heating.herokuapp.com/api/inquiry';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name : name.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        service: service.value,
        comments: typeof comments !== 'undefined' ? comments.value : ''
      })
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }

        this.props.setIsComplete(true);
        this.props.setLoading(false);
      })
      .catch(err => {
        this.props.setSubmitError(true);
        this.props.setLoading(false);

      });
  }

  _hasInputError() {
    let hasError = false;

    // validate name
    if (typeof this.state.name.value === 'undefined' ||
      validator.isEmpty(this.state.name.value)) {
      hasError = true;
      this.setState({ name: { error: '*Please provide your name' }});
    }

    // validate / normalize email
    if (typeof this.state.email.value === 'undefined' ||
      validator.isEmpty(this.state.email.value)) {
      hasError = true;
      this.setState({ email : { error: '*Please provide your email' }});

    } else {
      hasError = !validator.isEmail(this.state.email.value) ? true : hasError;
      this.setState(!validator.isEmail(this.state.email.value) ?
        { email : { error: '*Please enter a valid e-mail address' }} :
        { email: { value: validator.normalizeEmail(this.state.email.value, { gmail_remove_dots: false }) }}
      );
    }

    // validate phone number
    if (typeof this.state.phoneNumber.value === 'undefined' ||
      validator.isEmpty(this.state.phoneNumber.value)) {
      hasError = true;
      this.setState({ phoneNumber : { error: '*Please provide a contact number' }});
    } else {
      // blacklist non digits
      const phoneNumber = this.state.phoneNumber.value.replace(/\D/g, '');

      hasError = !validator.isMobilePhone(phoneNumber, locale) ? true : hasError;

      this.setState(!validator.isMobilePhone(phoneNumber, locale) ?
        { phoneNumber: { error: '*Please provide valid phone number' }} :
        { phoneNumber: { value: phoneNumber }}
      );
    }

    // validate services
    if (this.state.service.value === 'default') {
      hasError = true;
      this.setState({ service: { error: '*Please select a service we can help you with' }});
    }

    return hasError;
  }

  render() {
    return (
      <div>
        <h2 className={styles.formHeader}>Message us for a free quote today!</h2>
        <form className={styles.form} onSubmit={this.handleSubmit}>

          <TextInput
            label={INPUTS.name}
            input={this.state.name}
            type={'text'}
            styles={styles}
            onValueChange={this.handleInputChange} />

          <TextInput
            label={INPUTS.email}
            input={this.state.email}
            type={'email'}
            styles={styles}
            onValueChange={this.handleInputChange} />

          <TextInput
            label={INPUTS.phoneNumber}
            input={this.state.phoneNumber}
            type={'text'}
            styles={styles}
            onValueChange={this.handleInputChange} />

          <section>
            <label className={styles.label} id={INPUTS.service.id}>{INPUTS.service.title}</label>
            {
              this.state.service.error ?
                <div className={styles.error}>{this.state.service.error}</div>
                :
                ''
            }
            <select className={styles.select} name={INPUTS.service.id} onChange={this.handleInputChange}>
              <option value="default">--Select a service--</option>
              <option value="furnace">Furnace</option>
              <option value="ac">Air Conditioning</option>
              <option value="waterHeating">Water Heating</option>
              <option value="gas">Gas Line</option>
              <option value="ductWork">Duct Work</option>
              <option value="maintenance">Maintenance</option>
              <option value="other">Other</option>
            </select>
          </section>

          <section>
            <label className={styles.label} id={INPUTS.comments}>Comments</label>
            <textarea className={styles.textArea} type="text" name={INPUTS.comments} />
          </section>
          <button className={styles.button} type="submit">Submit</button>
        </form>

      </div>
    )
  }
}

const styles = {
  formHeader: cxs({
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: '2rem',
    fontFamily: `'Montserrat', sans-serif`,
    fontWeight: 'bold',
    lineHeight: '1.4',
    margin: '4rem auto',
    padding: '0 2rem',
  }),
  form: cxs({
    margin: '4rem 0',
    background: '#E7E7E7',
    padding: '4rem',
    width: '70%',
    maxHeight: '100%',
    textAlign: 'center',
    section: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '2rem'
    },
    '@media (min-width: 40em)': {
      width: '30rem',
      paddingLeft: '8rem',
      paddingRight: '8rem'
    }
  }),
  textArea: cxs({
    marginTop: '1rem',
    borderRadius: '1px',
    borderStyle: 'initial',
    height: '12rem',
    maxWidth: '100%',
    maxHeight: '12rem',
    ':focus': {
      outline: '2px RGB(142, 190, 210) solid'
    }
  }),
  select: cxs({
    marginTop: '1rem',
    borderRadius: '2px',
    padding: '1rem',
    background: 'white',
    border: 'none',
    height: '3.5rem',
    '-webkit-appearance': 'initial',
    ':focus': {
      outline: '2px RGB(142, 190, 210) solid'
    }
  }),
  button: cxs({
    fontWeight: '500',
    fontSize: '1.8rem',
    color: '#4A4A4A',
    padding: '1rem 4rem',
    background: '#CECECE',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.5s ease',
    ':hover': {
      background: '#1f5264',
      color: '#FFFFFF'
    }
  }),
  error: cxs({
    textAlign: 'left',
    marginTop: '1rem',
    color: 'RGB(211, 139, 148)'
  }),
  label: cxs({
    fontSize: '2rem',
    fontWeight: '500',
    color: '#012432',
    textAlign: 'left'
  })
};

export default Form;