import React from "react";
import Map from "../../features/map/Map";
import { mockEvents } from "../../data/events";
const page = () => {
  return <Map events={mockEvents} />;
};

export default page;
