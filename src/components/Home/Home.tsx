import './home.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div className={isMobile ? 'mobile' : 'home'}>
      <section className="text">
        <article>
          <span>H</span>
          <span>i</span>
          <span>,</span>
          <span>&nbsp;</span>
          <span></span>
          <span>I</span>
          <span>'</span>
          <span>m</span>
          <span>&nbsp;</span>
          {isMobile ? <br></br> : ''}
          <span>R</span>
          <span>i</span>
          <span>c</span>
          <span>a</span>
          <span>r</span>
          <span>d</span>
          <span>s</span>
          <p>
            I'm a 4th year programming student in a technical school from
            Latvia.
          </p>
          <p>
            To get to know me better go to <Link to="/about">About</Link>
          </p>
        </article>
      </section>
      <section className="img-container">
        <img
          className="img1"
          src="https://i.ibb.co/px9ZXbk/hero-base-dark2.png"
          alt="hero-base-dark"
        ></img>
        <div className="img-container2">
          <img
            className="img2"
            src="https://i.ibb.co/K0p6vhr/hero-big-widget-dark.png"
            alt="hero-big-widget-dark"
          ></img>
          <img
            className="img3"
            src="https://i.ibb.co/F0G3tDx/hero-heart-widget-dark.png"
            alt="hero-heart-widget-dark"
          ></img>
          <img
            className="img4"
            src="https://i.ibb.co/SXXY9NG/hero-notif-widget-dark.png"
            alt="hero-notif-widget-dark"
          ></img>
        </div>
      </section>
      <aside className="social">
        <section className="social-container">
          <Link to="https://www.instagram.com/ehricards/">
            <img
              src="https://cdn-user-icons.flaticon.com/97988/97988708/1680454556634.svg?token=exp=1680455456~hmac=6a2bf2cfed803176e330f4fa5a26714c"
              alt="Insagram"
              width="30px"
              height="30px"
            />
          </Link>
          <Link to="https://twitter.com/Ricardss7">
            <img
              src="https://cdn-user-icons.flaticon.com/97988/97988708/1680454548133.svg?token=exp=1680455447~hmac=2adb0b0e32a01ff69b947b4ff38a2818"
              alt="Twitter"
              width="30px"
              height="30px"
            />
          </Link>
          <Link to="https://github.com/Rnely">
            <img
              src="https://cdn-user-icons.flaticon.com/97988/97988708/1680454481972.svg?token=exp=1680455386~hmac=c7224bb425e1914c0ddf77534fba0702"
              alt="Github"
              width="30px"
              height="30px"
            />
          </Link>
        </section>
      </aside>
    </div>
  );
};
export default Home;
