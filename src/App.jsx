import { useState } from 'react'
import './App.scss'
import styled, { ThemeProvider } from "styled-components"
import { darkTheme } from './utils/themes';
import { BrowserRouter } from "react-router-dom";
import Hero from './components/sections/hero/Hero';
import Skills from './components/sections/skills/skills';
import Skillst from './components/sections/skillst/skillst';
import Experience from './components/sections/experience/experience';
import Portfolio from './components/sections/portfolio/projects';
import Blogs from './components/sections/blogs/projects';
import Contact from './components/sections/contacts/contact';
import Footer from './components/sections/footer/footer';
import Navbar from './components/Navbar';
import Sphere from './components/sections/sphr/sphr';
import PortfolioDetails from './components/Dialog/PortfolioDetails';

const Body = styled.div`
 background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
 
   @media (max-width: 912px) and (min-height: 1368px) {
 
  //height: 300vh;
  //border: solid brown 10px;
  padding-bottom: 0px;
 

}
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;


function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
<ThemeProvider theme={darkTheme}>
 <BrowserRouter>
 <Navbar />
   <Body>
    <div>
       <Hero />
       <Wrapper>
        <Skills />
        
       
        <Skillst />
        <Portfolio openModal={openModal} setOpenModal={setOpenModal} />
        <Experience />
        <Blogs openModal={openModal} setOpenModal={setOpenModal} />
        </Wrapper>
      
        <Contact />
        <Footer />
        
         {openModal.state && (
                <PortfolioDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )} 
    
    </div>

   </Body>
 </BrowserRouter>
</ThemeProvider>
  )
}

export default App
