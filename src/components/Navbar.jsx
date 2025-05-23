import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";


const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;
const ColorText = styled.div`
  color: rgb(72, 61, 139, 0.8);
  font-size: 36px;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
   overflow: visible;

`;
const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  font-size: 16px;
 // border: solid red;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
    
   font-size: 17px; 
   font-family: 'Coolvetica';
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
 // border: solid red;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  //margin-right: 20%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  //border: solid red;
  margin-left:-6%;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Coolvetica';
   transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  //border:solid red;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 0.5%;
  }
`;

const MobileMenu = styled.ul`
    display: none;

@media screen and (max-width: 768px) {
 // border:solid red;
  display: flex;
  //height: 280px;
  overflow: auto;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  
  padding: 0 6px;
  list-style: none;
  width: 85%;
  //height: fit-content;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 70px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "400%" : "0%")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
}
  @media screen and ( max-width:680px) and (max-height: 380px){
  height: 280px;
  }

`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
  <>
  <Nav>
   
    <NavbarContainer>
      <NavLogo to="/">
        <ColorText>&lt;</ColorText>Joshua
        <div style={{ color: theme.white }}>/</div>Ng&apos;ang&apos;a
        <ColorText>&gt;</ColorText>
      </NavLogo>

      <MobileIcon onClick={() => setIsOpen(!isOpen)}>
        <MenuRounded style={{ fontSize: '32px',  color: "inherit", }} />
      </MobileIcon>

      <NavItems>
      <NavLink href="#Home">Home</NavLink>
        <NavLink href="#About">About</NavLink>
        <NavLink href="#Skills">Skills</NavLink>
        <NavLink href="#Project">Projects</NavLink>
        <NavLink href="#Experience">Experience</NavLink>
        <NavLink href="#Blogs">Articles</NavLink>
        <NavLink href="#Contact">Contact</NavLink>
      </NavItems>

      {isOpen && (
        <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Home">
            Home
          </NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">
            About
          </NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
            Skills
          </NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
            Projects
          </NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
            Experience
          </NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#Blogs">
            Articles
          </NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#Contact">
            Contact
          </NavLink>
          <GithubButton
            href={Bio.github}
            target="_Blank"
            style={{
              background: theme.primary,
              color: theme.text_primary,
            }}
          >
            Github Profile
          </GithubButton>
        </MobileMenu>
      )}

      <ButtonContainer>
        <GithubButton href={Bio.github} target="_Blank">
          Github Profile
        </GithubButton>
      </ButtonContainer>
    </NavbarContainer>
  </Nav>
  </> 
  
  );
};

export default Navbar;
