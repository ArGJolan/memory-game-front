/* eslint-disable no-unused-expressions */

import App from './App';
import Board from './components/Board';
import { mount } from '@vue/test-utils';
import { expect } from 'chai';

describe('App', () => {
  let app;

  beforeEach(() => {
    app = mount(App);
  });

  it('should have id app', () => {
    expect(app.find('#app').exists()).to.be.true;
  });

  it('should have one Board', () => {
    expect(app.findComponent(Board).exists()).to.be.true;
    expect(app.findAllComponents(Board).length).to.be.eq(1);
  });
});
