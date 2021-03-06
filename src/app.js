import React from 'react';
import ReactDOM  from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { TodoList } from './containers';

const store = createStore(reducer);

ReactDOM.render( 
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById('app')
  );
