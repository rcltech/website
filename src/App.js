import React from 'react';
import TeamMember from './components/TeamMember';
import Header from './components/Header'
import SubHeading from './components/SubHeading'

function App() {
  return (
  <div>
  <Header />
  
  <SubHeading subheading="Our Team" ></SubHeading>

  <TeamMember url="utkarsh" name="Utkarsh Gupta" job="Founder" about="Software engineer, Hobbyist in Electronics"></TeamMember>
  <TeamMember url="seanchok" name="Sean Chok" job="Developer | Maker" about="Web Developer"></TeamMember>
  <TeamMember url="gela" name="Seyoung Park" job="Designer" about="Communication design, media production"></TeamMember>
  <TeamMember url="welvin" name="Welvin Bun" job="Developer" about="Web Developer"></TeamMember>
  <TeamMember url="janvi" name="Janvi Sharma" job="Developer" about="Web Developer"></TeamMember>
  <TeamMember url="siddhant" name="Siddhant Bagri" job="Developer" about="Web Developer"></TeamMember>

  <SubHeading subheading="Our Projects" ></SubHeading>
  </div>
  )
}

export default App;
