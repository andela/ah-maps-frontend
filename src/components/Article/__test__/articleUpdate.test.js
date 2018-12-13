/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Article from '../ArticleUpdate';


describe('<Editor />', () => {
  it('renders Editor component without crashing', () => {
    shallow(
      <Article
        title="qwerty"
        handleSubmit={() => {}}
        onChange={() => {}}
        onImageChange={() => {}}
        onEditorChange={() => {}}
        articles={{}}
        errors={{ body: 'Body field required' }}
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
