import { getCollectionUrl } from '../utils';

export const FETCH_PAGE = 'FETCH_PAGE';
export const PARSE_PAGE = 'PARSE_PAGE';

const initialState = [];

export function parsePage(json) {
  const pages = json.entries !== undefined ? json.entries : null;
  return { type: PARSE_PAGE, pages: pages };
}

export function fetchCollection(collection) {
  return dispatch => {
    return fetch(getCollectionUrl('basicpage'), {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify({
        filter: { published: true },
        populate: 1,
        limit: 50,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => dispatch(parsePage(json)));
  };
}

export default (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case FETCH_PAGE:
      return action;

    case PARSE_PAGE:
      newState = action.pages;
      return newState;

    default:
      return state;
  }
};
