import React from 'react';
import cxs from 'cxs';
import Form from './form';
import Loader from './loader';
import FormFeedback from './formFeedback';

const defaultState = {
  isLoading: false,
  hasSubmitError: false,
  isComplete: false
};

const successMessage = {
  title: 'Thanks!',
  message: 'We\'ve received your inquiry and will get back to you as soon as possible!',
  btnText: 'Go Back'
};

const errorMessage = {
  title: 'Whoops...',
  message: 'There was an error submitting your inquiry. Please try again or give us a call at 416-566-1820.',
  btnText: 'Try Again'

};

class FormHoC extends React.Component {

  constructor(props) {
    super(props);
    this.state = defaultState;

    this.setLoading = this.setLoading.bind(this);
    this.setIsComplete = this.setIsComplete.bind(this);
    this.setSubmitError = this.setSubmitError.bind(this);
    this.setDefaultState = this.setDefaultState.bind(this);
  }


  setLoading(isLoading) {
    this.setState({ isLoading: isLoading });
  }

  setIsComplete(isComplete) {
    this.setState({ isComplete: isComplete });
  }

  setSubmitError(submitError) {
    this.setState({ hasSubmitError: submitError });
  }

  setDefaultState() {
    this.setState(defaultState);

  }

  render() {
    return (
      <div className={styles.formWrapper}>
        {
          this.state.isLoading ?
            <Loader />
            :
            ''
        }
        {
          !this.state.isLoading &&
          !this.state.isComplete &&
          !this.state.hasSubmitError ?

            <Form setLoading={this.setLoading}
                  setIsComplete={this.setIsComplete}
                  setSubmitError={this.setSubmitError}
            />
            :
            ''
        }
        {
          this.state.isComplete ?
            <FormFeedback {...successMessage} returnToForm={this.setDefaultState} />
            :
            ''
        }
        {
          this.state.hasSubmitError ?
            <FormFeedback {...errorMessage} returnToForm={this.setDefaultState} />

            :
            ''
        }
      </div>
    )
  }
}

const styles = {
  formWrapper: cxs({
    background: '#012432',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80rem'
  })
};

export default FormHoC;