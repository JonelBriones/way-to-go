"use client";
import React from "react";
import { useParams } from "next/navigation";
import View from "../../../../components/View";

const Event = () => {
  const param = useParams<{ eventId: string }>();

  return (
    <View>
      <div>Event {param.eventId}</div>
    </View>
  );
};

export default Event;
