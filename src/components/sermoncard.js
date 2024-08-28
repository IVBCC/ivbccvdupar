// src/components/SermonCard.js
const SermonCard = ({ sermon }) => (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-xl font-semibold">{sermon.title}</h3>
      <p>{sermon.preacher}</p>
      <p>{sermon.date}</p>
    </div>
  );
  
export default SermonCard;