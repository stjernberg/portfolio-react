import { useState } from "react";
import ReactPaginate from "react-paginate";
import {  ChevronLeft } from '@material-ui/icons';

import "./portfolioStyling.jsx"
import './paginationStyling.css'

import ProjectCard from "./ProjectCard";
import { projects } from "../../data";
import { Heading, ProjectsWrapper } from "./portfolioStyling";

const Portfolio = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const projectsPerPage = 6;
  const pagesVisited = pageNumber * projectsPerPage;

  const pageCount = Math.ceil(projects.length / projectsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Heading>Featured projects</Heading>
      <ProjectsWrapper>
        {projects
          .slice(pagesVisited, pagesVisited + projectsPerPage)
          .map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
     
      {/* <PaginateContainer> */}
      <ReactPaginate
        previousLabel={<>&#x3c;</>}
        nextLabel={<>&#x3e;</>}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      {/* </PaginateContainer> */}
      </ProjectsWrapper>
    </>
  );
};

export default Portfolio;
