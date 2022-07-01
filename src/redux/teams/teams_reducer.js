import fetchLeagues from '../../services/leagues_service';

const FETCH_LEAGUES = 'FETCH_LEAGUES';

const FETCH_LEAGUE_TEAMS = 'FETCH_LEAGUE_TEAMS';

const fetchLeaguesAction = (leagues) => ({
  type: FETCH_LEAGUES,
  leagues,
});

export const fetchLeagesAsync = async (dispatch, getState) => {
  const currentLeagues = getState().leagues;
  if (!currentLeagues || currentLeagues.length === 0) {
    const leagues = await fetchLeagues();
    dispatch(fetchLeaguesAction(leagues));
  }
};

export default function leaguesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_LEAGUES:
      return action.leagues;
    case FETCH_LEAGUE_TEAMS:
      return action.teams;
    default:
      return state;
  }
}
