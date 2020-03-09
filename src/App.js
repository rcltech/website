import React from 'react';
import TeamMember from './components/TeamMember';
import Header from './components/Header'
import SubHeading from './components/SubHeading'
import ProjectCard from './components/ProjectCard';
import NavBar from './components/NavBar';


function App() {
  return (
  <div>
  <NavBar/>
  <Header />
  <a id="Team"><br/></a>
  <SubHeading subheading="Our Team" ></SubHeading>

  <TeamMember url="utkarsh" name="Utkarsh Goel" job="Founder" about="Software engineer, Hobbyist in Electronics"></TeamMember>
  <TeamMember url="seanchok" name="Sean Chok" job="Developer | Maker" about="Web Developer"></TeamMember>
  <TeamMember url="gela" name="Seyoung Park" job="Designer" about="Communication design, media production"></TeamMember>
  <TeamMember url="welvin" name="Welvin Bun" job="Developer" about="Web Developer"></TeamMember>
  <TeamMember url="janvi" name="Janvi Sharma" job="Developer" about="Web Developer"></TeamMember>
  <TeamMember url="siddhant" name="Siddhant Bagri" job="Developer" about="Web Developer"></TeamMember>
  
  <SubHeading subheading="Our Projects" ></SubHeading>

  
  <ProjectCard url="owl" projectName="Owl" link="https://owl.rctech.club/#/" name="Hall Booking Facility" about="Booking system to book various common areas within the hall">
  </ProjectCard>

  <ProjectCard url="sls" projectName="SLS" link="https://sls.rctech.club/" name="Smart Laundry System" about="Booking system to book various common areas within the hall">
  </ProjectCard>
  <a id="Projects"><br/></a>
  <br/><br/><br/>
  </div>
  )
}

export default App;
