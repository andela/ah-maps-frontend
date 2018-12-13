import { ADD_ARTICLES, ADD_ARTICLES_ERROR, REMOVE_ARTICLE_MESSAGE } from '../../constants';

export const initialState = {
  success: false,
  article: {},
  status: 'error',
  errors: {},
  editor_content: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ARTICLES:
      return {
        ...state,
        success: true,
        article: payload,
        status: 'success',
        errors: { message: 'Article submitted successfully' },
      };
    case REMOVE_ARTICLE_MESSAGE:
      return {
        ...state,
        success: true,
        visible: false,
        errors: [],
      };
    case ADD_ARTICLES_ERROR:
      return {
        ...state,
        success: false,
        errors: payload,
        status: 'error',
      };
    default:
      return state;
  }
};
