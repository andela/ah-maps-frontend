/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import ArticleEditor from '../ArticleEditor';

describe('<ArticleEditor />', () => {
  it('renders ArticleEditor component without crashing', () => {
    shallow(
      <ArticleEditor
        onEditorChange={() => {}}
        readOnly
        errors={{}}
      />,
    );

    shallow(
      <ArticleEditor
        onEditorChange={() => {}}
        readOnly
        errors={{ body: 'errors' }}
      />,
    );
  });
});
