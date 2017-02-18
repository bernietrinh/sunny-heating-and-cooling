import React from 'react';

class Banner extends React.Component {

  render() {
    return <div>
      <div className="banner">
        <h1 className="banner-title">Heating and Cooling Solutions</h1>
        <h3 className="banner-subtitle">Lorem ipum dolor sit amet, consectetur adipscing elit. Susendisse rhoncus lorem in convallis trsitque.</h3>
        <button className="button button-quote" onClick={this.props.getQuote}>Get a quote</button>
        <button className="button button-services" onClick={this.props.gotoServices}>Services</button>
      </div>
    </div>
  }
}

export default Banner;