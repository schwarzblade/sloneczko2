import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

//unique value
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  //get unique types
  let types = getUnique(rooms, "type");

  //add all

  types.map((item) => item.split(""));
  types.sort();
  types = ["wszystkie", ...types];

  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  //get unique people
  let people = getUnique(rooms, "capacity");
  people.sort((a, b) => a - b);

  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="Wyszukaj pokój"></Title>
      <form className="filter-form ">
        {/* select type*/}
        <div className="form-group">
          <label htmlFor="type">Typ </label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/*capacity */}
        <div className="form-group">
          <label htmlFor="capacity">ilośc osób</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* capcity end*/}
        {/*price */}
        <div className="form-group">
          <label htmlFor="price">cena za pokój - {price} PLN</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          ></input>
        </div>
        {/* price end*/}
        {/*size */}
        {/* <div className="form-group">
          <label htmlFor="size" className="size">
            Powierzchnia pokoju m&#178;
          </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div> */}
        {/*size end*/}
        {/*extras*/}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">Zwierzęta dozwolone</label>
          </div>
        </div>
        {/*extras end */}
      </form>
    </section>
  );
}
