import React from "react";
import Events from "../../features/event/Events";
import { mockEvents } from "../../data/events";
const page = () => {
  return <Events events={mockEvents} />;
};

export default page;
