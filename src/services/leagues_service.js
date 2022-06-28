const url = 'https://football-apis.herokuapp.com/api/v1/leagues';

const fetchLeagues = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchLeagues;
