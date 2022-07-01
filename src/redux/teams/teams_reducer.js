import fetchLeagues from '../../services/leagues_service';

export const FETCH_LEAGUES = 'FETCH_LEAGUES';

export const fetchLeaguesAction = (leagues) => ({
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
    default:
      return state;
  }
}
