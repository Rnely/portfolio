import './about.css';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div className={isMobile ? 'mobile-about' : 'about'}>
      <h1>About me</h1>
      <div className="info">
        <div className="aboutMe">
          <h2>I'm Ricards, a student from Latvia.</h2>
          <p>
            Hi there! I'm a student from Latvia who is currently learning
            programming. I've been learning it for 4 years. My strongest side
            would be web development (React, JavaScript, Typescript, HTML, CSS)
            but I have also dabbled in other languages in these years like
            Python, C++, C# and Java. Aside from programming I've also tried my
            hand with Photoshop, Canva, Microsoft Office, SQLite, as well as a
            few years ago I've also done some video editing using Sony Vegas.
          </p>
        </div>
        <div className="ehh"></div>
        <aside className="current">
          <h2>What I'm learning</h2>
          <p>
            Currently I've been focusing on learning Web development, I started
            out with JS but now I'm trying out TS.
          </p>
          <h2>My goal</h2>
          <p>
            My goal is to expand my knowledge and improve my ability to work
            with different coding languages and see which one I enjoy the most.
          </p>
        </aside>
      </div>
    </div>
  );
};
export default About;
