import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

const MainRedux = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
};

export default MainRedux;
