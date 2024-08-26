import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { skills } from "../../../data/constants";
import { Tilt } from "react-tilt";
import AnimatedLetters from "../../AnimatedLetters";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
import './skillst.scss'




const Title = styled.div`
  font-size: 56px;
  font-family:  'Inter Tight', sans-serif;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left:0rem;
 // border: solid red 3px;
 // max-width: 500px;
 
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 1368px) {
  display: flex wrap;
    margin-top: 18px;
   // margin-left: 39rem;
    
    font-size: 56px;
  }
    @media (max-width: 768px) {
    margin-left: 0rem;
}
    @media (min-width: 700px) and (max-width:800px) and (max-height: 620px) and (min-height: 540px) {
       margin-left: 10rem;


    }
    @media (min-width: 500px) and (max-width:600px) and (max-height: 720px) and (min-height: 541px) {
    margin-left: 13rem;
  
}

 @media (max-width: 368px) {
    margin-left: -1rem;
}
`;


const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 700px) and (max-width:800px) and (max-height: 620px) and (min-height: 540px) {
  margin-left:15%
  }

  @media (min-width: 500px) and (max-width:600px) and (max-height: 720px) and (min-height: 541px) {
 margin-left:22%
   
  }
  `;


const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjust minmax values as needed */
  grid-gap: 20px; /* Space between grid items */
  justify-content: center;
  margin-top: 6rem;
  width: 95%; /* Ensure it takes full width */
  //border: solid red 3px;
  margin-left: 0%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Smaller screens */
  }

   @media (max-width: 768px) and (max-height: 300px) {
   margin-left: -8%;
   }
`;

const Skill = styled.div`
  width: 24rem;
  max-width: 500px;
  //background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.46);
  box-shadow: rgba(23, 92, 230, 0.35) 0px 4px 24px;
  border-radius: 16px;
  padding: 0px 30px;
  margin-bottom: 20px;
  margin-left: 40%;
  margin-right: 0%;

  @media (max-width: 1300px) and (min-width:1069px) {
// margin-left: 132px;
  width: 90%;
 //border: solid pink;
}     

@media (min-width: 1024px) and (max-width: 1068px) {
  width: 75%;   
  margin-left: -19.5%;
}

@media (min-width: 768px) and (max-width: 1023px) and (max-height: 1808px) {
  width: 75%;   
  margin-left: 10.5%;
}

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
  margin-left: 34px;
   width: 70%;
    max-width: 380px;
    padding: 10px 36px;
  }

  @media (min-width: 1190px) and (max-width:1300px) and (max-height: 1410px) and (min-height: 990px) {
   width: 85%;
  

}

@media (min-width: 1180px) and (max-width:1300px) and (max-height: 1000px) and (min-height: 800px) {
   width: 85%;
   margin-left: 16rem;

}

`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  //margin-bottom: 10px;
  text-align: center;
  padding: 20px;
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
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary };
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 10px 8px;
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
        data-aos-duration="3000"
        className="contanr">
            <Title>
     
                   <AnimatedLetters
                     letterClass={letterClass}
                     strArray={['S','k','i','l','l', 's ']}
                     idx={15}
                   />
                 
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
