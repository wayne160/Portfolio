import Navbar from './Navbar';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "70vh" }}
      >
        <div className="row text-center w-75">

          {/* Email */}
          <div className="col-md-4 mb-4">
            <div className="p-4 shadow h-100 contact-card">
              <SiGmail className="display-1 mb-3" color="red" />
              <h4>Email</h4>
              <p
                className="text-decoration-none text-dark"
              >
                wz26099@gmail.com
              </p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="col-md-4 mb-4">
            <div className="p-4 shadow rounded-4 h-100 contact-card">
              <FaLinkedin className="display-1 mb-3" color="#0A66C2" />
              <h4>LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/wei-cheng-zhang/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-dark"
              >
                View Profile
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="col-md-4 mb-4">
            <div className="p-4 shadow rounded-4 h-100 contact-card">
              <FaGithub className="display-1 mb-3" />
              <h4>GitHub</h4>
              <a
                href="https://github.com/wayne160"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-dark"
              >
                View Projects
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;