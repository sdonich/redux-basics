import axios from 'axios';

const apiMiddleware = store => next => action => {

  if(!action.request) {
    return next(action);
  }

  const REQUEST = `${action.type}_REQUEST`;
  const SUCCESS = action.type;

  next({type: REQUEST});

  return axios[action.request.method](action.request.url, { title: action.request.body.title })
    .then(({ data }) => next({
      type: SUCCESS,
      data
    }))
}

export default apiMiddleware;

