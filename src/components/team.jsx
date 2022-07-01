import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Team = ({ team }) => {
  return (
    <Link
      to="/team"
      state={{ team }}
      style={{
        border: ".2px solid #4f5d75",
        width: "100%",
        textAlign: "center",
        boxShadow: "0 0 1px rgba(0, 0, 0, .1);",
        
      }}
    >
      <div>
        <FontAwesomeIcon
          icon={"fa-solid fa-right-from-bracket"}
        ></FontAwesomeIcon>
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
};

export default Team;
