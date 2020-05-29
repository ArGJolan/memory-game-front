/* eslint-disable no-unused-expressions */

import Card from './Card';
import { mount } from '@vue/test-utils';
import { expect } from 'chai';

describe('Non flipped Card', () => {
  let card;

  // We could do a simple before, but we leave it as a beforeEach in case we add tests that mutate the components
  beforeEach(() => {
    card = mount(Card, {
      propsData: {
        value: 42,
        flipped: false,
        flippable: false,
      },
    });
  });

  it('should be a card', () => {
    expect(card.find('.card').exists()).to.be.true;
  });

  it('should only show front face', () => {
    expect(card.find('.card-face.front').exists()).to.be.true;
    expect(card.find('.card-face.back').exists()).to.be.false;
  });

  it('should show its value on card-face', () => {
    expect(card.find('.card-face.front').text()).to.be.eq('42');
  });
});

describe('Flipped card', () => {
  let card;

  // We could do a simple before, but we leave it as a beforeEach in case we add tests that mutate the components
  beforeEach(() => {
    card = mount(Card, {
      propsData: {
        value: 42,
        flipped: true,
        flippable: false,
      },
    });
  });

  it('should be a card', () => {
    expect(card.find('.card').exists()).to.be.true;
  });

  it('should only show back face', () => {
    expect(card.find('.card-face.front').exists()).to.be.false;
    expect(card.find('.card-face.back').exists()).to.be.true;
  });

  it('should show an unknown value on card-face', () => {
    expect(card.find('.card-face.back').text()).to.be.eq('??');
  });
});

describe('Flippable Card', () => {
  let card;

  beforeEach(() => {
    card = mount(Card, {
      propsData: {
        value: 42,
        flipped: false,
        flippable: true,
      },
    });
  });

  it('should emit flip event when clicked', () => {
    expect(card.emitted()).to.not.have.property('flip');
    card.find('.card').trigger('click');

    expect(card.emitted()).to.have.property('flip');
  });
});

describe('Non flippable card', () => {
  let card;

  beforeEach(() => {
    card = mount(Card, {
      propsData: {
        value: 42,
        flipped: false,
        flippable: false,
      },
    });
  });

  it('should not emit flip event when clicked', () => {
    expect(card.emitted()).to.not.have.property('flip');
    card.find('.card').trigger('click');

    expect(card.emitted()).to.not.have.property('flip');
  });
});
