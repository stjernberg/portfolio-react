import { IntroWrapper,  PageLink, CheckIt, Heading, SkillsWrapper, AboutWrapper,  Skills, 
MeContainer, Img, About } from "../styling/introStyling";
import ProfileImg from "../assets/profilepic.jpg";

const Intro = () => {
  return (
    <IntroWrapper>
      <MeContainer>
        <Heading>Hello, I'm Sara.</Heading>
        <Img src={ProfileImg} />
        <AboutWrapper>
          <About>
            <p>
              I'm a Frontend developer with a background in education. Working
              with digital tools has been a passion in my teaching. That has led
              med into the path of coding. I love the creativity and logic in
              coding and building websites. My goal is to build great user
              experiences, that are accessible and easy to understand.
            </p>
            <br />
            <p>
              I've recently graduated from Technigo Bootcamp - a 24-week
              fast-paced remote bootcamp focused on JavaScript (ES6), React,
              HTML5, CSS and server-side programming with Node.js. With weekly
              projects covering everything from the basics of programming to
              structuring web projects in the latest technologies. We worked
              with Agile methodology with weekly sprints planning, check-ins,
              demos and retrospectives. Mob-programming and pair-programming was
              a significant part of the education.
            </p>
            <br />
            {/* <p>
              I'm currently learning Wordpress and the headless CMS Sanity. This
              portfolio site is built with Sanity and React.
            </p> */}
            <CheckIt>
            <h3>Check out my portfolio here </h3>
              <PageLink to="/portfolio">
                <span role="img" aria-label="right pointer">
                  👉
                </span>
              </PageLink>
            </CheckIt>
          </About>

          <SkillsWrapper>
            <Skills>Skills</Skills>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Styled Components</p>
            <p>React</p>
            <p>Redux</p>
            <p>Node.js</p>
            <p>MongoDB</p>
            {/* <Skills>Learning</Skills>
            <p>Sanity</p>
            <p>Wordpress</p> */}
          </SkillsWrapper>
        </AboutWrapper>
      </MeContainer>
    </IntroWrapper>
  );
};


export default Intro;
