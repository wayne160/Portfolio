const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand w-bold fs-1 ms-5" href="/">Wayne</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto gap-5 ms-5 fs-5">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/project">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/experience">Experience</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/hobbies">Hobbies</a>
                </li>
            </ul>
                <div className="d-flex me-5 fs-4">
                    <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;