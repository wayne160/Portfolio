import Navbar from './Navbar';
import h1 from '/h1.jpg';
import h2 from '/h2.jpg';
import h3 from '/h3.png';
import h4 from '/h4.jpg';
import h5 from '/h5.jpg';
import h6 from '/h6.jpg';
import h7 from '/h7.jpg';
import h8 from '/h8.jpg';
import h9 from '/h9.jpg';
import h10 from '/h10.jpg';

const Hobbies = () => {
  const renderTextWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer" style={{ color: '#0d6efd' }}>
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const hobbies = [
    {
      image: h1,
      description: 'Started playing basketball at the age of 8',
      year: 2010
    },
    {
      image: h2,
      description: 'Started playing pool at the age of 11',
      year: 2013
    },
    {
      image: h3,
      description: 'Joined competitive basketball club(Southwest Hornets).',
      year: 2018
    },
    {
      image: h4,
      description: 'Won my first championship as a team at U19 D4 league.',
      year: 2019
    },
    {
      image: h5,
      description: 'Representing UNSW in Cuesoc Inter-uni competitions at first time',
      year: 2022
    },
    {
      image: h6,
      description: 'Won my first pool championship as a team in Cuesoc 8-ball league.',
      year: 2023
    },
    {
      image: h7,
      description: 'Won 8-ball scotch-double with my teammate XJ',
      year: 2023
    },
    {
      image: h8,
      description: 'Won 9-ball championship, video available https://www.youtube.com/live/y3VD-hSMGAE?si=a5oH-g-GC44KkSYY',
      year: 2024
    },
    {
      image: h9,
      description: 'Won $250 as the 1st place in 9-ball championship hosted by Celestial Billards',
      year: 2024
    },
    {
      image: h10,
      description: 'Won $400 by beating my brother in Cuesoc Invitational 10 ball',
      year: 2025
    }
  ]

  return (
    <>
      <Navbar />

      <div className="position-relative py-5">
        {/* vertical line */}
        <div
          className="position-absolute top-0 start-50 translate-middle-x bg-secondary"
          style={{
            width: '4px',
            height: '100%',
            zIndex: 0,
          }}
        />
        {
          hobbies.map((hobby, index) => (
            <div className="d-flex justify-content-between align-items-center" style={{ marginTop: index > 0 ? '0rem' : '0' }}>
              {
                index % 2 == 0 ? (
                  <>
                    <div style={{
                      width: '45%',
                      textAlign: 'right',
                    }}>
                      <img src={hobby.image} style={{ width: '25vw' }} />
                      <p className='mt-2'>
                        {renderTextWithLinks(hobby.description)}
                      </p>
                    </div>
                    <h2 className='bg-white' style={{ zIndex: 1 }}>{hobby.year}</h2>
                    <div style={{ width: '45%' }} />
                  </>
                ) : (
                  <>
                    <div style={{ width: '45%' }} />
                    <h2 className='bg-white' style={{ zIndex: 1 }}>{hobby.year}</h2>
                    <div style={{ width: '45%' }}>
                      <img src={hobby.image} style={{ width: '25vw' }} />
                      <p className='mt-2'>
                        {renderTextWithLinks(hobby.description)}
                      </p>
                    </div>
                  </>
                )
              }
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Hobbies;