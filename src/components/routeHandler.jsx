import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import NavBar from './navbar';
const RouteHandler = () => (

  <Router>
        <NavBar />

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>

);

export default RouteHandler;
