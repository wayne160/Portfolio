import Navbar from './Navbar';
import wayne from '../../public/wayne.jpg'

const Home = () => {
  return (
		<>
			<Navbar/>
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-4 text-center">
						<img className="w-75" src={wayne} alt="" />
					</div>
					<div className="col-md-8 container">
						<h1 className="fw-bold">Wei Cheng Zhang</h1>
						<p className="text-muted">Aspiring Software Engineer</p>

						<p className="fs-5">
							I am a Computer Science student from UNSW with experience in building full-stack web applications using React, TypeScript, and Python (Flask/FastAPI).
							I am proficient in Java and familiar with software design patterns, as well as working with Linux systems and debugging tools.
							I enjoy building practical applications and collaborating with others to solve real-world problems.
							I also have a strong interest in cybersecurity, with experience in vulnerability analysis and basic security testing. 
						</p>
						<p className="fs-5">
							Currently seeking graduate or internship roles in full-stack development or software testing.			
						</p>
					</div>
				</div>
			</div>
		</>
  );
};

export default Home;