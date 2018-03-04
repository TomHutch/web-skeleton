import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';

class Main extends Component {
  componentWillMount() {
    this.props.getSkeletons();
  }

  render() {
    const { skeletons } = this.props;
    const headers = Object.keys(skeletons[0]);

    return (
      <div className="main-page">
        <div className="table-wrapper">
          {headers.map(header => (
            <div
              className="table__cell table__cell--header"
              key={generate()}
            >
              {header}
            </div>
          ))}
          {skeletons.map((skeleton, i) => Object.values(skeleton).map(val => (
            <div
              className={`table__cell ${i % 2 ? 'table__cell--odd' : 'table__cell--even'}`}
              key={generate()}
            >
              {val}
            </div>
          )))}
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  getSkeletons: PropTypes.func.isRequired,
  skeletons: PropTypes.arrayOf(PropTypes.object),
};

Main.defaultProps = {
  skeletons: [{}],
};

export default Main;
