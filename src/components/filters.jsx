const Filters = ({ filters, changeLeague }) => {
  return (
    <section
      className="filters"
      style={{ width: "100%", margin: "0 auto", display: "flex", justifyContent:"space-between" }}
    >
      {filters.map((filter) => (
        <button
          type="click"
          style={{
            flexGrow:"1",
            backgroundColor:"#212529",
            border:"1px solid #343a40",
            padding:"1% 0",
            color:"white"

          }}
          key={filter.id}
          onClick={() => changeLeague(filter.id)}
        >
          {" "}
          {filter.name}
        </button>
      ))}
    </section>
  );
};

export default Filters;
