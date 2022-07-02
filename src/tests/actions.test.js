import { fetchLeaguesAction, FETCH_LEAGUES } from '../redux/teams/teams_reducer';

it('should return proper action object', () => {
  const leagues = ['premier league', 'la liga'];

  expect(fetchLeaguesAction(leagues)).toStrictEqual({ type: FETCH_LEAGUES, leagues });
});
