import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import RouteHandler from './components/routeHandler';

library.add(fas);

const App = () => (
  <main>

    <RouteHandler />
  </main>
);

export default App;
