export function loadState(key = 'state') {
  try {
    let json = localStorage.getItem(key);
    if (json === null) {
      return undefined;
    } else {
      return JSON.parse(json);
    }
  } catch (error) {
      return undefined;
  }
}

export default (key='state') => store => next => action => {
  let result = next(action);

  try {
    let json = JSON.stringify(key ? store.getState() : undefined);
    localStorage.setItem(key || 'state', json);
  } catch (error) {
      console.log(error)
  }
  return result;
}