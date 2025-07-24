import React from 'react'
import { Github, Mail, Linkedin, Twitter, ExternalLink, Globe } from 'lucide-react'
import './App.css'

const freelancers = [
  {
    id: 1,
    name: "Sayantan Bal",
    github: "sayantanbal",
    bio: "Full-stack developer with expertise in React, Node.js, and cloud technologies. Passionate about creating scalable web applications and modern user experiences.",
    specializations: ["React Development", "Node.js Backend", "AWS Cloud", "UI/UX Design"],
    email: "sayantan.bal.dev@gmail.com",
    linkedin: "https://linkedin.com/in/sayantanbal",
    twitter: "https://twitter.com/sayantanbal",
    portfolio: "https://sayantanbal.dev"
  },
  {
    id: 2,
    name: "Tuhin Ghosh",
    github: "TuhinCodeCraft",
    bio: "Creative frontend developer specializing in modern JavaScript frameworks and responsive design. Expert in crafting beautiful, interactive user interfaces.",
    specializations: ["Frontend Development", "JavaScript/TypeScript", "Mobile-First Design", "API Integration"],
    email: "tuhin.ghosh.dev@gmail.com",
    linkedin: "https://linkedin.com/in/tuhinghosh",
    twitter: "https://twitter.com/tuhincodecraft",
    portfolio: "https://tuhinghosh.dev"
  },
  {
    id: 3,
    name: "Pritam Mahata",
    github: "PritamMahata",
    bio: "Backend specialist and DevOps enthusiast with strong expertise in Python, databases, and deployment automation. Focused on building robust server architectures.",
    specializations: ["Python Development", "Database Design", "DevOps & CI/CD", "System Architecture"],
    email: "pritam.mahata.dev@gmail.com",
    linkedin: "https://linkedin.com/in/pritammahata",
    twitter: "https://twitter.com/pritammahata",
    portfolio: "https://pritammahata.dev"
  }
]

const ProfileCard = ({ freelancer }) => {
  const handleEmailClick = () => {
    window.open(`mailto:${freelancer.email}`, '_blank')
  }

  const handleSocialClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-image">
          <img 
            src={`https://github.com/${freelancer.github}.png`} 
            alt={`${freelancer.name}'s profile`}
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(freelancer.name)}&size=150&background=6366f1&color=fff`
            }}
          />
        </div>
        <h2 className="profile-name">{freelancer.name}</h2>
      </div>

      <div className="profile-content">
        <p className="profile-bio">{freelancer.bio}</p>
        
        <div className="specializations">
          <h3>What I Do</h3>
          <div className="specialization-tags">
            {freelancer.specializations.map((spec, index) => (
              <span key={index} className="specialization-tag">{spec}</span>
            ))}
          </div>
        </div>

        <div className="contact-section">
          <h3>Get In Touch</h3>
          <div className="contact-buttons">
            <button 
              className="contact-btn email-btn"
              onClick={handleEmailClick}
              title="Send Email"
            >
              <Mail size={18} />
              <span>Email</span>
            </button>
            <button 
              className="contact-btn social-btn"
              onClick={() => handleSocialClick(`https://github.com/${freelancer.github}`)}
              title="GitHub Profile"
            >
              <Github size={18} />
              <span>GitHub</span>
            </button>
            <button 
              className="contact-btn social-btn"
              onClick={() => handleSocialClick(freelancer.linkedin)}
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </button>
            <button 
              className="contact-btn social-btn"
              onClick={() => handleSocialClick(freelancer.twitter)}
              title="Twitter Profile"
            >
              <Twitter size={18} />
              <span>Twitter</span>
            </button>
          </div>
          
          <button 
            className="portfolio-btn"
            onClick={() => handleSocialClick(freelancer.portfolio)}
          >
            <Globe size={18} />
            <span>View Portfolio</span>
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Meet Us!</h1>
        <p>Our talented team of developers ready to bring your projects to life</p>
      </header>

      <main className="profiles-container">
        <div className="profiles-grid">
          {freelancers.map((freelancer) => (
            <ProfileCard key={freelancer.id} freelancer={freelancer} />
          ))}
        </div>
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Freelancer Team. Available for hire!</p>
      </footer>
    </div>
  )
}

export default App
