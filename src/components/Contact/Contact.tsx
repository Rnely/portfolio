import './contact.css';

const Contact = () => {
  return (
    <form
      className="contact"
      action="https://formsubmit.co/4eae59c256a34407dc3e0601b1ef1388"
      method="POST"
    >
      <div className="container">
        <div className="card">
          <a className="singup">Contact Me</a>

          <div className="inputBox1">
            <input type="text" required />
            <span className="user">Email</span>
          </div>

          <div className="inputBox">
            <input type="text" required />
            <span>Name</span>
          </div>

          <div className="inputBox">
            <textarea required />
            <span>Message</span>
          </div>

          <button type="submit" className="enter">
            Enter
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
