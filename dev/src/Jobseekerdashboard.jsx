import React, { useState } from 'react';
import './jobseekerdashboard.css';
const Apply = () => {
  alert("Your Application Has Been Submitted ");
};

const defaultJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Technical Hunt',
    location: 'Remote',
    description: 'Build and maintain user interfaces. Collaborate with backend teams, ensure the user experience is seamless, and optimize for performance. Work on React, Redux, and other modern frontend technologies.'
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'Data Systems',
    location: 'New York, NY',
    description: 'Develop and optimize backend services. Work with databases, APIs, and microservices to ensure smooth communication between the server and client side. Technologies used include Node.js, Python, and SQL.'
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Creative Labs',
    location: 'Bangalore, India',
    description: 'Design intuitive and attractive user experiences. Create wireframes, prototypes, and high-fidelity designs. Collaborate closely with developers and stakeholders to deliver pixel-perfect designs for web and mobile platforms.'
  },
  {
    id: 4,
    title: 'Trainee Engineer',
    company: 'Engineers Hub',
    location: 'UAE,Dubai',
    description: 'Design intuitive and attractive user experiences. Create wireframes, prototypes, and high-fidelity designs. Collaborate closely with developers and stakeholders to deliver pixel-perfect designs for web and mobile platforms.'
  },
  {
    id: 5,
    title: 'Software engineer',
    company: 'Talent People',
    location: 'Mumbai, India',
    description:"Develops, maintains, and improves software applications, often working with programming languages like Java, Python, or C++"
  },
  {
    id: 6,
    title: 'Business analyst',
    company: 'Tata Conselting Services',
    location: 'Coimbatore, India',
    description:"Identifies business needs and develops strategies to improve processes, often working with data and technology."

  },
  {
    id: 7,
    title: 'Management Consultant',
    company: 'ZOHO',
    location: 'Chennai, India',
    description:"Provides expert advice and solutions to businesses, helping them improve performance and achieve their goals. "

  },
  {
    id: 8,
    title: 'Manufacturing Worker',
    company: 'Kone Elevaters',
    location: 'Hyderbad, India',
    description:"Operates machinery, assembles products, and performs other tasks in manufacturing plants. "
  },
  {
    id: 9,
    title: 'Healthcare',
    company: 'CRI healthcare',
    location: 'Bangalore, India',
    description:"The healthcare industry, including hospitals, clinics, and pharmaceutical companies, is also a significant employer."
  }
];

const JobCard = ({ job, onToggleDescription, isDescriptionVisible }) => (
  
  <div className="job-card">
    <h2 className="job-title">{job.title}</h2>
    <p className="job-meta">{job.company} - {job.location}</p>
    <p className="job-description">
      {isDescriptionVisible ? job.description : job.description.substring(0, 100) + '...'}
    </p>
    <div className="job-actions">
      <button onClick={Apply}className="apply-button" aria-label="Apply for job">Apply</button>
      <button 
        className="view-button" 
        aria-label="View job details"
        onClick={onToggleDescription}
      >
        
        {isDescriptionVisible ? 'Show Less' : 'View More'}
      </button>
    </div>
  </div>
  
);

export default function JobPortal() {
  const [search, setSearch] = useState('');
  const [expandedJobId, setExpandedJobId] = useState(null);
  

  const filteredJobs = defaultJobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggleDescription = (jobId) => {
    setExpandedJobId(prevId => (prevId === jobId ? null : jobId));
  };

  return (
    <div className="job-portal-container">
      <h1 className="portal-title">Find your dream job</h1>
      <input
        type="text"
        placeholder="Search by job title or company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="job-list">
        {filteredJobs.map(job => (
          <JobCard 
            key={job.id} 
            job={job} 
            onToggleDescription={() => handleToggleDescription(job.id)} 
            isDescriptionVisible={expandedJobId === job.id} 
          />
        ))}
      </div>
      {filteredJobs.length === 0 && <p className="no-results">No jobs found.</p>}
    </div>
  );
}