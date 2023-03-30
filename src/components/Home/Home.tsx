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
          <p>
            I'm a 4th year programming student in a technical school from
            Latvia.
          </p>
          <p>
            To get to know me better go to <Link to="/about">About</Link>
          </p>
        </article>
      </div>
    </div>
  );
};
export default Home;
