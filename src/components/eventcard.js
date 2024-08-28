// src/components/EventCard.js
const EventCard = ({ event }) => (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-xl font-semibold">{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.description}</p>
    </div>
  );
  
export default EventCard;