import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state {
      slug: this.props.match.params.slug 
    }
  }

  render() {
    return <div>Single room page</div>;
  }
}
