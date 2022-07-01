import { useLocation } from 'react-router-dom';

const TeamPage = () => {
  const { team } = useLocation().state;
  return (
    <section
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        marginTop: '3%',
        rowGap: '20px',
      }}
    >
      <p>{team.name}</p>
      <img src={team.logo} alt={team.name} />
      <p>{team.city}</p>
      <p style={{ width: '60%' }}>
        {team.details}
        <br />
        <br />
        <p>
          {' '}
          <span>Since</span>
          {' '}
          {team.founded}
        </p>
      </p>
    </section>
  );
};

export default TeamPage;
