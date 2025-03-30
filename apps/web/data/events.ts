export interface Event {
  _id: string;
  name: string;
  location: string;
  image: string;
  invited: EventInvite[];
  date: Date;
}
interface EventInvite {
  name: string;
  going: boolean | null;
}
export const mockEvents: Event[] = [
  {
    _id: "evt001",
    name: "Summer Music Festival",
    location: "Golden Gate Park, San Francisco, CA",
    image: "/images/events/knock2.jpeg",
    date: new Date("2024-07-15T18:00:00"),
    invited: [
      { name: "John Doe", going: true },
      { name: "Jane Smith", going: false },
      { name: "Mike Johnson", going: null },
      { name: "Sarah Williams", going: true },
      { name: "Alex Rodriguez", going: null },
    ],
  },
  {
    _id: "evt002",
    name: "Tech Conference 2024",
    location: "Moscone Center, San Francisco, CA",
    image: "/images/events/knock2.jpeg",
    date: new Date("2024-09-22T09:00:00"),
    invited: [
      { name: "Emily Chen", going: true },
      { name: "David Kim", going: null },
      { name: "Rachel Park", going: false },
      { name: "Tom Anderson", going: true },
    ],
  },
  {
    _id: "evt003",
    name: "Outdoor Hiking Meetup",
    location: "Yosemite National Park, CA",
    image: "/images/events/knock2.jpeg",
    date: new Date("2024-06-08T07:00:00"),
    invited: [
      { name: "Chris Martinez", going: true },
      { name: "Lisa Wong", going: null },
      { name: "Ryan Thompson", going: true },
      { name: "Emma Garcia", going: true },
    ],
  },
  {
    _id: "evt004",
    name: "Art Gallery Opening",
    location: "Downtown Gallery, San Jose, CA",
    image: "/images/events/knock2.jpeg",
    date: new Date("2024-08-03T19:00:00"),
    invited: [
      { name: "Sophie Lee", going: true },
      { name: "Daniel Brown", going: false },
      { name: "Olivia Taylor", going: null },
    ],
  },
  {
    _id: "evt005",
    name: "Weekend Beach Party",
    location: "Santa Cruz Beach, CA",
    image: "/images/events/knock2.jpeg",
    date: new Date("2024-07-20T14:00:00"),
    invited: [
      { name: "Kevin Wu", going: true },
      { name: "Anna Rodriguez", going: true },
      { name: "Marcus Lee", going: false },
      { name: "Jessica Kim", going: true },
      { name: "Carlos Gomez", going: null },
    ],
  },
];
