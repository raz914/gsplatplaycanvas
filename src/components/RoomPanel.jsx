import closeIcon from '../assets/closeIcon.png';

export default function RoomPanel({ title, isOpen, onClose, rooms }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-black/80 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header with Close Button */}
      <div className="p-2 border-b flex justify-between items-center">
        <h2 className="font-agipo text-4xl font-bold text-white">{title}</h2>
        <button
          onClick={onClose}
          className="w-10 h-10 p-1 rounded-xl bg-transparent hover:bg-[#cda632] transition-all duration-200 flex items-center justify-center"
        >
          <img
            src={closeIcon}
            alt="Close"
            className="w-full h-full object-contain transition-transform duration-200 hover:scale-110"
          />
        </button>
      </div>

      {/* Room Buttons */}
      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-64px)]">
        {rooms.map((room, idx) => (
          <button
            key={idx}
            onClick={() => console.log(`Clicked: ${room.name}`)} // You can replace this with your action
            className="flex flex-col items-center bg-black p-2 transform transition-transform duration-200 hover:scale-105"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover"
            />
            <p className="font-agipo mt-2 text-3xl font-semibold text-white">{room.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
