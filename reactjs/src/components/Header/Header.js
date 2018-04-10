import React, { Component } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(pervState => ({
      isToggleOn: !pervState.isToggleOn
    }));
  }

  render() {

    let menuActive = this.state.isToggleOn ? 'is-active' : '';

    return (
      <div className="navbar has-shadow" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-start">
            <a className="navbar-item">MyCompany</a>
          </div>

          <span className={'navbar-toggle '+menuActive} onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className={'navbar-end navbar-menu '+menuActive}>

            <Link to="/" className="navbar-item r-item">Home</Link>
            <Link to="/faq" className="navbar-item r-item">Features</Link>
            <Link to="/faq" className="navbar-item r-item">About</Link>
            <Link to="/faq" className="navbar-item r-item">FAQ</Link>

            <div className="navbar-item">
              <p className="control">
                <a role="button" className="button is-primary is-outlined">
                  <span className="icon">
                    <i className="fa fa-download"></i>
                  </span>
                  <span>Join Now</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Header;
