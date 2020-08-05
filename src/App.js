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
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/contact/" component={Contact} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
