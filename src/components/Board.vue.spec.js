/* eslint-disable no-unused-expressions */

import Board from './Board';
import Card from './Card';
import Picker from './Picker';
import { mount } from '@vue/test-utils';
import { expect } from 'chai';

describe('Board', () => {
  let board;

  beforeEach(() => {
    board = mount(Board);
  });

  it('should not have Cards on mount', () => {
    expect(board.findComponent(Card).exists()).to.be.false;
  });

  it('should have 3 Pickers on mount', () => {
    expect(board.findComponent(Picker).exists()).to.be.true;
    expect(board.findAllComponents(Picker).length).to.be.eq(3);
  });

  it('should have 4 cards when Picker 4 is clicked', async () => {
    const fourPicker = board.findAllComponents(Picker).wrappers.find(wrapper => wrapper.props().cardCount === 4);
    fourPicker.find('div').trigger('click');

    expect(fourPicker.emitted()).to.have.property('pick');
    await new Promise(resolve => setTimeout(resolve)); // Not sure how to solve that
    expect(board.findComponent(Card).exists()).to.be.true;
    expect(board.findAllComponents(Card).length).to.be.eq(4);
  });
});
