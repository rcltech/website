import NavBar from '../components/NavBar';
import SubHeading from '../components/SubHeading';
import ProjectCard from '../components/ProjectCard';
import TeamMember from '../components/TeamMember';

import styles from '../styles/Home.module.css';

const projects = [
  {
    url: 'owl',
    projectName: 'Owl',
    link: 'https://owl.rctech.club/#/',
    name: 'Hall Booking Facility',
    about: 'Booking system to book various common areas within the hall',
  },
  {
    url: 'sls',
    projectName: 'SLS',
    link: 'https://sls.rctech.club/',
    name: 'Smart Laundry System',
    about: 'Booking system to book various common areas within the hall',
  },
];

const members = [
  {
    url: 'utkarsh',
    link: 'https://www.utkarshgoel.dev/',
    name: 'Utkarsh Goel',
    job: 'Founder',
    about: 'Software engineer, Hobbyist in Electronics',
  },
  {
    url: 'seanchok',
    link: 'https://seanchok.com/',
    name: 'Sean Chok',
    job: 'Developer | Maker',
    about: 'Software Developer',
  },
  {
    url: 'gela',
    link: 'https://www.linkedin.com/in/park-seyoung/',
    name: 'Seyoung Park',
    job: 'Web Designer',
    about: 'Content Creator',
  },
  {
    url: 'welvin',
    link: 'https://www.welvin21.com/',
    name: 'Welvin Bun',
    job: 'Developer',
    about: 'Software Developer',
  },
  {
    url: 'janvi',
    link: 'https://janvisharma.github.io/',
    name: 'Janvi Sharma',
    job: 'Developer',
    about: 'Software Developer',
  },
  {
    url: 'siddhant',
    link: 'https://www.linkedin.com/in/siddhant-bagri-588a90184/',
    name: 'Siddhant Bagri',
    job: 'Developer',
    about: 'Software Developer',
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <br />

      <a id="Projects" href="" />

      <SubHeading subheading="Our Applications" />

      <div className={styles.wrapper}>
        <div className={styles.ProjectCardList}>
          {projects.map(({ url, projectName, link, name, about }) => (
            <div key={url} className={styles.ProjectCardWrapper}>
              <ProjectCard
                url={url}
                projectName={projectName}
                link={link}
                name={name}
                about={about}
              />
            </div>
          ))}
        </div>
      </div>

      <br />

      <a id="Team" href="" />
      <br />

      <SubHeading subheading="Our Team" />
      <div className={styles.wrapper}>
        <div className={styles.TeamMemberList}>
          {members.map(({ url, link, name, job, about }) => (
            <TeamMember
              key={url}
              url={url}
              link={link}
              name={name}
              job={job}
              about={about}
            />
          ))}
        </div>
      </div>

      <br />
    </div>
  );
}
