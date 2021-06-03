import styled from "styled-components/macro";

export const ProjectsWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Project = styled.article`
  margin: 50px;
  background: #f5f5f5;
  padding: 15px;
  width: 350px;
  height: 410px;
  border-radius: 2px;
  margin-right: 80px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 10px #707070;
  transition: box-shadow 0.5s ease;

  &:hover{
    box-shadow: 5px 10px 10px  #707070;
    }

   @media (max-width: 899px){
     height: auto;
   }

   @media (max-width: 535px){
     min-width: 80%;
   }
`

export const Heading = styled.h1`
  font-weight: bold;
  font-size: 40px;
  font-family: 'Squada One', cursive;
  text-align: center;
`

export const Tag = styled.p`
  font-weight: bold;
  font-size: 15px;
  background: #cedee7;
  padding: 3px;
  border-radius: 3px;
  margin-right: 10px;
  margin-top: 5px;
`
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px; 
  justify-content: center;  
`
export const ProjectLink = styled.a`
  text-decoration: none;
  color: #000;
`
export const Title = styled.h2`
   position: absolute;
   color: grey;
   text-shadow: 3px 3px #51484f;
    top: 20%;
    left: 20%;
    font-size: 30px;
    font-weight: bold;  
    font-family: 'RocknRoll One', sans-serif;
`

export const Img = styled.img`
  height: 180px; 
  width: 100%;

  &:hover{
  -webkit-filter: brightness(.5);
   filter: brightness(.5);
  } 
`
export const Description = styled.p`
  margin-top: 10px;
  font-size: 15px;
`