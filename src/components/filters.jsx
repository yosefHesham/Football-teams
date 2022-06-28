const Filters = ({ filters }) => {
  return (
    <section className="filters">
      {filters.map((filter) => (
        <button type="click" key={filter.id}>
          {" "}
          {filter.name}
        </button>
      ))}
    </section>
  );
};

export default Filters