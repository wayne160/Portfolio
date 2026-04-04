import Navbar from './Navbar';
import unsecureweb from '../../public/unsecureweb.png';
import spottheball from '../../public/spottheball.png';
import succulents from '../../public/succulents.png';

const projects = [
  {
    title: "Unsecure Web",
    image: unsecureweb,
    description:
      "A deliberately vulnerable chat application designed to let you explore exploit different cyber attacks such as SQL injection, weak authentication, and man-in-the-middle attacks in a controlled environment",
    link: "https://unsecure-web.onrender.com",
    padding: "py-5"
  },
  {
    title: "Spot the Ball",
    image: spottheball,
    description:
      "A web-based game which allows user to guess the location of the hidden ball in an image with a chance to win a price.",
    link: "https://spot-the-ball-frontend.onrender.com",
    padding: "py-5"
  },
  {
    title: "Sunny's Succulents",
    image: succulents,
    description:
      "A template website platform for selling succulents for family business.",
    link: "https://sunny-rare-succulent.onrender.com",
    padding: "py-3"
  }
];

const Project = () => {
  return (
    <>
      {/* <Navbar />
      <div className="container py-5">
        <div className="row">
            {projects.map((project, index) => (
                <div className="col-md-6 d-flex py-3" key={index}>
                    <div className="card m-auto w-100 h-100" style={{ maxWidth: "30rem" }}>
                        <div className="m-5 d-flex flex-column h-100">
                        
                            <img
                                src={project.image}
                                className="card-img-top"
                                alt={project.title}
                            />

                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{project.title}</h5>

                                <p className="card-text">
                                {project.description}
                                </p>

                                <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-auto"
                                >
                                Visit
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div> */}
      hello
    </>
  );
};

export default Project;