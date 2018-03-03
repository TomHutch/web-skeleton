import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Main extends Component {
  componentWillMount() {
    this.props.getSkeletons();
  }

  render() {
    const { skeletons } = this.props;

    return (
      <div className="main-page">
        {JSON.stringify(skeletons)}
      </div>
    );
  }
}

Main.propTypes = {
  getSkeletons: PropTypes.func.isRequired,
  skeletons: PropTypes.arrayOf(PropTypes.object),
};

Main.defaultProps = {
  skeletons: [],
};

export default Main;
