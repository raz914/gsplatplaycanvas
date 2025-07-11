import { useState } from "react";
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


const sharedSpaces = [
  { name: "COWORKING", image: coWorking },
  { name: "MEETING", image: meeting },
  { name: "SMALL CONFERENCE", image: smallConference },
  { name: "CONFERENCE", image: conference },
  { name: "KITCHEN", image: kitchen },
  { name: "LIVING ROOM", image: livingRoom },
  { name: "DOWNSTAIRS", image: downstairs },

];

function App() {
  const [activePanel, setActivePanel] = useState(null); // 'rooms' | 'map' | null

  const handleButtonClick = (id) => {
    if (id === 1) setActivePanel("rooms");
    else if (id === 2) setActivePanel("map");
    else setActivePanel(null);
  };

  const handleClosePanel = () => {
    setActivePanel(null);
  };

  return (
    <div className="relative w-full h-screen">
      <Header />
      <Canvas />
      <RoomButtons onClick={handleButtonClick} />

      {/* Conditionally render panels */}
      {activePanel === "rooms" && (
        <RoomPanel title="SHARED SPACES" isOpen={true} onClose={handleClosePanel} rooms={sharedSpaces} />
      )}

      {activePanel === "map" && (
        <MapPanel isOpen={true} onClose={handleClosePanel} mapImage={mapImg} closeImage={closeImg} />
      )}
    </div>
  );
}

export default App;
