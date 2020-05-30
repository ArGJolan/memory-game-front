/* eslint-disable no-unused-expressions */

import GameControls from './GameControls';
import { mount } from '@vue/test-utils';
import { expect } from 'chai';

describe('GameControls', () => {
  let gameControls;

  beforeEach(() => {
    gameControls = mount(GameControls, {
      propsData: {
        gameState: 'init',
      },
    });
  });

  it('should be a game-controls', () => {
    expect(gameControls.find('.game-controls').exists()).to.be.true;
  });

  it('should have one start game button', () => {
    expect(gameControls.find('button.start').exists()).to.be.true;
    expect(gameControls.findAll('button.start').length).to.be.eq(1);
  });

  it('should not have a reset game button', () => {
    expect(gameControls.find('button.reset').exists()).to.be.false;
  });

  it('should emit start event when start button is clicked', () => {
    expect(gameControls.emitted()).to.not.have.property('start');
    gameControls.find('button.start').trigger('click');

    expect(gameControls.emitted()).to.have.property('start');
  });
});

describe('GameControls while ingame', () => {
  let gameControls;

  beforeEach(() => {
    gameControls = mount(GameControls, {
      propsData: {
        gameState: 'running',
      },
    });
  });

  it('should be a game-controls', () => {
    expect(gameControls.find('.game-controls').exists()).to.be.true;
  });

  it('should not have a start game button', () => {
    expect(gameControls.find('button.start').exists()).to.be.false;
  });

  it('should have one reset game button', () => {
    expect(gameControls.find('button.reset').exists()).to.be.true;
    expect(gameControls.findAll('button.reset').length).to.be.eq(1);
  });

  it('should emit reset event when reset button is clicked', () => {
    expect(gameControls.emitted()).to.not.have.property('reset');
    gameControls.find('button.reset').trigger('click');

    expect(gameControls.emitted()).to.have.property('reset');
  });
});
