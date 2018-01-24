import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// main app
import App from '../main/App';
import store from './store';

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
 document.getElementById('app')
)


// ReactDOM.render(<App />, document.getElementById('app'));
