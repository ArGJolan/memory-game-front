/* eslint-disable no-unused-expressions */

import GameAnnouncer from './GameAnnouncer';
import { mount } from '@vue/test-utils';
import { expect } from 'chai';

describe('GameAnnouncer', () => {
  let gameAnnouncer;

  beforeEach(() => {
    gameAnnouncer = mount(GameAnnouncer, {
      propsData: {
        gameState: 'init',
      },
    });
  });

  it('should not be shown by default', () => {
    expect(gameAnnouncer.find('.game-announcer').exists()).to.be.false;
  });
});

describe('GameAnnouncer on win', () => {
  let gameAnnouncer;

  beforeEach(() => {
    gameAnnouncer = mount(GameAnnouncer, {
      propsData: {
        gameState: 'won',
      },
    });
  });

  it('should be visible', () => {
    expect(gameAnnouncer.find('.game-announcer').exists()).to.be.true;
  });

  it('should tell that use won', () => {
    expect(gameAnnouncer.find('.won').text()).to.be.eq('YOU WON!!!1!');
  });

  it('should sown exactly two spining doges 🐶', () => {
    expect(gameAnnouncer.findAll('.spin-to-win').length).to.eq(2);
  });
});
