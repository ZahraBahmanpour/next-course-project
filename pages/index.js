import MeetupList from "../components/meetups/MeetupList";

const MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some Address 5, 12345 City",
    description: "This is First Meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some Address 5, 12345 City",
    description: "This is Second Meetup",
  },
];
const HomePage = () => {
  return <MeetupList meetups={MEETUPS} />;
};

export default HomePage;
