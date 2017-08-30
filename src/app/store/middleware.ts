export const logger = store => next => action => {
    console.group('Redux Middleware [logger];');
      console.log('dispatching', action);
        let result = next(action);
      console.log('next state ', store.getState());
    console.groupEnd();
    return result
  };

export const crashReporter = store => next => action => {
    try {
      console.group('Redux Middleware [crashReporter]:')
        console.log('dispatching', action);
          let result = next(action);
        console.log('next state ', store.getState());
      console.groupEnd();
    } catch (err) {
      console.error('Caught an exception!', err);
      throw err;
    }
  };