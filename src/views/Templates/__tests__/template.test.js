/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import TemplateDefault, { onOnScreen, offScreen } from '../TemplateDefault';
import TemplateWithMenu from '../TemplateWithMenu';
import TemplateWithoutMenu from '../TemplateWithoutMenu';

it('renders Default template component without crashing', () => {
  shallow(
    <TemplateDefault>
      <div className="hello">Hello world</div>
    </TemplateDefault>,
  );
});

it('renders Template with menu component without crashing', () => {
  shallow(
    <TemplateWithMenu>
      <div className="hello">Hello world</div>
    </TemplateWithMenu>,
  );
});

it('renders Template with menu component without crashing', () => {
  shallow(
    <TemplateWithoutMenu>
      <div className="hello">Hello world</div>
    </TemplateWithoutMenu>,
  );
});

it('should on scroll functions to be defined', () => {
  document.body.innerHTML = '<div class="top fixed">Hello</div>';
  const banner = document.querySelectorAll('.top.fixed');
  console.warn(onOnScreen.banner)
  // const variable = onOnScreen()
  // expect(variable.banner).toBeDefined();
  expect(onOnScreen).toBeDefined();
  // expect(offScreen).toBeDefined();
});
