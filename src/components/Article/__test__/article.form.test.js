/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Article from '..';


describe('<Editor />', () => {
  it('renders Editor component without crashing', () => {
    shallow(
      <Article
        title=""
        handleSubmit={() => {}}
        onChange={() => {}}
        onImageChange={() => {}}
        onEditorChange={() => {}}
        articles={{}}
        errors={{}}
        readOnly={false}
        loading={false}
      />,
    );

    shallow(
      <Article
        title=""
        handleSubmit={() => {}}
        onChange={() => {}}
        onImageChange={() => {}}
        onEditorChange={() => {}}
        articles={{}}
        errors={{}}
        readOnly={false}
        loading
      />,
    );
  });
});
