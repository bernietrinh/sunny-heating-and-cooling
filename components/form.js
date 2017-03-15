import React from 'react';
import validator from 'validator';
import cxs from 'cxs';

const styles = {
  modal: cxs({
    background: 'rgba(265, 265, 265, 0.8)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'auto'
  }),
  cancel: cxs({
    position: 'absolute',
    top: '2rem',
    right: '2rem'
  }),
  form: cxs({
    padding: '4rem 2rem',
    width: '30rem',
    maxHeight: '100%',
    section: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '2rem'
    }
  }),
  label: cxs({
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#032531'
  }),
  input: cxs({
    marginTop: '1rem',
    borderRadius: '3px',
    borderStyle: 'initial',
    height: '3rem',
    border: '1px solid #1f5264'
  })
};

const INPUTS = {
  name: 'name',
  email: 'email',
  phoneNumber: 'phoneNumber',
  helpWith: 'helpWith'
};

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      request: {
        name: '',
        email: '',
        phoneNumber: '',
        helpWith: ''
      },
      error: {
        type: '',
        message: ''
      },
      submitStyles: cxs(Object.assign({
        width: '100%',
        marginTop: '2rem'
      } , this.props.buttonStyles))
    };
  }


  handleInputChange(event) {

    const inputName = event.target.id;
    let inputValue = event.target.value;

    const input = {};
    input[inputName] = {
      value: validator.ltrim(validator.rtrim(inputValue))
    };
    let error = {
      type: '',
      message: ''
    };

    switch (inputName) {
      case INPUTS.name:
        break;

      case INPUTS.email:
        if (!validator.isEmail(inputValue) || validator.isEmpty(inputValue)) {
          error.message = 'Please enter a valid e-mail address';
        } else {
          input[inputName].value = validator.normalizeEmail(input[inputName].value);
        }

        this.setState(input);
        break;

      case INPUTS.phoneNumber:

        break;

      default:
        break;
    }

    if (error.type) {
      this.setState({ error });
    } else {
      this.setState({ request: input });
    }

  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitQuoteRequest(this.state);
  }

  render() {
    return (
      <div className={styles.modal}>
        <button className={styles.cancel} onClick={this.props.cancelForm}>X</button>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <section>
            <label className={styles.label} id="name">Name:</label>
            <input className={styles.input} type="text" id="name" onBlur={this.handleInputChange}/>
          </section>
          <section>
            <label className={styles.label} id="email">E-mail:</label>
            <input className={styles.input} type="email" id="email" onBlur={this.handleInputChange}/>
          </section>
          <section>
            <label className={styles.label} id="phoneNumber">Phone number:</label>
            <input className={styles.input} type="text" id="phoneNumber" onBlur={this.handleInputChange}/>
          </section>
          <section>
            <label className={styles.label} id="helpWith">What can we help you with?</label>
            <input className={styles.input} type="text" id="helpWith" onBlur={this.handleInputChange}/>
          </section>
          <button className={this.state.submitStyles} type="submit">Submit</button>
        </form>

      </div>
    )
  }
}

export default Form;