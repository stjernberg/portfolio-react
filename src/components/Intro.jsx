import {
  IntroWrapper,
  PageLink,
  CheckIt,
  SkillsWrapper,
  AboutWrapper,
  Skills,
  MeContainer,
  Img,
  About,
} from "../styling/introStyling";
import ProfileImg from "../assets/profilepic.jpg";

const Intro = () => {
  return (
    <IntroWrapper>
      <MeContainer>
        <Img src={ProfileImg} />
        <AboutWrapper>
          <About>
            <p>
              I'm a Web developer with a background in education, looking for
              exiting opportunities! Working with digital tools has been a
              passion in my teaching. That has led med into the path of coding.
              I love the creativity and logic in coding and building websites.
              My goal is to build great user experiences, that are accessible
              and easy to understand.
            </p>
            <br />
            <p>
              Currently I'm doing internship with focus on frontend and Angular,
              but also a bit of .Net. that's part of a web developmnet course at
              Lexicon, an education wwhere I learned to build applications in
              Asp.net with C#, Entity Framework and Identity. I also deepended
              my knowledge of React and Redux. Before that I attended Technigo
              Bootcamp - a 24-week fast-paced remote bootcamp focused on
              JavaScript, React, Redux HTML5, CSS and server-side programming
              with Node.js. There were weekly projects covering everything from
              the basics of programming to structuring web projects in the
              latest technologies. We worked with Agile methodology and
              mob-programming and pair-programming was a significant part of the
              education.
            </p>

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
            <Skills>Skills:</Skills>
            <p>HTML</p>
            <p>CSS</p>
            <p>SASS</p>
            <p>Styled Components</p>
            <p>Bootstrap</p>
            <p>PrimeFaces</p>
            <p>PrimeNG</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>React</p>
            <p>Redux</p>
            <p>Angular</p>
            <p>Node.js</p>
            <p>C#</p>
            <p>.Net</p>
            <p>Entity Framework</p>
          </SkillsWrapper>
        </AboutWrapper>
      </MeContainer>
    </IntroWrapper>
  );
};

export default Intro;
