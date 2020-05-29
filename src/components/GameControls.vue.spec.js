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
});
