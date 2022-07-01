import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import './App.css';
import RouteHandler from './components/routeHandler';


const App = () => (
  <main>

    <RouteHandler />
  </main>
);


export default App;
