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
margin-top: 46px;
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
padding: 0 16px;
align-items: center;
//border: solid red;
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
  font-size: 56px;
  font-family:  'Inter Tight', sans-serif;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  margin-left:-2rem;
 // border: solid red 3px;
 // max-width: 500px;
 
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 1368px) {
  display: flex wrap;
    margin-top: 12px;
   // margin-left: 39rem;
    
    font-size: 56px;
  }
    @media (max-width: 768px) {
    margin-left: 0rem;
}

 @media (max-width: 368px) {
    margin-left: -1rem;
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
  gap: 30px;
  flex-wrap: wrap;
  //border: solid red;
  width: 86vw;
  height: fit-content;
 // z-index; 2;
  overflow: auto;
  margin-bottom: 126px;

  @media and (max-width: 500px){
      margin-bottom: 50px;
  } 

`;

const Blogs = ({ openModal, setOpenModal }) => {
  const [works, setWorks] = useState("blogs"); 
  const [toggle, setToggle] = useState("all"); 
  const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
       setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

  return (
    <div id='Blogs' data-aos="fade-up"
    data-aos-duration="2000">
       <section className='portfolio section' id='portfolio'>
    <Container>
      <Wrapper>
    
      <Title>
     
                   <AnimatedLetters
                     letterClass={letterClass}
                     strArray={['B','l','o','g','s' ]}
                     idx={15}
                   />
              

      </Title>
      <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          I write on a wide range of technologies, projects and topics. Here are a few of my articles.
        </Desc>
        <ToggleButtonGroup>
       
          <ToggleButton
            active={works === "blogs"}
            onClick={() => setWorks("blogs")}
          >
            Blogs
          </ToggleButton>
        </ToggleButtonGroup>
    
        
        
   
           {works === "blogs" &&
              <CardContainer>
           {blogs.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
              </CardContainer>
}
         
           
      </Wrapper>
    </Container>
    </section>

      </div>
     );
}

export default Blogs;