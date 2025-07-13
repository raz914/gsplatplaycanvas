import closeIcon from "../assets/closeIcon.png";

export default function RoomPanel({ title, isOpen, onClose, rooms }) {
  // Send message to iframe
  const sendRoomToIframe = (roomName) => {
    const iframe = document.getElementById("my-iframe");
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(roomName.toLowerCase(), "*"); // Replace '*' with origin for security
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-1/4 bg-black/80 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-white/20 flex items-center justify-between">
        <h2 className="font-agipo text-4xl font-bold text-white flex-1 text-center">
          {title}
        </h2>

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
      <div className="space-y-4 overflow-y-auto h-[calc(100%-64px)] p-4">
        {rooms.map((room, idx) => (
          <button
            key={idx}
            onClick={() => sendRoomToIframe(room.name)}
            className="flex flex-col items-center bg-transparent p-4 min-h-[120px] w-full transform transition-transform duration-200 hover:scale-105"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover"
            />
            <p className="font-agipo mt-2 text-3xl font-semibold text-white">
              {room.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
