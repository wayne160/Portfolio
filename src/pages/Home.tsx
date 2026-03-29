import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? "nav-link active-link" : "nav-link";

  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top border-bottom">
      <div className="container">

        <Link className="navbar-brand fw-semibold fs-4" to="/">
          Wayne Zhang
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-4 text-center">

            <li className="nav-item">
              <Link className={isActive("/")} to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className={isActive("/experience")} to="/experience">
                Experience
              </Link>
            </li>

            <li className="nav-item">
              <Link className={isActive("/projects")} to="/projects">
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link className={isActive("/hobbies")} to="/hobbies">
                Hobbies
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Home;