import React from 'react';

class Header extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
        <h2 style={{color: this.props.color}}>
          {this.props.message}
        </h2>
    );
  }
}

Header.propTypes = {
  color: React.PropTypes.string,
  message: React.PropTypes.string
};

Header.defaultProps = {
  color: 'red',
  message: 'Hello from React'
};

export default Header;