import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeagesAsync } from "../redux/teams/teams_reducer";
import Filters from "./filters";
import NavBar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

const Home = () => {
  const allLeagues = useSelector((state) => state.leagues);

  const [teams, setTeams] = React.useState([]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchLeagesAsync);
    setTeams(!allLeagues ? [] : allLeagues[0]['teams']);
  }, [allLeagues]);

  return (
    <>
      <NavBar />
      {!allLeagues ? (
        <FontAwesomeIcon icon="fas fa-spinner fa-spin"></FontAwesomeIcon>
      ) : (
        <>
          <Filters filters={allLeagues}></Filters>
          <section className="teams">
            {teams.map((team) => (
              <pre>{JSON.stringify(team)}</pre>
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default Home;
