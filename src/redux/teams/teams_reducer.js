import fetchLeagues from '../../services/leagues_service';

const FETCH_TEAMS = 'FETCH_TEAMS';

const fetchLeaguesAction = (leagues) => ({
  type: FETCH_TEAMS,
  leagues,
});
export const fetchLeagesAsync = async (dispatch) => {
  const leagues = await fetchLeagues();
  dispatch(fetchLeaguesAction(leagues));
};

export default function leaguesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_TEAMS:
      return action.leagues;
    default:
      return state;
  }
}
