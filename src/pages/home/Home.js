import React from 'react';

import NavBar from '../../components/NavBar';
import SubHeading from '../../components/SubHeading';
import ProjectCard from '../../components/ProjectCard';
import TeamMember from '../../components/TeamMember';

import './Home.css';

export default function Home() {
  return (
    <div className="Home">
      <NavBar />
      <br />
      {/*eslint-disable-next-line*/}
      <a id="Projects" href="">
        <br />
      </a>
      <SubHeading subheading="Our Applications" />

      <div className="wrapper">
        <div className="ProjectCardList">
          <div className="owl">
            <ProjectCard
              url="owl"
              projectName="Owl"
              link="https://owl.rctech.club/#/"
              name="Hall Booking Facility"
              about="Booking system to book various common areas within the hall"
            />
          </div>
          <div className="sls">
            <ProjectCard
              url="sls"
              projectName="SLS"
              link="https://sls.rctech.club/"
              name="Smart Laundry System"
              about="Booking system to book various common areas within the hall"
            />
          </div>
        </div>
      </div>
      <br />
      {/*eslint-disable-next-line*/}
      <a id="Team" href="" />
      <br />

      <SubHeading subheading="Our Team" />
      <div className="wrapper">
        <div className="TeamMemberList">
          <TeamMember
            url="utkarsh"
            userlink="https://www.utkarshgoel.dev/"
            name="Utkarsh Goel"
            job="Founder"
            about="Software engineer, Hobbyist in Electronics"
          />
          <TeamMember
            url="seanchok"
            userlink="https://seanchok.com/"
            name="Sean Chok"
            job="Developer | Maker"
            about="Software Developer"
          />
          <TeamMember
            url="gela"
            userlink="https://www.linkedin.com/in/park-seyoung/"
            name="Seyoung Park"
            job="Web Designer"
            about="Content Creator"
          />
          <TeamMember
            url="welvin"
            userlink="https://www.welvin21.com/"
            name="Welvin Bun"
            job="Developer"
            about="Software Developer"
          />
          <TeamMember
            url="janvi"
            userlink="https://janvisharma.github.io/"
            name="Janvi Sharma"
            job="Developer"
            about="Software Developer"
          />
          <TeamMember
            url="siddhant"
            userlink="https://www.linkedin.com/in/siddhant-bagri-588a90184/"
            name="Siddhant Bagri"
            job="Developer"
            about="Software Developer"
          />
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}
