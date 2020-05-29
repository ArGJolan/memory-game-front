/* eslint-disable no-unused-expressions */

import Picker from './Picker';
import { mount } from '@vue/test-utils';
import { expect } from 'chai';

describe('"Inactive" Picker', () => {
  let picker;

  beforeEach(() => {
    picker = mount(Picker, {
      propsData: {
        cardCount: 42,
        selectedCardCount: 24,
      },
    });
  });

  it('should be a picker', () => {
    expect(picker.find('.picker').exists()).to.be.true;
  });

  it('should show its card count', () => {
    expect(picker.find('.picker').text()).to.be.eq('42');
  });

  it('should not be active', () => {
    expect(picker.find('.picker.active').exists()).to.be.false;
  });

  it('should emit pick event when clicked', () => {
    expect(picker.emitted()).to.not.have.property('pick');
    picker.find('.picker').trigger('click');

    expect(picker.emitted()).to.have.property('pick');
  });
});

describe('"Active" Picker', () => {
  let picker;

  // We could do a simple before, but we leave it as a beforeEach in case we add tests that mutate the components
  beforeEach(() => {
    picker = mount(Picker, {
      propsData: {
        cardCount: 64,
        selectedCardCount: 64,
      },
    });
  });

  it('should be a picker', () => {
    expect(picker.find('.picker').exists()).to.be.true;
  });

  it('should show its card count', () => {
    expect(picker.find('.picker').text()).to.be.eq('64');
  });

  it('should not be active', () => {
    expect(picker.find('.picker.active').exists()).to.be.true;
  });

  it('should emit pick event when clicked', () => {
    expect(picker.emitted()).to.not.have.property('pick');
    picker.find('.picker').trigger('click');

    expect(picker.emitted()).to.have.property('pick');
  });
});
