import React from "react";
//import '../skills/skills.scss'
import { useEffect, useState } from "react";
import styled from "styled-components";
import { skills } from "../../../data/constants";
import { Tilt } from "react-tilt";
import AnimatedLetters from "../../AnimatedLetters";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import './skillst.scss'


const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 10px;
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

const SkillsContainer = styled.div`
  width: 100%;
  margin-left: 147px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 6rem;
  gap: 10px;
  justify-content: center;

@media (max-width: 500px) {
 margin-left: 15px;
  width: 100%;
 // border: solid pink;
}  

`;
const Skill = styled.div`
  width: 40%;
  max-width: 500px;
  //background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.46);
  box-shadow: rgba(23, 92, 230, 0.35) 0px 4px 24px;
  border-radius: 16px;
  padding: 0px 30px;
  margin-bottom: 20px;

@media (min-width: 1024px) and (max-width: 1068px) {
  width: 75%;   
  margin-left: -19.5%;
}

@media (min-width: 768px) and (max-width: 1023px) {
  width: 75%;   
  margin-left: -35.5%;
}

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
  margin-left: 14px;
   width: 70%;
    max-width: 380px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 10px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
`;





const Skillst = () => {
 
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
       setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])  
     return (
        <>
        <div data-aos="fade-up"
        data-aos-duration="2000"
        className="contanr">
            <Title>
        <h1 id="Skills">
                   <AnimatedLetters
                     letterClass={letterClass}
                     strArray={['S','k','i','l','l', 's ']}
                     idx={15}
                   />
                 </h1>
        </Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Languages,frameworks and technologies I have interacted with working on different
            projects.
        </Desc>
      
            
<SkillsContainer>
      <div className="skills-container">
      {skills.map((skill, index) => (
         <Tilt>
       
          <Skill key={`skill-${index}`}>
             <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, index_x) => (
                  <SkillItem key={`skill-x-${index_x}`}>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
        
          </Tilt>
         
        ))}
      </div>
     
       
         </SkillsContainer>
        </div>
     
        </>
     

)
}
export default Skillst;