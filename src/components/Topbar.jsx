import { useState } from "react";
import { GitHub, LinkedIn, MailOutline } from "@material-ui/icons";

import {
  Hamburger,
  Header,
  Left,
  Menu,
  Navbar,
  PageLink,
  IconContainer,
} from "../styling/topbarStyling";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Header>
      <Left>
        <h1>Sara Stjernberg</h1>
        <h2>Frontend developer</h2>
      </Left>

      <Menu open={open} onClick={() => setOpen(!open)}>
        <Navbar>
          <PageLink to="/" exact>
            <li>About me</li>
          </PageLink>
          <PageLink to="/portfolio">
            <li>Projects</li>
          </PageLink>
        </Navbar>

        <IconContainer>
          <a
            href="https://github.com/stjernberg/"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/sara-stjernberg-12b929157/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn className="icon" />
          </a>
          <a href="mailto:sara_stjernberg@hotmail.com">
            <MailOutline className="icon" />
          </a>
        </IconContainer>
      </Menu>

      <Hamburger open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>
    </Header>
  );
};

export default Topbar;
