import './home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="text">
        <article>
          <h2>Hi, I'm Ricards</h2>
          <p>I'm learning as a programmer for 4 years. </p>
        </article>
      </div>
      <div className="picture">
        <aside>
          <img
            className="pic"
            src="https://i.ibb.co/99fP98G/mypicture.png"
            alt="me"
          />
        </aside>
      </div>
    </div>
  );
};
export default Home;
