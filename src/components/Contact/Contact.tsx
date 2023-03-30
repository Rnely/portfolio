import './contact.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Contact = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div className={isMobile ? 'mobile-contact' : 'contact'}>
      <div>
        <form
          action="https://formsubmit.co/4eae59c256a34407dc3e0601b1ef1388"
          method="POST"
        >
          <input className="hon" type="text" name="_honey" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://portfolio-rnely.vercel.app"
          />
          <div className="container">
            <div className={isMobile ? 'mobile-card' : 'card'}>
              <a className="cont">Leave a message</a>

              <div className="inputBox1">
                <input type="email" required name="Email" />
                <span className="user">E-mail</span>
              </div>

              <div className="inputBox">
                <input type="text" required name="Name" />
                <span>Name</span>
              </div>

              <div className="inputBox">
                <textarea required name="Message" />
                <span>Message</span>
              </div>

              <button type="submit" className="enter">
                Enter
              </button>
            </div>
          </div>
        </form>
        <div className="container">
          <div className={isMobile ? 'mobile-card' : 'card'}>
            <a className="cont">Contact Me</a>{' '}
            <div className="contactCard">
              <p>My Location</p>
              <p>Latvija, Tukums</p>
            </div>
            <div className="contactCard">
              <p>E-mail</p>
              <p>rsinkjavics@gmail.com</p>
            </div>
            <div className="contactCard">
              <p>My Number</p>
              <p>+371 28678873</p>
            </div>
            <div className="contactCard">
              <p>Languages</p>
              <p>English, Latvian</p>
            </div>
            <div className="socials">
              <Link to="https://github.com/Rnely">
                <img
                  className="pic"
                  src="https://cdn-icons-png.flaticon.com/512/25/25657.png"
                  alt="Github"
                  width="50px"
                  height="50px"
                />
              </Link>
              <Link to="https://www.instagram.com/ehricards/">
                <img
                  className="pic"
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
                  alt="Instagram"
                  width="50px"
                  height="50px"
                />
              </Link>
              <Link to="https://twitter.com/Ricardss7">
                <img
                  className="pic"
                  src="https://cdn-icons-png.flaticon.com/512/25/25347.png"
                  alt="Github"
                  width="50px"
                  height="50px"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
