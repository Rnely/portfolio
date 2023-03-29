const Projects = () => {
  return (
    <div className="projects">
      <div className="proj">
        <img
          className="pic"
          src="https://i.ibb.co/cr93FCT/cookbookapp.png"
          alt="cookbookapp"
          width="450px"
          height="230px"
        />
        <h3>CookBook Project</h3>
        <p>
          This is a CookBook website project that I made with react, JS, CSS,
          HTML. There are 3 branches on the repository page, a master, redux
          toolkit and restAPI. In the master branch I used context and there is
          a JSON database used to store and fetch the recipes, for the fetching
          I used a fetch API. In the redux toolkit branch I simply implemented
          redux toolkit in context place. In the restAPI branch I made the
          CookBook a full-stack project based on the mern stack with redux
          toolkit, so it doesn't use a JSON database anymore but it uses
          mongooseDB.
        </p>
        <p>
          I'm also making a new version to the CookBook project using TS instead
          of JS and adding a lot more functionality. Since it's still in
          development it can be viewed on my github.
        </p>
      </div>
      <div className="ehhh"></div>
      <div className="proj">
        <img
          src="../src/components/Expiriences/todoapp.png"
          alt="Todo App"
          width="310px"
          height="230px"
        />
        <h3>Todo Project</h3>
        <p>
          This is a CRUD Todo website project I made using react, JS, CSS, HTML.
          The todo's are stored in localstorage. It has create, read, update and
          delete functionality.
        </p>
      </div>
    </div>
  );
};
export default Projects;
