import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomsContainer() {
  return (
    <RoomContext>
      {
          (value) => {
              const {}
              return (
      <div>
        container
        <RoomsFilter />
        <RoomsList />
      </div>
      ); 
      } 
    }
    </RoomContext>
  );
}
