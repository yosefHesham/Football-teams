import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Team = ({ team }) => (
  <Link
    to="/teamDetails"
    state={{ team }}
    style={{
      border: '.2px solid #4f5d75',
      width: '100%',
      textAlign: 'center',
      boxShadow: '0 0 5px rgba(0, 0, 0, .3)',

    }}
  >
    <div>

      <div>
        <img src={team.logo} alt={team.name} />
      </div>
      <div>
        <h3>{team.name}</h3>
        <p>{team.city}</p>
      </div>
    </div>
  </Link>
);

Team.propTypes = {
  team: PropTypes.shape({
    city: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Team;
