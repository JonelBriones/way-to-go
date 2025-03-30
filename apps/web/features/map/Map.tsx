"use client";
import React, { useEffect, useRef, useState } from "react";
import View from "../../components/View";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import GoBack from "../../components/GoBack";
import { Event } from "../../data/events";
import MapView from "./MapView";

const Map = ({ events }: { events: Event[] }) => {
  const [event, setEvent] = useState("");
  const onSelectEvent = (e: any) => {
    // setEvent(e.target.value)
    setEvent(e.target.value);
  };
  const [currentCoordinates, setCurrentCoordinates] = useState<number[]>([]);
  const map = useRef<HTMLDivElement | null | any>(null);
  const [end, setEnd] = useState([-121.988855, 37.396394]); // Default end location
  const start = [-121.98891, 37.3976]; // Fixed start location
  const [routeInstructions, setRouteInstructions] = useState<string[]>([]);
  const bounds = [
    [-122.0005, 37.3905], // Southwest corner (bottom-left)
    [-121.9805, 37.4035], // Northeast corner (top-right)
  ];

  const mapContainer = useRef(null);
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-121.98891, 37.3976],
        },
        properties: {
          title: "Mapbox",
          description: "User 2",
          imageId: 870,
          iconSize: [50, 50],
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-121.988855, 37.396394],
        },
        properties: {
          title: "Mapbox",
          description: "User 1",
          imageId: 837,
          iconSize: [50, 50],
        },
      },
    ],
  };

  async function getCurrentPosition() {
    console.log("getting location");
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("cords", position);
        setCurrentCoordinates([
          position.coords.longitude,
          position.coords.latitude,
        ]);
      });
    }
  }
  const token =
    "pk.eyJ1IjoiaWpvbmVsOTA2IiwiYSI6ImNsY3lzcWxiczE3aTMzcHQ3em54cjh4bW8ifQ.I9sz0kV9wUksqdAF-ZKKMQ";
  mapboxgl.accessToken = token;
  const [friends, setFriends] = useState([
    { name: "Paul", coordinates: [-121.988855, 37.396394] },
  ]);
  useEffect(() => {
    getCurrentPosition();
  }, []);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: start,
      zoom: 12,
    });

    map.current.setMaxBounds(bounds);

    map.current.on("load", () => {
      getRoute(end);

      map.current.addLayer({
        id: "point",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: start,
                },
              },
            ],
          },
        },
        paint: {
          "circle-radius": 10,
          "circle-color": "#3887be",
        },
      });
      map.current.on("click", (event) => {
        const coords = [event.lngLat.lng, event.lngLat.lat];
        setEnd(coords);
        updateDestination(coords);
        getRoute(coords);
      });
    });

    return () => map.current.remove();
  }, []);

  const getRoute = async (destination) => {
    if (!destination) return;

    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${start[1]};${destination[0]},${destination[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`
    );
    const json = await query.json();
    const data = json.routes[0];
    const route = data.geometry.coordinates;

    const geojson = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: route,
      },
    };

    if (map.current.getSource("route")) {
      map.current.getSource("route").setData(geojson);
    } else {
      map.current.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: geojson,
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#3887be",
          "line-width": 5,
          "line-opacity": 0.75,
        },
      });
    }
    const instructions = document.getElementById("instructions");
    const instructions_current_distance = document.getElementById(
      "instructions_current_distance"
    );
    const steps = data.legs[0].steps;
    console.log("data", data);
    let tripInstructions = "";
    for (const step of steps) {
      // tripInstructions += `<li>${step.maneuver.instruction} steps: ${Math.round(
      //   step.distance
      // )}</li>`;
      console.log("steps", step);
      setRouteInstructions([...routeInstructions, step.maneuver.instruction]);
    }
    console.log("routes", routeInstructions);
    instructions_current_distance?.innerHTML = "ggg";
    // instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
    //   data.duration / 60
    // )} min 🚴 </strong></p><ol>${tripInstructions}</ol>`;
  };

  const updateDestination = (coords) => {
    const endGeoJSON = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: coords,
          },
        },
      ],
    };

    if (map.current.getLayer("end")) {
      map.current.getSource("end").setData(endGeoJSON);
    } else {
      map.current.addLayer({
        id: "end",
        type: "circle",
        source: {
          type: "geojson",
          data: endGeoJSON,
        },
        paint: {
          "circle-radius": 10,
          "circle-color": "#f30",
        },
      });
    }
  };

  // useEffect(() => {
  //   if (currentCoordinates.length === 0) return;
  //   mapRef.current = new mapboxgl.Map({
  //     container: mapContainerRef.current,
  //     center: currentCoordinates ? currentCoordinates : [-65.017, -16.457],
  //     zoom: 9,
  //   });
  //   for (let feature of geojson.features) {
  //     const el = document.createElement("div");
  //     el.className = "marker";
  //     const width = feature.properties.iconSize[0];
  //     const height = feature.properties.iconSize[1];
  //     el.style.backgroundImage = `url(https://picsum.photos/id/${feature.properties.imageId}/${width}/${height})`;
  //     el.style.width = `${width}px`;
  //     el.style.height = `${height}px`;
  //     el.style.backgroundSize = "100%";

  //     new mapboxgl.Marker(el)
  //       .setLngLat(feature.geometry.coordinates)
  //       .addTo(mapRef.current);
  //   }

  //   const fetchData = async () => {
  //     const result = await fetch(
  //       `https://api.mapbox.com/directions/v5/mapbox/walking/-121.988855, 37.396394;-121.98891, 37.3976?geometries=geojson&access_token=${token}`
  //     );
  //     console.log("result", await result.json());
  //   };
  //   fetchData();
  //   return () => {
  //     mapRef.current.remove();
  //   };
  // }, [currentCoordinates]);

  return (
    <View>
      <div className="flex flex-col h-full">
        <GoBack />
        <span className="bg-red-50 w-40 border">Event:{event}</span>
        <select name="" id="" className="w-50 border">
          {events.map((event) => (
            <option
              key={event._id}
              value={event._id}
              onSelect={() => setEvent(event.name)}
            >
              {event.name}
            </option>
          ))}
        </select>
        <MapView mapContainer={mapContainer}></MapView>
        {/* <div id="instructions"></div> */}
      </div>
    </View>
  );
};

export default Map;
