import './contact.css';

const Contact = () => {
  return (
    <form
      className="contact"
      action="https://formsubmit.co/4eae59c256a34407dc3e0601b1ef1388"
      method="POST"
    >
      <input className="hon" type="text" name="_honey" />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value="https://portfolio-rnely.vercel.app/success"
      />
      <div className="container">
        <div className="card">
          <a className="cont">Contact Me</a>

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
  );
};

export default Contact;
