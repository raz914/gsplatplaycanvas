import { useState, useEffect } from "react";
import Header from "./components/Header";
import Canvas from "./components/Canvas";
import RoomButtons from "./components/RoomButtons";
import RoomPanel from "./components/RoomPanel";
import MapPanel from "./components/MapPanel";

import mapImg from "./assets/map.png";
import closeImg from "./assets/closeIcon.png";
import coWorking from "./assets/spaces/coWorking.png";
import meeting from "./assets/spaces/meeting.png";
import smallConference from "./assets/spaces/smallConference.png";
import conference from "./assets/spaces/conference.png";
import kitchen from "./assets/spaces/kitchen.png";
import livingRoom from "./assets/spaces/livingRoom.png";
import downstairs from "./assets/spaces/downstairs.png";

import room1 from "./assets/rooms/room1.png";
import room2 from "./assets/rooms/room2.png";
import room3 from "./assets/rooms/room3.png";
import room4 from "./assets/rooms/room4.png";
import room5 from "./assets/rooms/room5.png";
import room6 from "./assets/rooms/room6.png";
import room7 from "./assets/rooms/room7.png";
import room8 from "./assets/rooms/room8.png";
import room9 from "./assets/rooms/room9.png";
import room10 from "./assets/rooms/room10.png";

const sharedSpaces = [
  { name: "COWORKING", image: coWorking },
  { name: "MEETING", image: meeting },
  { name: "SMALL CONFERENCE", image: smallConference },
  { name: "CONFERENCE", image: conference },
  { name: "KITCHEN", image: kitchen },
  { name: "LIVING ROOM", image: livingRoom },
  { name: "DOWNSTAIRS", image: downstairs },
];

const privateRoom1to6 = [
  { name: "Room 1", image: room1 },
  { name: "Room 2", image: room2 },
  { name: "Room 3", image: room3 },
  { name: "Room 4", image: room4 },
  { name: "Room 5", image: room5 },
  { name: "Room 6", image: room6 },
];

const privateRoom7to9 = [
  { name: "Room 7", image: room7 },
  { name: "Room 8", image: room8 },
  { name: "Room 9", image: room9 },
];

const privateRoom10 = [{ name: "Room 10", image: room10 }];

function App() {
  const [activePanel, setActivePanel] = useState(null); // 'rooms' | 'map' | null
  const [currentRooms, setCurrentRooms] = useState([]);
  const [panelTitle, setPanelTitle] = useState("");

  const handleButtonClick = (id) => {
    if (id === 1) {
      setPanelTitle("SHARED SPACES");
      setCurrentRooms(sharedSpaces);
      setActivePanel("rooms");
    } else if (id === 2) {
      setActivePanel("map");
    } else {
      setActivePanel(null);
    }
  };

  const handleClosePanel = () => {
    setActivePanel(null);
  };

useEffect(() => {
    const handleMessage = (event) => {
        console.log("Received message:", event); // Log the entire event
        
        // Add origin check (adjust to your PlayCanvas URL)
        // if (event.origin !== "https://playcanv.as") return;
        
        if (event.data === "sharedSpace") {
            console.log("Received sharedSpace message");
            setPanelTitle("SHARED SPACES");
            setCurrentRooms(sharedSpaces);
            setActivePanel("rooms");
        } 
        // ... other conditions
    };

    console.log("Adding message listener"); // Confirm handler setup
    window.addEventListener("message", handleMessage);

    // Send test message to yourself for verification
    window.postMessage("react_self_test", "*");

    return () => {
        window.removeEventListener("message", handleMessage);
    };
}, []);

  return (
    <div className="relative w-full h-screen">
      <Header />
      <Canvas />
      <RoomButtons onClick={handleButtonClick} />

      {/* Conditionally render panels */}
      {activePanel === "rooms" && (
        <RoomPanel
          title={panelTitle}
          isOpen={true}
          onClose={handleClosePanel}
          rooms={currentRooms}
        />
      )}

      {activePanel === "map" && (
        <MapPanel
          isOpen={true}
          onClose={handleClosePanel}
          mapImage={mapImg}
          closeImage={closeImg}
        />
      )}
    </div>
  );
}

export default App;
