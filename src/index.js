import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

// JSX Code imported from App file
const myelement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(myelement, document.getElementById('root')
);
