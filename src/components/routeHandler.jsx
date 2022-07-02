import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import NavBar from './navbar';
import TeamPage from './teams_page';

const RouteHandler = () => (
  <Router>
    <NavBar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teamDetails" element={<TeamPage />} />
    </Routes>
  </Router>
);

export default RouteHandler;
