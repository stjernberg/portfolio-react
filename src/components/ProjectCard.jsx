import {  Project,  ProjectLink,  Title,  Img,  Tags,  Tag,  Description,} from "../styling/portfolioStyling";

const ProjectCard = (props) => {

    return (
    <>
      <Project>
        <ProjectLink
          href={props.url}
          alt={props.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Title>{props.title}</Title>
          <Img src={props.img} />
          <Description>{props.description}</Description>
          <Tags>
            {props.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
        </ProjectLink>
      </Project>
    </>
  );
};

export default ProjectCard;
