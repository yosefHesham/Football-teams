import PropTypes from 'prop-types';

const Filters = ({ filters, changeLeague }) => (
  <section
    className="filters"
    style={{
      width: '100%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    {filters.map((filter) => (
      <button
        type="button"
        style={{
          flexGrow: '1',
          backgroundColor: '#212529',
          border: '1px solid #343a40',
          padding: '1% 0',
          color: 'white',
          cursor: 'pointer',
        }}
        key={filter.id}
        onClick={() => changeLeague(filter.id)}
      >
        {' '}
        {filter.name}
      </button>
    ))}
  </section>
);

Filters.propTypes = {
  changeLeague: PropTypes.func.isRequired,
  filters: PropTypes.instanceOf(Array).isRequired,
};

export default Filters;
