import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components/macro";

import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
// import Works from "./components/works/Works";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
// import { PageWrapper, Sections } from "./appStyling";


const App = () => {

  return (
    <BrowserRouter>
        <Topbar />
          <Switch>
          <PageWrapper>
            <Route component={Intro}  path="/" exact />
            <Route component={Portfolio} path="/portfolio" />
            {/* <Route component={Contact} path="/contact" /> */}
          </PageWrapper>
        </Switch>
     
    </BrowserRouter>
  );
};

const PageWrapper = styled.div`
   min-height: 100vh;
    width: 100%;
    background-color: #dce7f3;
    padding: 40px;
    overflow-y: hidden;
    
`

export default App;
