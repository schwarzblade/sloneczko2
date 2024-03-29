import React from "react";
import "./App.css";

import { Home } from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import { Error } from "./pages/Error";
import { Rooms } from "./pages/Rooms";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import NewYear from "./pages/NewYear";
import Easter from "./pages/Easter";
import { Swieta } from "./pages/Swieta";
import OfertaSylwesterSwieta from "./components/OfertaSylwesterSwieta";
import { Sylwester } from "./pages/Sylwester";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/contact/" component={Contact} />
          <Route exact path="/aboutus" component={AboutUs} />
          {/* <Route exact path="/newyear" component={NewYear} /> */}
          {/* <Route exact path="/easter" component={Easter} /> */}
          {/* <Route exact path="/swieta" component={Swieta} />
          <Route exact path="/sylwester" component={Sylwester} /> */}
          <Route component={Error} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
