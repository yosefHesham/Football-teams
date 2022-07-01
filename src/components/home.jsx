import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeagesAsync } from "../redux/teams/teams_reducer";
import Filters from "./filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Team from "./team";

const Home = () => {
  const allLeagues = useSelector((state) => state.leagues);

  const [league, setLeague] = React.useState(undefined);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchLeagesAsync);
    setLeague(!allLeagues ? undefined : allLeagues[0]);
  }, [allLeagues]);

  const changeLeague = (id) => {
    const league = allLeagues.filter((league) => league.id == id)[0];
    console.log(league);
    setLeague(league);
  };
  console.log(league);
  return (
    <>
      {!league || league?.teams.length == 0 ? (
        <FontAwesomeIcon icon="fas fa-spinner fa-spin"></FontAwesomeIcon>
      ) : (
        <>
          <Filters filters={allLeagues} changeLeague={changeLeague}></Filters>
          <section
            className="selectedLeague"
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#4f5d75",
              columnGap: "15px",
              alignItems: "center",
              padding: "20px 0",
            }}
          >
            <img
              src={league.logo}
              alt={league.name}
              style={{ backgroundColor: "lightgrey", borderRadius: "8px" }}
            />
            <article>
              <p style={{ color: "white", fontWeight: "700" }}>{league.name}</p>
              <br></br>
              <p style={{ color: "white", fontWeight: "300" }}>
                {league.country}
              </p>
            </article>
          </section>
          <section
            className="teams"
            style={{
              display: "grid",
              justifyContent:"center",
              justifyItems:"center",
              marginTop:"25px",
              gridTemplateColumns: "repeat(auto-fill,minmax(30%,2fr))",
            }}
          >
            {league.teams.map((team) => (
              <Team key={team.id} team={team}></Team>
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default Home;
