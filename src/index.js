// import React from 'react';
// // import ReactDOM from 'react-dom/client'; ????????? 
// import ReactDOM from 'react-dom';
// import App from 'components/App/App';
// import store from './redux/store';
// import './index.css';
// import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App/App';
import store from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
