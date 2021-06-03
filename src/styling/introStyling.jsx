import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const IntroWrapper = styled.section`
  display: flex;
  justify-content: space-around;
 
  @media (max-width: 959px) {
    flex-direction: column;
    }
`;


export const PageLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
`;

export const CheckIt = styled.div`
  margin-top: 80px;
  display: flex; 
  justify-content: center;

  h3 {
    font-style: italic;
   
    display: flex;
  }

  span{
    font-size: 30px;
    margin-left: 10px; 
  }

  @media (max-width: 637px){
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutWrapper = styled.article`
  display: flex;
  padding: 20px;

  @media (max-width: 637px){
    flex-direction: column;
    align-items: center;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 120px;
  margin-left: 70px;

  p {
    font-weight: bold;
  }

  @media (max-width: 637px){
    margin-left: 0;
  }
`;

export const Skills = styled.h2`
  margin-top: 30px;
`;

export const About = styled.div`
  width: 60%;
  padding: 15px;
`;

export const MeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 880px;
  height: auto;
  background: #f5f5f5;
  border-radius: 10px;
  position: relative;
  border: 3px sopd #fffaf0;
  margin-top: 80px;
  margin-bottom: 100px;
  overflow: visible;
  @media (max-width: 637px){
    margin-top: 90px;
  }

  @media (max-width: 450px){
    margin-top: 100px;
  }

  margin-top: 100px;

`;

export const Img = styled.img`
  width: 210px;
  height: 210px;
  border-radius: 50%;
  border: 3px solid #d0d0d0;
  position: absolute;
  top: -5%;
  right: 10%;

  @media (max-width: 850px){
    right: 15%;   
  }

  @media (max-width: 576px){
    right: 25%;   
  }

  @media (max-width: 637px){
    width: 180px;
    height: 180px;   
  }
`;

export const Heading = styled.h1`
  font-size: 30px;
  margin-top: 80px;
  width: 100%;
  margin-bottom: 20px;
`;
