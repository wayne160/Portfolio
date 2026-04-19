import { useState } from 'react';
import Navbar from './Navbar';
import GD from '../../public/greendynamics.jpg';
import JBA from '../../public/jba.png';
import TK from '../../public/tkmaxx.png';
import SH from '../../public/sushihub.jpg';

const Experience = () => {
  const [showMore, setShowMore] = useState<Record<number, boolean>>({});

  const interns = [
    {
      title: 'Software Engineer',
      company: 'Green Dynamics',
      date: 'Apr 2024 - Nov 2024',
      companyDescription: 'AI platform developing domain-specific chatbots for material science research and report analysis.',
      roles: [
        'Collaboratively developed and integrated Green Dynamics proprietary Darwin model into the user interface for the Byte Science website. https://byte-science.com/',
        'Solely responsible for developing and maintaining the frontend implementation of the website with the use of Reactjs framework with the help of Ant Design and Tailwind framework to improve user interface.',
        'Collaborated with the backend team to integrate APIs and ensured seamless data flow between frontend and backend systems',
        'Successfully implemented functions such as page navigation, password modification and role-based access control'
      ],
      logo: GD,
      skills: ['Reactjs', 'Javascript', 'Tailwind CSS', 'Ant Design', 'API Integration']
    },
  ]

  const experiences = [
    {
      title: 'Basketball Coach',
      company: 'Junior Basketball Academy',
      date: 'July 2024 - Present',
      companyDescription: 'A school holiday basketball camp association providing drills and games for junior atheletes.',
      roles: [
        'Planned and delivered daily basketball training sessions for a group up to twenty primary school children, mainly focused on fundamental skills like shooting, dribbling and passing.',
        'Organised and lead engaging drills and activities tailored to varying skills level.',
        'Maintained safety and enthusiasm in a large group setting, ensuring all players are actively participating.',
        'Achieved constantly positive feedback from parents and coaching coordinators for creating fun and engaging sessions.'
      ],
      logo: JBA,
      skills: ['Team Leadership', 'Public Speaking', 'Event Planning', 'Mentoring', 'Group Facilitation', 'Group Supervision']
    },
    {
      title: 'Retail Team Member',
      company: 'TK MAXX',
      date: 'Sep 2025 - Jan 2026',
      companyDescription: 'Global off-price retailer offering branded apparel and home goods in a fast-paced customer-focused environment.',
      roles: [
        'Delivered friendly, efficient customer service by assisting shoppers, managing checkouts, and maintaining a welcoming store environment.',
        'Supported daily operations including stock replenishment, merchandise display, and accurate processing of sales and refunds.',
        'Collaborated with team members to meet sales goals and uphold TK Maxx standards for store presentation, safety, and loss prevention.',
      ],
      logo: TK,
      skills: ['Team Collaboration', 'Customer Service', 'Visual Merchandising', 'Inventory Managment']
    },
    {
      title: 'Sushi Store Team Member',
      company: 'Sushi Hub',
      date: 'May 2021 - Jan 2024',
      companyDescription: 'Fast-casual sushi chain specialising in fresh, takeaway Japanese cuisine in a fast-paced environment.',
      roles: [
        'Preparing sushi ingredients under fast-paced environment.',
        'Provided excellent customer service by interacting with patrons, taking orders, and offering recommendations on menu items.',
        'Professionally answered phone calls, effectively communicating with customers to take orders, resolve inquiries and ensuring clarity and customer satisfaction.',
      ],
      logo: SH,
      skills: ['Cash Handling', 'Team Collaboration', 'Customer Service', 'Time Management']
    },
  ]

  const skillColours = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-dark'];

  const toggleShowMore = (index: number) => {
    setShowMore((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <Navbar />
      <div className="container py-4">
        <h1 className="text-center">Internships</h1>
        {interns.map((intern, index) => (
            <div
              className="card mx-auto shadow rounded-4 border-0 mt-3"
              style={{ maxWidth: '900px' }}
            >
              <div className="card-body p-4">
                <h3 className="card-title mb-2">{intern.title}</h3>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="card-subtitle mb-0 text-body-secondary">
                    {intern.company}
                  </h5>
                  <span className="text-muted">{intern.date}</span>
                </div>

                <div className="row align-items-start g-4">
                  <div className="col-md-9">
                    <div className="mb-3">
                      <h6 className="fw-semibold mb-1">Company</h6>
                      <p className="text-muted mb-0">
                        {intern.companyDescription}
                      </p>
                    </div>

                    <div className="mb-3">
                      <h6 className="fw-semibold mb-1">My Role</h6>
                      <ul className="mb-2 ps-3">
                        <li>
                          {intern.roles[0]}
                        </li>

                        {showMore[index] && (
                          <>
                            {
                              intern.roles.slice(1).map((role, index) => (
                                <li key={index}>{role}</li>
                              ))
                            }
                            
                          </>
                        )}
                      </ul>

                      <button
                        type="button"
                        className="btn btn-link p-0 text-decoration-none"
                        onClick={() => toggleShowMore(index)}
                      >
                        {showMore[index] ? 'See less ↑' : 'See more ↓'}
                      </button>
                    </div>

                    <div>
                      <h6 className="fw-semibold mb-2">Skills</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {
                          intern.skills.map((skill, index) => (
                            <span key={index} className={`badge ${skillColours[index%7]}`}>{skill}</span>
                          ))
                        }
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 text-md-end text-center">
                    <img
                      src={intern.logo}
                      alt="Green Dynamics"
                      className="img-fluid rounded-3"
                      style={{ maxHeight: '120px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        <h1 className="text-center mt-5">Other Experience</h1>
        {experiences.map((experience, index) => (
            <div
              className="card mx-auto shadow rounded-4 border-0 mt-3"
              style={{ maxWidth: '900px' }}
            >
              <div className="card-body p-4">
                <h3 className="card-title mb-2">{experience.title}</h3>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="card-subtitle mb-0 text-body-secondary">
                    {experience.company}
                  </h5>
                  <span className="text-muted">{experience.date}</span>
                </div>

                <div className="row align-items-start g-4">
                  <div className="col-md-9">
                    <div className="mb-3">
                      <h6 className="fw-semibold mb-1">Company</h6>
                      <p className="text-muted mb-0">
                        {experience.companyDescription}
                      </p>
                    </div>

                    <div className="mb-3">
                      <h6 className="fw-semibold mb-1">My Role</h6>
                      <ul className="mb-2 ps-3">
                        <li>
                          {experience.roles[0]}
                        </li>

                        {showMore[index] && (
                          <>
                            {
                              experience.roles.slice(1).map((role, index) => (
                                <li key={index}>{role}</li>
                              ))
                            }
                            
                          </>
                        )}
                      </ul>

                      <button
                        type="button"
                        className="btn btn-link p-0 text-decoration-none"
                        onClick={() => toggleShowMore(index)}
                      >
                        {showMore[index] ? 'See less ↑' : 'See more ↓'}
                      </button>
                    </div>

                    <div>
                      <h6 className="fw-semibold mb-2">Skills</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {
                          experience.skills.map((skill, index) => (
                            <span key={index} className={`badge ${skillColours[index%7]}`}>{skill}</span>
                          ))
                        }
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 text-md-end text-center">
                    <img
                      src={experience.logo}
                      alt="Green Dynamics"
                      className="img-fluid rounded-3"
                      style={{ maxHeight: '120px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Experience;