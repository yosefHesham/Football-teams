import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';

const RouteHandler = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default RouteHandler;
