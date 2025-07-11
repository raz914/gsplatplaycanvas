export default function MapPanel({ isOpen, onClose, mapImage, closeImage }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-4/5 bg-black/90 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close button in top-right corner */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 p-1 rounded-xl bg-transparent hover:bg-[#cda632] transition-all duration-200 flex items-center justify-center z-50"
      >
        <img
          src={closeImage}
          alt="Close"
          className="w-full h-full object-contain transition-transform duration-200 hover:scale-110"
        />
      </button>

      {/* Content container */}
      <div className="w-full h-full flex items-center justify-center animate-slide-in px-6 text-white">
        {/* Image with overlay */}
        <div className="relative w-full max-w-4xl h-[60%] flex items-center justify-center">
          {/* Image */}
          <img
            src={mapImage}
            alt="Map"
            className="w-full h-full object-contain rounded"
          />

          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-black/40 rounded">
            <p className="text-lg font-bold text-center">
              COORDINATES: N43 34 E13 69
            </p>

            <a
              href="https://www.google.com/maps/place/Navitas+Coliving/@43.3442846,13.6907621,686m/data=!3m2!1e3!4b1!4m9!3m8!1s0x1332738647d3fefd:0x4a7a207d3a41c669!5m2!4m1!1i2!8m2!3d43.3442846!4d13.6907621!16s%2Fg%2F11jk0pn2r8?entry=tts&g_ep=EgoyMDI1MDYxMC4xIPu8ASoASAFQAw%3D%3D&skid=fa448d50-7e2f-42a8-bcac-cee7d45fc561"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#cda632] font-agipo text-white px-4 py-2 text-sm "
            >
              OPEN GOOGLE MAP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
