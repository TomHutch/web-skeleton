/* eslint-disable function-paren-newline */

import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Main from './Main';

configure({ adapter: new Adapter() });

const data = [
  { a: 1, b: 4, c: 9 },
  { a: 2, b: 6, c: 9 },
  { a: 3, b: 5, c: 9 },
];

describe('<Main />', () => {
  it('Should render cells', () => {
    const wrapper = shallow(
      <Main
        skeletons={data}
        getSkeletons={() => {}}
      />,
    );

    expect(wrapper.find('.table__cell')).to.have.length(12);
  });

  it('After initial render getSkeletons should have call count of 1', () => {
    const spy = sinon.spy();
    shallow(
      <Main
        skeletons={data}
        getSkeletons={spy}
      />,
    );

    expect(spy).to.have.property('callCount', 1);
  });
});
