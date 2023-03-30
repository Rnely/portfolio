import './home.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div className={isMobile ? 'mobile' : 'home'}>
      <div className="text">
        <article>
          <h2>Hi, I'm Ricards</h2>
          <p>I'm a student learning programming for the past 4 years.</p>
          <p>
            To get to know me better go to <Link to="/about">About</Link>
          </p>
        </article>
      </div>
    </div>
  );
};
export default Home;
