import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { projects } from '../../../data/constants';
import { blogs } from '../../../data/constants';
import ProjectCard from '../../Card/ProjectCard';

//import './myprojects.scss'
//  import AnimatedLetters from '../../AnimatedLetters';
import AnimatedLetters from '../../AnimatedLetters';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import './projects.scss'



const Container = styled.div`
margin-top: 9px;
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
padding: 0 16px;
align-items: center;
border: solid red;

// @media (max-width: 768px) {
//  margin-top: 6p
// }
`;


const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    margin-left: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
display: flex;
border: 1.5px solid ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.primary};
font-size: 16px;
border-radius: 12px;
font-weight 500;
margin: 22px 0;
@media (max-width: 768px){
    font-size: 12px;
}
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
    active &&
    `
  background:  ${theme.primary + 20};
  `}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  //border: solid red;
  height: fit-content;
 // z-index; 2;
  overflow: auto;
  margin-bottom: 126px;

  @media and (max-width: 500px){
      margin-bottom: 50px;
  } 

`;

const Portfolio = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all"); 
  const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
       setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

  return (
    <div data-aos="fade-up"
    data-aos-duration="2000">
       <section className='portfolio section' id='portfolio'>
    <Container>
      <Wrapper>
      <h1>
                   {/* <AnimatedLetters
                     letterClass={letterClass}
                     strArray={['C','o','n','t','a', 'c ','t','', 'm','e']}
                     idx={15}
                   /> */}
                 </h1>
      <Title>
      <h1>
                   <AnimatedLetters
                     letterClass={letterClass}
                     strArray={['P','r','o','j','e', 'c ','t','s','P','r','o','j','e', 'c ','t','s' ]}
                     idx={15}
                   />
                 </h1>

      </Title>
      <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
        <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            Projects
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "blogs"}
            onClick={() => setToggle("blogs")}
          >
            Blogs
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            ALL
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}
          >
            WEB APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "servers&scripts"}
            onClick={() => setToggle("servers&scripts")}
          >
            Application Servers & Scripts
          </ToggleButton>
            

          </ToggleButtonGroup>
          <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
              {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
              {toggle === "blogs" &&
            blogs.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
    </section>

      </div>
     );
}

export default Portfolio;