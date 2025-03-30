import React from "react";

const MapView = ({ mapContainer }: { mapContainer: any }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col">
        <span className=" flex flex-col bg-neutral-900 text-2xl p-4">
          <span
            id="instructions_current_distance"
            className="text-white font-bold"
          >
            190ft
          </span>
          <span
            id="instructions_current_street"
            className="text-neutral-100 font-semibold"
          >
            San Anselmo Dr
          </span>
        </span>
        <span
          id="instructions_next_street"
          className="bg-neutral-600 text-neutral-100 px-4 py-2"
        >
          next instruction
        </span>
      </div>
      <div className="flex-1">
        <div id="map-container" ref={mapContainer} className="h-100" />
      </div>
      <div className="border h-20 flex gap-4 font-bold text-black text-xl p-4">
        <div className="flex flex-col">
          <span id="instructions_arrival">2:40</span>
          <span className="text-neutral-600 font-normal">arrival</span>
        </div>
        <div className="flex flex-col">
          <span id="instructions_total_duration">1:59</span>
          <span className="text-neutral-600 font-normal ">hrs</span>
        </div>{" "}
        <div className="flex flex-col">
          <span id="instructions_total_distance">4.5</span>
          <span className="text-neutral-600 font-normal">mi</span>
        </div>
      </div>
    </div>
  );
};

export default MapView;
