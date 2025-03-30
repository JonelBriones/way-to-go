import React from "react";
import Event from "../../../features/event/form/[eventId]/Event";
import { mockEvents } from "../../../data/events";

const page = ({ params }) => {
  const { eventId } = params;
  console.log(eventId);
  const event = mockEvents.find((event) => event._id == eventId);

  if (!event) {
    throw new Error("coulnd get get event");
  }
  return <Event event={event} />;
};

export default page;
