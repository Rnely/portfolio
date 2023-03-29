import './expiriences.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import JobExp from './JobExp';
import Projects from './Projects';

const Experiences = () => {
  const [display, setDisplay] = useState('');
  const [but, setBut] = useState('Projects');

  const handleJobClicks = () => {
    if (display === 'projects') {
      setDisplay('');
      setBut('Projects');
    } else {
      setDisplay('projects');
      setBut('Job Experiences');
    }
  };
  const handleJobClicks2 = () => {
    if (display === 'projects') {
      setDisplay('');
    } else {
      setDisplay('projects');
    }
  };

  return (
    <div className="exp">
      <div>
        <div className="but">
          <button onClick={() => handleJobClicks()}>{but}</button>
        </div>
      </div>
      <div>
        {display ? (
          <div>
            <h2>
              You can view all of my projects on my Github profile{' '}
              <Link to="https://github.com/Rnely">Rnely</Link>
            </h2>
            <Projects />
          </div>
        ) : (
          <JobExp />
        )}
      </div>
    </div>
  );
};
export default Experiences;
