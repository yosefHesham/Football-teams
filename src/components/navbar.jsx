import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import primaryColor from '../Public';

library.add(fas);

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <nav
      style={{
        display: 'flex',
        backgroundColor: primaryColor,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '10vh',
      }}
    >

      {pathname !== '/' && (
      <Link to="/">
        <FontAwesomeIcon
          icon="fa-solid fa-chevron-left"
          className="c-white"
          style={{ marginLeft: '10px' }}
        />
      </Link>
      )}

      <h1 style={{ margin: '0 auto' }}>Football Leagues</h1>
      <ul
        style={{
          display: 'flex',
          marginRight: '10px',
          columnGap: '15px',
          listStyle: 'none',
        }}
      >
        <li>
          <FontAwesomeIcon icon="fa-solid fa-microphone" className="c-white" />
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-gear" className="c-white" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
