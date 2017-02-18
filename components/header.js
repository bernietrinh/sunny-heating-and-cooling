import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <div>
        <header>
        <img src="" alt=""/>
        <div className="contact"><b>For immediate services:</b> 416-809-7898</div>
        <nav>
          <a className="about" href="javascript:void(0)" onClick={this.props.gotoAbout}>About Us</a>
          <a className="services" href="javascript:void(0)" onClick={this.props.gotoServices}>Services</a>
        </nav>
      </header>
    </div>
    )
  }
}

export default Header;
