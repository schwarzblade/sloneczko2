import React from "react";
import Room from "./Room";

export default function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Brak pokoi spełniających podane krytera. Spróbuj ponownie.</h3>
      </div>
    );
  }
  return (
    <section className="roomlist">
      <div className="roomslist-center">
        {console.log(rooms)}
        {rooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
